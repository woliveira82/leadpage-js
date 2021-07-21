import React from 'react';
import { Layout } from 'antd';


const { Header, Content } = Layout;

export const Email = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    Emails
                </Content>
            </Layout>    
        </Layout>
    );
};