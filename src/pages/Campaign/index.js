import React, { useState, useEffect } from 'react';
import { Layout, Table, Space, Switch, DatePicker } from 'antd';
import { Page, PageContent, H1, P, H2, PageRight, PageLeft, InfoGrid } from './styles';
import { api } from '../../utils/axios';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';


const { Header, Content } = Layout;
const columns = [
    {
        title: '',
        dataIndex: 'active',
        key: 'key',
    }, {
        title: 'ACTION',
        dataIndex: 'action',
        key: 'action',
        render: action => <a>{action.name}</a>,
    }, {
        title: 'CONTENT',
        dataIndex: 'body',
        key: 'body',
        render: body => <p>body</p>,
    }, {
        title: 'ACTIONS',
        key: 'id',
        render: (id) => (
            <Space size='middle'>
                <a href='/email/{id}'>Select</a>
                <a href='/email/{id}'>Delete</a>
            </Space>
        ),
    },
];

function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
}
  
function onOk(value) {
    console.log('onOk: ', value);
}

export const Campaign = () => {

    let [campaign, setCampaign] = useState();
    useEffect( () => {
        api.get(`/campaigns/${2}`, {
            headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
        }).then((response) => {
            setCampaign(response.data.data);
            console.log(response.data.data);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>

                    <Page>
                        <PageContent>
                            <H1>{ campaign ? campaign.name.toUpperCase() : 'CAMPAIGN NAME' }</H1>
                        </PageContent>
                        <PageContent>
                            <P>{ campaign ? campaign.description : 'Campaign description' } </P>
                        </PageContent>
                        <PageContent>
                            <H2>REGISTRATIONS</H2>
                        </PageContent>
                        <PageContent>
                            <InfoGrid>
                                <PageRight>Open:</PageRight>
                                <PageLeft>
                                    <Switch
                                        checkedChildren={ <CheckOutlined /> }
                                        unCheckedChildren={ <CloseOutlined /> }
                                        checked={ campaign ? campaign.is_active : false }
                                    />
                                </PageLeft>
                                <PageRight>Open automatically:</PageRight>
                                <PageLeft>
                                    <Space direction="vertical" size={ 12 }>
                                        <DatePicker showTime onChange={onChange} onOk={ onOk } />
                                    </Space>
                                </PageLeft>
                                <PageRight>Close automatically:</PageRight>
                                <PageLeft>
                                    <Space direction="vertical" size={ 12 }>
                                        <DatePicker showTime onChange={ onChange } onOk={ onOk } />
                                    </Space>
                                </PageLeft>
                            </InfoGrid>
                        </PageContent>
                        <PageContent>
                            <H2>LEADS</H2>
                        </PageContent>
                        <PageContent>
                            <InfoGrid>
                                <PageRight>visits:</PageRight>
                                <div>
                                    { campaign ? campaign.description : 'Campaign description' }
                                </div>
                                <PageRight>Registrations:</PageRight>
                                <div>
                                    { campaign ? campaign.description : 'Campaign description' }
                                </div>
                                <PageRight>Confirmations:</PageRight>
                                <div>
                                    { campaign ? campaign.description : 'Campaign description' }
                                </div>
                            </InfoGrid>
                        </PageContent>
                        <PageContent>
                            <H2>E-MAILS</H2>
                        </PageContent>
                        <PageContent>
                            <Table columns={columns} dataSource={[]} />
                        </PageContent>
                    </Page>
                </Content>
            </Layout>
        </Layout>
    )
};
