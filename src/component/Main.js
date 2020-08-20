import React from 'react';
import Table from './Table'
import { Layout, Avatar, Menu, Breadcrumb } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
const { Header, Footer, Sider, Content } = Layout;
const Main = () =>{
    return(
    <div>
             <Layout>
                <Header style={{ padding:20}} >
                <Avatar style={{float:'right'}} icon={<UserOutlined />} />
                <Title style={{ color:'white'}}level={3}>EVENT RAFT</Title>
                </Header>
                <Layout>
            <Sider>
                <Menu
                 defaultSelectedKeys={['Current Event']}
                 mode="inline"
                >
                    <Menu.Item key='Currentevent'> 
                     Current Event
                    </Menu.Item>
                    <SubMenu
                    title={
                        <span>
                          <MailOutlined />
                          <span>All Events</span>
                        </span>
                      }
                    >
                        <Menu.ItemGroup key='Aboutus'  title="About Us">
                            <Menu.Item key='location1'> Location 1</Menu.Item>
                            <Menu.Item key='location2'> Location 2</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout>
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item style={{fontWeight:600, color:'black', fontSize:'20px'}}> Configure Event </Breadcrumb.Item>
                <Breadcrumb.Item  style={{color:'grey'}}> Total 15 Events </Breadcrumb.Item>
            </Breadcrumb>
                <div style={{background: '#fff', padding: '24px',  minHeight: '480px', fontWeight:'bold', fontSize:'30px'}}>
                    Events
                    <Table></Table>
                </div>
                
        </Content>
            <Footer style={{ textAlign: 'center' }}>Copyright © 2020 eventRAFT All rights reserved.</Footer>
            </Layout>
            </Layout>
            </Layout>
        
    </div>

    );
}
export default Main;