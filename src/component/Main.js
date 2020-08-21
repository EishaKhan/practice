import React from 'react';
import Event from './Event';
import { Layout, Avatar, Menu, Breadcrumb  } from 'antd';
import { UserOutlined, MailOutlined, GlobalOutlined,  LaptopOutlined, TrophyOutlined, ProfileOutlined, EnvironmentOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import Search from 'antd/lib/input/Search';
import SubMenu from 'antd/lib/menu/SubMenu';



const { Header, Footer, Sider, Content } = Layout;
const Main = () =>{
    return(
    <div>
             <Layout>
                <Header style={{ padding:20 }} >
                <Avatar style={{float:'right'}} icon={<UserOutlined />} />
                <Title style={{ color:'white'}}level={3}>EVENT RAFT</Title>
                </Header>
                <Layout >
                 <Sider >
                <Menu
                 defaultSelectedKeys={['Current Event']}
                  mode="inline"
                >
                <SubMenu
                     title={
                       <span>Current Event</span>
                     }
                     >
                      <Menu.ItemGroup key='Aboutus'>
                          <Menu.Item key="thermalpower">Thermal Power O&M-2020</Menu.Item>
                      </Menu.ItemGroup> 
                </SubMenu>
                   <SubMenu
                    title={
                        <span>
                          <MailOutlined />
                          <span>Events Config</span>
                        </span>
                      }
                    >
                        <Menu.ItemGroup key="Event">
                            <Menu.Item key="eventdetails"  icon={<GlobalOutlined style={{fontSize:'18pt'}} />}>Event Details</Menu.Item>
                            <Menu.Item key="setup locations" icon={<EnvironmentOutlined style={{fontSize:'18pt'}}/>}>Setup Locations</Menu.Item>
                            <Menu.Item key="organizer details" icon= {<LaptopOutlined style={{fontSize:'18pt'}}/>}>Organizer Details</Menu.Item>
                            <Menu.Item key="event access settings" icon= {<TrophyOutlined style={{fontSize:'18pt'}}/>}>Event Access Setting</Menu.Item>
                            <Menu.Item key="event social features" icon= {<ProfileOutlined style={{fontSize:'18pt'}}/>}>Event Social Features</Menu.Item>                          
                        </Menu.ItemGroup>
                    </SubMenu>
                </Menu>
                </Sider>
                 <Layout>
                    <Content style={{ padding: '0 50px', margin:'24px 16px 0' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item style={{fontWeight:600, color:'black', fontSize:'20px'}}> Configure Event </Breadcrumb.Item>
                            <Breadcrumb.Item  style={{color:'grey'}}> Total 15 Events </Breadcrumb.Item>
                            </Breadcrumb>
                        <div style={{background: '#fff', padding: '24px',  minHeight: '480px',  fontSize:'30px'}}>
                                         Events
                            <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ width: 300, margin:'20', padding:'10px', float:'right', marginTop:'10px' }}
                            />
                             <p style={{fontSize:'15px', fontWeight:'200', color:'black'}}>Showing 1 to 10 of 15 entries</p>
                             <Event/>
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