import React from 'react';
 import Event from './Event';
import { Layout, Avatar, Menu, Breadcrumb  } from 'antd';
import { UserOutlined, SettingOutlined, FileOutlined, NotificationOutlined, ContactsOutlined , CarryOutOutlined , TeamOutlined, MessageOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import Search from 'antd/lib/input/Search';
import SubMenu from 'antd/lib/menu/SubMenu';
import ThemeMenu from './EventBranding/ThemeMenu';
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
                          <SettingOutlined />
                          <span>Setup</span>
                        </span>
                      }
                    >
                        <Menu.ItemGroup key="Event">
                            <Menu.Item key="eventdetails" >Event Details</Menu.Item>
                            <Menu.Item key="setup locations" >Setup Locations</Menu.Item>
                            <Menu.Item key="organizer details" >Organizer Details</Menu.Item>
                            <Menu.Item key="event access settings" >Event Access Setting</Menu.Item>
                            <Menu.Item key="event social features" >Event Social Features</Menu.Item>
                            <Menu.Item key="Branding" >Branding</Menu.Item>
                            <Menu.Item key="Menu Items" >Menu Items</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    
                    <SubMenu
                    title={
                        <span>
                          <FileOutlined />
                          <span>Files & Resources</span>
                        </span>
                      }
                    >
                    </SubMenu>
                    <SubMenu
                    title={
                        <span>
                          <NotificationOutlined />
                          <span>Speakers</span>
                        </span>
                      }
                      >
                    </SubMenu>
                    <SubMenu
                    title={
                        <span>
                          <ContactsOutlined />
                          <span>Sessions</span>
                        </span>
                      }
                      >
                    </SubMenu>
                    <SubMenu
                    title={
                        <span>
                          <CarryOutOutlined />
                          <span>Attendees</span>
                        </span>
                      }
                      >
                    </SubMenu>
                    <SubMenu
                    title={
                        <span>
                          <TeamOutlined />
                          <span>Sponsors</span>
                        </span>
                      }
                      >
                    </SubMenu>

                    <SubMenu
                    title={
                        <span>
                          <MessageOutlined />
                          <span>Communication</span>
                        </span>
                      }
                    >
                        <Menu.ItemGroup key="Communication">
                            <Menu.Item key="announcements" >Announcements</Menu.Item>
                            <Menu.Item key="notifications" >Notifications</Menu.Item>
                            <Menu.Item key="feed" >Feed</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>

                    <SubMenu
                    title={
                        <span>
                          <SettingOutlined />
                          <span>Settings</span>
                        </span>
                      }
                    >
                        <Menu.ItemGroup key="Settings">
                            <Menu.Item key="Sessiontypes" >Session Types</Menu.Item>
                            <Menu.Item key="sessiontracks" >Session Tracks</Menu.Item>
                            <Menu.Item key="sessionlevels" >Session Levels</Menu.Item>
                            <Menu.Item key="sponsortypes" >Sponsor Types</Menu.Item>
                            <Menu.Item key="floorplans" >Floor Plans</Menu.Item>
                            <Menu.Item key="pages" >Pages</Menu.Item>
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
                              {/* <Event/>  */}
                            <ThemeMenu></ThemeMenu>
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