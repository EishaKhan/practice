import React from 'react';
import { Row, Col, Button, Input } from 'antd';
import UploadImage from './UploadImage';
 import ColorPicker from './ColorPicker';

function EventBranding(props) {
    return (
        <div>
            <Row>
               <Col span={24}>
                   <h2>Event Branding</h2>
               </Col>
            </Row>
            <hr />
            <Row style={{paddingTop:'30px'}}>
                <Col span={6}>
                    <h3>Event Icon</h3>
                </Col>
                <Col span={6}>
                    <UploadImage />
                    <span>Allowed file types: png, jpg, jpeg.</span>
                    <span>Recommended Dimensions : 1024 (w) x 1024 (h) px</span>
                </Col>
                <Col span={12}></Col>
            </Row>
            <Row style={{paddingTop:'30px'}}>
                <Col span={6}>
                    <h3>Event Banner</h3>
                </Col>
                <Col span={6}>
                    <UploadImage />
                    <span>Allowed file types: png, jpg, jpeg.</span>
                    <span>Recommended Dimensions : 420 (w) x 1020 (h) px</span>
                </Col>
                <Col span={12}></Col>
            </Row>
            <h3>Event Color</h3>
            <Row>
            <Col span={1}></Col>
               <Col span={11}>
                 
                    <ColorPicker/> 
               </Col>
               <Col span={12}></Col>
            </Row>
            <hr />
            <Row>
                <Col span={24}>   
                    <Button type="primary"  htmlType="submit" style={{margin:'60px'}}>
                        Submit
                    </Button>
                    <Button  htmlType="next step">
                        Cancel
                    </Button>
                 </Col>
            </Row>
        </div>
    );
}

export default EventBranding;