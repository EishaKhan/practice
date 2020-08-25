import React from 'react';
import { Form, Input,  Button} from 'antd';
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
    label="Organizer Name"
    rules={[
        {
        required: true,
        },
    ]}
    >
    <Input  placeholder="Organizer Name"/>
    </Form.Item>

    <Form.Item
    label= "Organizer Email"
    rules={[
        {
        required: true,
        },
    ]}
    >
    <Input  placeholder= "Organizer Email" />
    </Form.Item>

    <Form.Item
    label= "Organizer Phone No"
    rules={[
        {
        required: true,
        },
    ]}
    >
    <Input  placeholder= "Organizer Phone Number" />
    </Form.Item>

    <Form.Item
    label= "Company Name"
    rules={[
        {
        required: true,
        },
    ]}
    >
    <Input  placeholder= "Company Name" />
    </Form.Item>

    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>

    <Button  htmlType="previous">
        Previous
    </Button>

    <Button type="primary" htmlType="submit" style={{margin:'60px'}}>
        Submit
    </Button>

    <Button  htmlType="next step">
        Next Step
    </Button>
    </Form.Item>
    </Form>
  );
};

function OrganizerDetails(props) {
    return (
        <div>
            <h4 style={{marginLeft:'200px', paddingTop:'20px'}}>Add Organizer details</h4>
            <Demo/>
        </div>
    );
}

export default OrganizerDetails;