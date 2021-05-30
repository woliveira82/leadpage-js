import React, { useState, useEffect } from 'react';
import { Layout, Table, Tag, Space } from 'antd';
import { CampaignListContent } from './styles';
import { api } from '../../utils/axios';

const { Header, Content } = Layout;
const columns = [
    {
        title: 'NAME',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    }, {
        title: 'BEGIN',
        dataIndex: 'auto_activation',
        key: 'auto_activation',
    }, {
        title: 'END',
        dataIndex: 'auto_deactivation',
        key: 'auto_deactivation',
    }, {
        title: 'Action',
        key: 'action',
        render: () => (
            <Space size="middle">
                <a>Select</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

export const CampaignList = () => {

    let [campaignList, setCampaignList] = useState();
    useEffect( () => {
        api.get('/campaigns', {
            headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
        }).then((response) => {
            console.log(response.data.data);
            setCampaignList(response.data.data);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <CampaignListContent>
                        
                        <Table columns={columns} dataSource={campaignList} />

                    </CampaignListContent>                   
                </Content>
        </Layout>
    </Layout>
    )
};
