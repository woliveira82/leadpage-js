import React from 'react';
import { useHistory } from 'react-router';
import { Row, Col, Form, Input, Button } from 'antd';
import { FrontImg, FrontLogin } from './styles';
import { api } from '../../utils/axios';

export const Login = () => {

    const history = useHistory();

    const onFinish = (values) => {
        api.post('/login/', {
            email: values.email,
            password: values.password
        }).then((response) => {
            const token = response.data.data.access_token;
            localStorage.setItem('token', token);
            history.push('/campaign-list');
        }).catch((error) => {
            console.error('error');
        });
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    return (
        <Row>
            <Col span={12}>
                <FrontImg />
            </Col>
            <Col span={12} >
                <FrontLogin>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={ onFinish }
                        onFinishFailed={ onFinishFailed }
                    >
                        <Form.Item
                            name="email"
                            rules={[{
                                required: true,
                                message: 'Please input your username!',
                            },]}
                        >
                            <Input placeholder='E-mail' />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ 
                                required: true, 
                                message: 'Please input your password!',
                            },]}
                        >
                            <Input.Password placeholder='Password' />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">LOGIN</Button>
                        </Form.Item>
                    </Form>
                </FrontLogin>
            </Col>
        </Row>
    )
};

