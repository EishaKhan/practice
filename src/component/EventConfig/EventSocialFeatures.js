import React from 'react';
import { Form, Input, Switch, Button } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


const Demo = () => {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <Form style={{width:'600px'}}  {...layout} name="nest-messages" onFinish={onFinish} >
    <Form.Item
    label="Twitter"
    rules={[
        {
        required: true,
        },
    ]}
    >
    <Input  placeholder="#"/>
    </Form.Item>

    <Form.Item label="Allow Post Attendee">
          <Switch style={{backgroundColor:'black'}} />
    </Form.Item>

    <Form.Item name="Switch" label="Allow Change "  valuePropName="checked">
          <Switch style={{backgroundColor:'black'}} />
    </Form.Item>

    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
    <Button type="primary" htmlType="submit" style={{float:'right'}}>
        Submit
    </Button>

    <Button type="grey" htmlType="submit">
        Previous
    </Button>
    </Form.Item>
    </Form>
  );
};

function EventSocialFeatures() {
    return (
        <div>
            <h4 style={{marginLeft:'200px'}}>Event Social Features </h4>
            <Demo/>
        </div>
    );
}
export default EventSocialFeatures;