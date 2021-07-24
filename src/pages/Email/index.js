import React from 'react';
import { Layout, Menu, Dropdown, Button } from 'antd';
import { PageGrid, Page, H2, Input, Textarea } from './styles';
import { DownOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const menu = (
    <Menu>

      <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
      </Menu.Item>

    </Menu>
);

export const Email = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Page>
                        <PageGrid>
                            <div>
                                <H2>ACTION:</H2>
                            </div>
                            <div>
                                <Dropdown overlay={menu} arrow>
                                    <Button>Select action <DownOutlined/></Button>
                                </Dropdown>
                                <Button>New</Button>
                            </div>
                            <div>
                                <H2>TITLE:</H2>
                            </div>
                            <div>
                                <Input/>
                            </div>
                            <div>
                            <H2>BODY:</H2>
                            </div>
                            <div>
                                <Textarea>

                                </Textarea>
                            </div>
                        </PageGrid>
                    </Page>
                </Content>
            </Layout>    
        </Layout>
    );
};