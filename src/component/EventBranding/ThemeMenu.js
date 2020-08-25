import React from 'react';
import { Row, Col, Input, Checkbox } from 'antd';
import {WechatOutlined, ScheduleOutlined, TeamOutlined, EnvironmentOutlined, HeatMapOutlined, ShareAltOutlined, MediumOutlined, QrcodeOutlined, InfoCircleOutlined, SoundOutlined, TwitterOutlined, FileOutlined, GlobalOutlined, HomeOutlined} from '@ant-design/icons';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
const ThemeMenu = ()=>{
    return(
        <div >
            <Row style={{fontSize:'20px'}}>
                <Col span={1}></Col>
                <Col span={3}>
                <h6>Enabled</h6>
                </Col>
                <Col span={6}>
                <h6>App Menu Option Name</h6>
                </Col>
                <Col span={8}>
                <h6>Option Icon Color</h6>
                </Col>
                <Col span={6}>
                <h6>Option Display Sequence</h6>
                </Col>
            </Row>
            <Row style={{paddingTop:'20px'}}>
                <Col span={1}></Col>
                <Col span={1}>
                <Checkbox onChange={onChange} ></Checkbox>
                </Col>
                <Col  span={2} style={{fontSize:'18pt',color:'#b269db'}}>
                <WechatOutlined  />
                </Col>
                <Col span={4}>
                <Input placeholder="Event Menu Label" />
                </Col>
                <Col span={2}>
                
                </Col>
                <Col span={7}>
                <Input placeholder="Event Menu Label" />
                </Col>
                <Col span={1}>

                </Col>
                <Col span={4}>
                <Input type='text' placeholder="Seq"/>
                </Col>
                <Col span={2}></Col>
            </Row>
            <Row >
                <Col span={1}></Col>
                <Col span={1}>
                <Checkbox onChange={onChange} ></Checkbox>
                </Col>
                <Col style={{fontSize:'18pt',color:'#44bbe8'}} span={2}>
                    <ScheduleOutlined></ScheduleOutlined>
                </Col>
                <Col span={4}>
                <Input placeholder="Event Menu Label" />
                </Col>
                <Col span={2}>
                
                </Col>
                <Col span={7}>
                <Input placeholder="Event Menu Label"  />
                </Col>
                <Col span={1}>

                </Col>
                
                <Col span={4}>
                <Input type='text' placeholder="Seq"/>
                </Col>
                <Col span={2}></Col>
            </Row>
            <Row >
            <Col span={1}></Col>
                <Col span={1}>
                <Checkbox onChange={onChange} ></Checkbox>
                </Col>
                <Col style={{fontSize:'18pt', color:'#ca559f'}} span={2}>
                <TeamOutlined  />
                </Col>
                <Col span={4}>
                <Input placeholder="Event Menu Label" />
                </Col>
                <Col span={2}>
                
                </Col>
                <Col span={7}>
                <Input placeholder="Event Menu Label"  />
                </Col>
                <Col span={1}>

                </Col>
                <Col span={4}>
                <Input type='text' placeholder="Seq"/>
                </Col>
                <Col span={2}></Col>
            </Row>
            <Row >
            <Col span={1}></Col>
                <Col span={1}>
                <Checkbox onChange={onChange} ></Checkbox>
                </Col>
                <Col style={{fontSize:'18pt', color:'#998aff'}} span={2}>
                <HeatMapOutlined  />
                </Col>
                <Col span={4}>
                <Input placeholder="Event Menu Label" />
                </Col>
                <Col span={2}>
                
                </Col>
                <Col span={7}>
                <Input placeholder="Event Menu Label"  />
                </Col>
                <Col span={1}>

                </Col>
                
                <Col span={4}>
                <Input type='text' placeholder="Seq"/>
                </Col>
                <Col span={2}></Col>
            </Row>
            <Row >
            <Col span={1}></Col>
                <Col span={1}>
                <Checkbox onChange={onChange} ></Checkbox>
                </Col>
                <Col style={{fontSize:'18pt', color:'#4898d5'}} span={2}>
                <EnvironmentOutlined  />
                </Col>
                <Col span={4}>
                <Input placeholder="Event Menu Label" />
                </Col>
                <Col span={2}>
                
                </Col>
                <Col span={7}>
                <Input placeholder="Event Menu Label"  />
                </Col>
                <Col span={1}></Col>
                
                <Col span={4}>
                <Input type='text' placeholder="Seq"/>
                </Col>
                <Col span={2}></Col>
            </Row>
            <Row >
                <Col span={1}></Col>
                <Col span={1}>
                <Checkbox onChange={onChange} ></Checkbox>
                </Col>
                <Col  span={2} style={{fontSize:'18pt',color:'#3837d9'}}>
                <ShareAltOutlined  />
                </Col>
                <Col span={4}>
                <Input placeholder="Event Menu Label" />
                </Col>
                <Col span={2}>
                
                </Col>
                <Col span={7}>
                <Input placeholder="Event Menu Label" />
                </Col>
                <Col span={1}>

                </Col>
                <Col span={4}>
                <Input type='text' placeholder="Seq"/>
                </Col>
                <Col span={2}></Col>
            </Row>
            <Row >
                <Col span={1}></Col>
                <Col span={1}>
                <Checkbox onChange={onChange} ></Checkbox>
                </Col>
                <Col style={{fontSize:'18pt', color:'#cea103'}} span={2}>
                <MediumOutlined  />
                </Col>
                <Col span={4}>
                <Input placeholder="Event Menu Label" />
                </Col>
                <Col span={2}>
                
                </Col>
                <Col span={7}>
                <Input placeholder="Event Menu Label"  />
                </Col>
                <Col span={1}>

                </Col>
                
                <Col span={4}>
                <Input type='text' placeholder="Seq"/>
                </Col>
                <Col span={2}></Col>
            </Row>
            <Row >
            <Col span={1}></Col>
                <Col span={1}>
                <Checkbox onChange={onChange} ></Checkbox>
                </Col>
                <Col style={{fontSize:'18pt', color:'#9b6cb0'}} span={2}>
                <QrcodeOutlined  />
                </Col>
                <Col span={4}>
                <Input placeholder="Event Menu Label" />
                </Col>
                <Col span={2}>
                
                </Col>
                <Col span={7}>
                <Input placeholder="Event Menu Label"  />
                </Col>
                <Col span={1}>

                </Col>
                <Col span={4}>
                <Input type='text' placeholder="Seq"/>
                </Col>
                <Col span={2}></Col>
            </Row>
            <Row >
            <Col span={1}></Col>
                <Col span={1}>
                <Checkbox onChange={onChange} ></Checkbox>
                </Col>
                <Col style={{fontSize:'18pt', color:'#fd5555'}} span={2}>
                <InfoCircleOutlined />
                </Col>
                <Col span={4}>
                <Input placeholder="Event Menu Label" />
                </Col>
                <Col span={2}>
                
                </Col>
                <Col span={7}>
                <Input placeholder="Event Menu Label"  />
                </Col>
                <Col span={1}>

                </Col>
                
                <Col span={4}>
                <Input type='text' placeholder="Seq"/>
                </Col>
                <Col span={2}></Col>
            </Row>
            <Row >
            <Col span={1}></Col>
                <Col span={1}>
                <Checkbox onChange={onChange} ></Checkbox>
                </Col>
                <Col style={{fontSize:'18pt' , color:'#ca559f'}} span={2}>
                <SoundOutlined  />
                </Col>
                <Col span={4}>
                <Input placeholder="Event Menu Label" />
                </Col>
                <Col span={2}>
                
                </Col>
                <Col span={7}>
                <Input placeholder="Event Menu Label"  />
                </Col>
                <Col span={1}></Col>
                
                <Col span={4}>
                <Input type='text' placeholder="Seq"/>
                </Col>
                <Col span={2}></Col>
            </Row>
            <Row >
                <Col span={1}></Col>
                <Col span={1}>
                <Checkbox onChange={onChange} ></Checkbox>
                </Col>
                <Col style={{fontSize:'18pt', color:'#44bbe8'}} span={2}>
                <TwitterOutlined  />
                </Col>
                <Col span={4}>
                <Input placeholder="Event Menu Label" />
                </Col>
                <Col span={2}>
                
                </Col>
                <Col span={7}>
                <Input placeholder="Event Menu Label"  />
                </Col>
                <Col span={1}>

                </Col>
                
                <Col span={4}>
                <Input type='text' placeholder="Seq"/>
                </Col>
                <Col span={2}></Col>
            </Row>
            <Row >
            <Col span={1}></Col>
                <Col span={1}>
                <Checkbox onChange={onChange} ></Checkbox>
                </Col>
                <Col style={{fontSize:'18pt', color:'#cb9b42'}} span={2}>
                <FileOutlined  />
                </Col>
                <Col span={4}>
                <Input placeholder="Event Menu Label" />
                </Col>
                <Col span={2}>
                
                </Col>
                <Col span={7}>
                <Input placeholder="Event Menu Label"  />
                </Col>
                <Col span={1}>

                </Col>
                <Col span={4}>
                <Input type='text' placeholder="Seq"/>
                </Col>
                <Col span={2}></Col>
            </Row>
            <Row >
            <Col span={1}></Col>
                <Col span={1}>
                <Checkbox onChange={onChange} ></Checkbox>
                </Col>
                <Col style={{fontSize:'18pt', color:'#5e02e6'}} span={2}>
                <GlobalOutlined />
                </Col>
                <Col span={4}>
                <Input placeholder="Event Menu Label" />
                </Col>
                <Col span={2}>
                
                </Col>
                <Col span={7}>
                <Input placeholder="Event Menu Label"  />
                </Col>
                <Col span={1}>

                </Col>
                
                <Col span={4}>
                <Input type='text' placeholder="Seq"/>
                </Col>
                <Col span={2}></Col>
            </Row>
            <Row >
            <Col span={1}></Col>
                <Col span={1}>
                <Checkbox onChange={onChange} ></Checkbox>
                </Col>
                <Col style={{fontSize:'18pt', color:'#568ff6'}} span={2}>
                <HomeOutlined  />
                </Col>
                <Col span={4}>
                <Input placeholder="Event Menu Label" />
                </Col>
                <Col span={2}>
                
                </Col>
                <Col span={7}>
                <Input placeholder="Event Menu Label"  />
                </Col>
                <Col span={1}></Col>
                
                <Col span={4}>
                <Input type='text' placeholder="Seq"/>
                </Col>
                <Col span={2}></Col>
            </Row>
            <Row >
                <Col span={1}></Col>
                <Col span={1}>
                <Checkbox onChange={onChange} ></Checkbox>
                </Col>
                <Col  span={2} style={{fontSize:'18pt',color:'#b269db'}}>
                <WechatOutlined  />
                </Col>
                <Col span={4}>
                <Input placeholder="Event Menu Label" />
                </Col>
                <Col span={2}>
                
                </Col>
                <Col span={7}>
                <Input placeholder="Event Menu Label" />
                </Col>
                <Col span={1}>

                </Col>
                <Col span={4}>
                <Input type='text' placeholder="Seq"/>
                </Col>
                <Col span={2}></Col>
            </Row>
           

        </div>
    );
}

export default ThemeMenu;