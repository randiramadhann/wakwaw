import { List, Avatar, Space, Pagination } from 'antd';
import { UserOutlined } from '@ant-design/icons';


class LoadMoreList extends React.Component {
  render() {
    const listData = [];
    for (let i = 1; i < 50; i++) {
      listData.push({
        href: 'https://ant.design',
        title: `ini notif Nasabah ${i}`,
        avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clipartmax.com%2Fmiddle%2Fm2i8m2A0K9H7N4m2_person-icons-person-icon%2F&psig=AOvVaw1gC3Aun079p39Qa_6kX5Sx&ust=1600098879775000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDxk-2-5usCFQAAAAAdAAAAABAO',
      });
    }

    const IconText = ({ icon, text }) => (
      <Space>
        {React.createElement(icon)}
        {text}
      </Space>
    );
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 5,
        }}
        
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    );
  }
}

export default LoadMoreList;