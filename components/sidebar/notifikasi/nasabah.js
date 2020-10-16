// import { List, Avatar, Space, Pagination } from 'antd';
// import { UserOutlined } from '@ant-design/icons';


// class LoadMoreList extends React.Component {
//   render() {
//     const listData = [];
//     for (let i = 1; i < 50; i++) {
//       listData.push({
//         href: 'https://ant.design',
//         title: `ini notif Nasabah ${i}`,
//         avatar: 'https://www.clipartmax.com/png/middle/335-3351736_go-back-gallery-for-contact-person-icon-person-icon.png',
//       });
//     }

//     const IconText = ({ icon, text }) => (
//       <Space>
//         {React.createElement(icon)}
//         {text}
//       </Space>
//     );
//     return (
//       <List
//         itemLayout="vertical"
//         size="large"
//         pagination={{
//           onChange: page => {
//             console.log(page);
//           },
//           pageSize: 5,
//         }}
        
//         dataSource={listData}
//         renderItem={item => (
//           <List.Item
//             key={item.title}
//             actions={[
//             ]}
//           >
//             <List.Item.Meta
//               avatar={<Avatar src={item.avatar} />}
//               title={<a href={item.href}>{item.title}</a>}
//               description={item.description}
//             />
//             {item.content}
//           </List.Item>
//         )}
//       />
//     );
//   }
// }

// export default LoadMoreList;

import { List, Avatar, Button, Skeleton } from 'antd';

import reqwest from 'reqwest';


const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class LoadMoreList extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  };

  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      });
    });
  }

  getData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res);
      },
    });
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData(res => {
      const data = this.state.data.concat(res.results);
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        },
      );
    });
  };

  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;

    return (
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
          <List.Item
            
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://www.clipartmax.com/png/middle/335-3351736_go-back-gallery-for-contact-person-icon-person-icon.png" />
                }
                title={<a href="https://ant.design">{item.name.last}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />

            </Skeleton>
          </List.Item>
        )}
      />
    );
  }
}
export default LoadMoreList;