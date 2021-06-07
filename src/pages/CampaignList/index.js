import React, { useState, useEffect } from 'react';
import { Layout, Table, Space } from 'antd';
import { CampaignListContent } from './styles';
import { api } from '../../utils/axios';

const { Header, Content } = Layout;
const columns = [
    {
        title: '',
        dataIndex: 'key',
        key: 'key',
    }, {
        title: 'ACTION',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    }, {
        title: 'DESCRIPTION',
        dataIndex: 'description',
        key: 'description',
    }, {
        title: 'Action',
        key: 'id',
        render: (id) => (
            <Space size='middle'>
                <a href='/campaign/{id}'>Select</a>
                <a href='/campaign'>Delete</a>
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
