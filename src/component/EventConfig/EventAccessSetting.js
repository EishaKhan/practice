import React from 'react';
import { Form, Input,  Button, Select} from 'antd';
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
    
    <Form style={{width:'600px'}}  {...layout} name="nest-messages" onFinish={onFinish} >
    <Form.Item
    
    label="Event Publish Status"
    rules={[
        {
        required: true,
        },
        ]}
    >
      <Select placeholder="Select Event Access">
          <Option value="Zhejiang">Published & Searchable</Option>
          <Option value="Jiangsu">Published & Not Searchable</Option>
          <Option value="Unpublished"> Unpublished </Option>
      </Select>
    </Form.Item>

    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
    <Button htmlType="previous">
        Previous
    </Button>

    <Button type="primary"  htmlType="submit" style={{margin:'60px'}}>
        Submit
    </Button>

    
    <Button  htmlType="next step">
        Next Step
    </Button>
    </Form.Item>
    
   
    </Form>
  );
};

function EventAccessSetting() {
    return (
        <div>
            <h4 style={{marginLeft:'200px', paddingTop:'20px'}}>Event Access Settings</h4>
            <Demo/>
        </div>
    );
}

export default EventAccessSetting;