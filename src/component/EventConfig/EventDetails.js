import React from 'react'
import { Form, Input,  Button,  DatePicker,  Select } from 'antd';
const { Option } = Select;
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
    <Form style={{width:'600px'}}  {...layout} name="nest-messages" onFinish={onFinish}>
    <Form.Item
    name={['user', 'name']}
    label="Event Title"
    rules={[
        {
        required: true,
        },
    ]}
    >
    <Input  placeholder="Please Enter Event Title"/>
    </Form.Item>
    <Form.Item
    name={['user', 'Event Code']}
    label="Event Code"
    rules={[
        {
        required: true,
        },
    ]}
    >
    <Input  placeholder="Please Enter Event Code" />
    </Form.Item>

    <Form.Item label="Start Date">
        <DatePicker />
    </Form.Item>

    <Form.Item label="End Date">
        <DatePicker />
    </Form.Item>

    <Form.Item
    name={['user', 'Event TimeZone']}
    label="Event TimeZone"
    rules={[
        {
        required: true,
    }
    ]}
    >
    <Select placeholder="Select TimeZone">
    <Option value="Zhejiang">Zhejiang</Option>
    <Option value="Jiangsu">Jiangsu</Option>
    </Select>
    </Form.Item>

    <Form.Item name={['user', 'Event Website']} label="Event Website">
    <Input  placeholder="Event Website"/>
    </Form.Item>

    <Form.Item name={['user', 'Event Discription']} label="Event Discription">
    <Input.TextArea  placeholder="Event Discription..."/>
    </Form.Item>

    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
    <Button type="primary" htmlType="submit">
        Submit
    </Button>
    </Form.Item>
    </Form>
  );
};



const EventDetail = () =>{
    return(
        <div >
        <div>
           
           <h4 style={{marginLeft:'200px', paddingTop:'20px'}}>Enter Event Details</h4> 
           <Demo/>
           </div>
        </div>
    );
}
 export default EventDetail;