import React, { useState } from 'react';
import { Row, Layout, Typography } from 'antd';
import SignUpForm from './SignUpForm/SignUpForm';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title } = Typography;

const SignUpPage = styled.div`
    .sigup-form-container {
        max-width: 400px;
        margin: auto;
        padding: 30px 20px;
    }
    .back-btn-link {
        margin-top: 10px;
    }
`;

const SignUpFromWrapper = styled.div`
    padding: 30px 20px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

const SignUp: React.FC = () => {
    return (
        <SignUpPage>
            <Layout>
                <Content className="content">
                    <div>
                        <Row justify="center" align="middle">
                            <Title level={2}>Sign Up</Title>
                        </Row>
                        <div className="sigup-form-container">
                            <SignUpFromWrapper>
                                <SignUpForm />
                            </SignUpFromWrapper>
                            <p className="back-btn-link">
                                <Link to="/dashboard">
                                    <ArrowLeftOutlined /> Back
                                </Link>
                            </p>
                        </div>
                    </div>
                </Content>
            </Layout>
        </SignUpPage>
    );
};

export default SignUp;
