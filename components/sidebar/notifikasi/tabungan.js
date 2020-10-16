import { List, Avatar, Space, Pagination } from 'antd';
import { UserOutlined } from '@ant-design/icons';


class LoadMoreList extends React.Component {
  render() {
    const listData = [];
    for (let i = 1; i < 23; i++) {
      listData.push({
        href: 'https://ant.design',
        title: `ini notif Tabungan ${i}`,
        avatar: 'https://www.clipartmax.com/png/middle/335-3351736_go-back-gallery-for-contact-person-icon-person-icon.png',
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