import React, { Component } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Table, Button } from 'antd';


const data = [
    {
      key: '1',
      name: 'DayinDublin',
      number: '1',
      startdate: '15 feb 2020',
      enddate: '15 Mar 2020',
      eventcode: 'DayInDublin',
      status: <Button danger icon={<CloseOutlined />}>Inactivate</Button>
      },
    {
        key: '2',
        name: '1ST INTERNATIONAL MERGERS CONFERENCE (IMS)',
        number: '2',
        startdate: '19 Feb 2020',
        enddate: '19 Feb 2020',
        eventcode: 'IMC2020',
        status: <Button danger icon={<CloseOutlined />}>Inactivate</Button>
      },
      {
        key: '3',
        name: 'DTed Talks - Demo Event',
        number: '3',
        startdate: '24 Feb 2020',
        enddate: '28 Feb 2020',
        eventcode: 'tedtalks',
        status: <Button danger icon={<CloseOutlined />}>Inactivate</Button>
      },
      {
        key: '4',
        name: 'WiMINBelfast - 2020',
        number: '4',
        startdate: '21 Mar 2020',
        enddate: '	21 Mar 2020',
        eventcode: 'WiMINBelfast-2020',
        status: <Button danger icon={<CloseOutlined />}>Inactivate</Button>
      },
      {
        key: '5',
        name: 'આસ્થા',
        number: '5',
        startdate: '01 Apr 2020',
        enddate: '	30 Apr 2020',
        eventcode: 'sampleeevent',
        status: <Button danger icon={<CloseOutlined />}>Inactivate</Button>
      },
    {
      key: '6',
      name: 'PowerShell + DevOps Global Summit 2020',
      number: '6',
      startdate: '27 Apr 2020',
      enddate: '	30 Apr 2020',
      eventcode: 'PowerShell2020',
      status: <Button danger icon={<CloseOutlined />}>Inactivate</Button>
    
    },
    {
      key: '7',
      name: 'AssetWorld User Conference - AssetWorks',
      number: '7',
      startdate: '27 Apr 2020',
      enddate: '01 May 2020',
      eventcode: 'AssetWorld2020',
      status: <Button danger icon={<CloseOutlined />}>Inactivate</Button>

    },
    {
      key: '8',
      name: '2020 Larissa - Major Cities of Europe',
      number: '8',
      startdate: '27 May 2020',
      enddate: '29 May 2020',
      eventcode: '	2020-larissa-mce',
      status: <Button danger icon={<CloseOutlined />}>Inactivate</Button>
    
    },
    {
        key: '9',
        name: 'PowerShell Conference EU 2020',
        number: '9',
        startdate: '02 Jun 2020',
        enddate: '	05 Jun 2020',
        eventcode: 'PSConfEU2020',
        status: <Button danger icon={<CloseOutlined />}>Inactivate</Button>
      },
      {
        key: '10',
        name: 'President’s Conference 2020',
        number: '10',
        startdate: '09 Jun 2020',
        enddate: '	10 Jun 2020',
        eventcode: 'pres-conf-2020',
        status: <Button danger icon={<CloseOutlined />}>Inactivate</Button>
      },
      {
        key: '11',
        name: 'Demo - Good Food Conference',
        number: '11',
        startdate: '23 Aug 2020',
        enddate: '	26 Aug 2020',
        eventcode: 'GoodFood',
        status: <Button danger icon={<CloseOutlined />}>Inactivate</Button>
      },
      {
        key: '12',
        name: 'Thermal Power O&M - 2020',
        number: '12',
        startdate: '	31 Aug 2020',
        enddate: '	31 Aug 2020',
        eventcode: 'TPP2020',
        status: <Button danger icon={<CloseOutlined />}>Inactivate</Button>
      },
      {
        key: '13',
        name: 'cemWHR - 2020',
        number: '13',
        startdate: '02 Sep 2020',
        enddate: '	02 Sep 2020',
        eventcode: 'cemWHR',
        status: <Button danger icon={<CloseOutlined />}>Inactivate</Button>
      },
      {
        key: '14',
        name: 'Osteoporosis en poblaciones especiales',
        number: '14',
        startdate: '25 Sep 2020',
        enddate: '	26 Sep 2020',
        eventcode: 'MedInGuatemala',
        status: <Button danger icon={<CloseOutlined />}>Inactivate</Button>
      },
      {
        key: '15',
        name: '4th Innovation Economics for Antitrust Lawyers Conference',
        number: '15',
        startdate: '02 Oct 2020',
        enddate: '	02 Oct 2020',
        eventcode: 'KCL2020',
        status: <Button danger icon={<CloseOutlined />}>Inactivate</Button>
      },
  ];

class Event extends Component {
    constructor(props){
        super(props);
        this.state = {
            filteredInfo: null,
            sortedInfo: null,
          };
        }
   render(){
   
    const columns = [
        {
            title: '#',
            dataIndex: 'number',
        
        },
      {

        title: 'Event Name',
        dataIndex: 'name',


       },
      {
        title: 'Start Date',
        dataIndex: 'startdate',

      },
      {
        title: 'End Date',
        dataIndex: 'enddate',
        
      },
      {
        title: 'Event Code',
        dataIndex: 'eventcode',
       
      },
      {
        title: 'Status',
        dataIndex: 'status',
    
      },
     
    ];
        return (
            <div>
               <Table columns={columns} dataSource={data} 
               scroll={{ y: 600 }}
                 />
            </div>
        );
    }
}



export default Event;