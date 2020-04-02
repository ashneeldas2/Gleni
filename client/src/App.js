import React, { Component } from 'react';

// Styling
import './App.css';

// Components
import Review from './components/Review';

// Antd imports
import { Layout, Menu, Breadcrumb } from 'antd';
import { DashboardOutlined, FileTextOutlined } from '@ant-design/icons';

// Antd simplifications
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  state = {
    current: 'application:review',
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Project Gleni</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Design & Tech Initiative</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="mail">
                <DashboardOutlined />
                Dashboard
              </Menu.Item>
              <SubMenu
                title={
                  <span className="submenu-title-wrapper">
                    <FileTextOutlined />
                    Applicants
                  </span>
                }
              >
                <Menu.Item key="application:overview">Overview</Menu.Item>
                <Menu.Item key="application:review">Review</Menu.Item>
              </SubMenu>
            </Menu>
            <Review />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Gleni © 2020 Created by Han Wang
        </Footer>
      </Layout>
    );
  }
}

export default App;
