import React, { useState, useEffect } from 'react';
import { Layout, Table, Space } from 'antd';
import { Page, PageContent, H1, P, H2, PageRight, PageLeft } from './styles';
import { api } from '../../utils/axios';
import ActionButton from 'antd/lib/modal/ActionButton';


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

export const Campaign = () => {

    let [campaign, setCampaign] = useState();
    useEffect( () => {
        api.get(`/campaigns/${2}`, {
            headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
        }).then((response) => {
            console.log(response.data.data);
            setCampaign(response.data.data);
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
                            <H1>CAMPAIGN NAME</H1>
                        </PageContent>
                        <PageContent>
                            <P>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </P>
                        </PageContent>
                        <PageContent>
                            <H2>REGISTRATIONS</H2>
                        </PageContent>
                        <PageContent>
                            <div>
                                <PageRight>Open:</PageRight>
                                <PageRight>Open automatically:</PageRight>
                                <PageRight>Close automatically:</PageRight>
                            </div>
                            <div>
                                <PageLeft>switch</PageLeft>
                                <PageLeft>date.picker</PageLeft>
                                <PageLeft>date.picker</PageLeft>
                            </div>
                        </PageContent>
                        <PageContent>
                            <H2>LEADS</H2>
                        </PageContent>
                        <PageContent>
                            <div>
                                <div>
                                    <div>Pages visits:</div><div>234</div>
                                </div>
                                <div>
                                    <div>Registrations:</div><div>234</div>
                                </div>
                                <div>
                                    <div>Confirmations:</div><div>234<button>VIEW</button></div>
                                </div>
                            </div>
                            <div>
                                FUNIL
                            </div>
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
