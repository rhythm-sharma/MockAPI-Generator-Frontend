import React from 'react';
import { Row, Layout, Typography, Divider } from 'antd';
import LoginForm from './LoginForm/LoginForm';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title } = Typography;

const LoginPage = styled.div`
    .divider {
        margin: 0px !important;
        border-top: 2px solid rgba(0, 0, 0, 0.1);
    }
    .redirect-to-login-text {
        text-align: center;
        font-size: 0.9rem;
        margin: 24px 0px 0px 0px;
    }
    .login-form-container {
        max-width: 400px;
        margin: auto;
        padding: 30px 20px;
    }
    .back-btn-link {
        margin-top: 10px;
    }
`;

const LoginFromWrapper = styled.div`
    padding: 30px 20px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

const Login: React.FC = () => {
    return (
        <LoginPage>
            <Layout>
                <Content className="content">
                    <div>
                        <Row justify="center" align="middle">
                            <Title level={2}>Sign in</Title>
                        </Row>
                        <div className="login-form-container">
                            <LoginFromWrapper>
                                <LoginForm />
                                <Divider className="divider" />
                                <p className="redirect-to-login-text">
                                    {`Don't have an account? Signup`}
                                    <Link to="/signup">here</Link>
                                </p>
                            </LoginFromWrapper>
                            <p className="back-btn-link">
                                <Link to="/dashboard">
                                    <ArrowLeftOutlined /> Back
                                </Link>
                            </p>
                        </div>
                    </div>
                </Content>
            </Layout>
        </LoginPage>
    );
};

export default Login;
