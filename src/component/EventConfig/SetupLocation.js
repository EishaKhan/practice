import React from 'react';
import { Form, Input,  Button, Select } from 'antd';
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
   
  },
  
};

const Demo = () => {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <Form style={{width:'600px'}}  {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
    <Form.Item
    label="Address Line 1"
    rules={[
        {
        required: true,
        },
    ]}
    >
    <Input  placeholder="Address Line 1"/>
    </Form.Item>

    <Form.Item
    label= "Address Line 2"
    rules={[
        {
        required: true,
        },
    ]}
    >
    <Input  placeholder= "Address Line 2" />
    </Form.Item>

    <Form.Item
    label= "Postal code"
    rules={[
        {
        required: true,
        },
    ]}
    >
    <Input  placeholder= "Postal code" />
    </Form.Item>

    <Form.Item
    label= "City"
    rules={[
        {
        required: true,
        },
    ]}
    >
    <Input  placeholder= "City" />
    </Form.Item>

    <Form.Item
    label= "State"
    rules={[
        {
        required: true,
        },
    ]}
    >
    <Input  placeholder= "State" />
    </Form.Item>

    <Form.Item
    label= "Country"
    rules={[
        {
        required: true,
        },
    ]}
    >
    <Input  placeholder= "Country" />
    </Form.Item>

    <Form.Item
    label= "Event Venue"
    rules={[
        {
        required: true,
        },
    ]}
    >
    <Input  placeholder= "Event Venue" />
    </Form.Item>

    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
    <Button type="primary" htmlType="submit">
        Submit
    </Button>
    </Form.Item>
    </Form>
  );
};

function SetupLocation() {
    return (
        <div>
            <h3>Setup Event Location Details</h3>
            <Demo/>
        </div>
    );
}

export default SetupLocation;