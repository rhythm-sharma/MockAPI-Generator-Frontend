/* eslint-disable @typescript-eslint/no-explicit-any*/
import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';

const FormWrapper = styled.div`
    .form-item-container {
        display: block !important;
        margin-bottom: 1.2rem;
    }
    .form-lable {
        margin-bottom: 10px !important;
    }
    .form-input {
        width: 100%;
    }
    .ant-form-item {
        height: 66px;
    }
    .ant-form-item-children-icon {
        top: auto !important;
        bottom: 6px;
    }
    .ant-form-item-required {
        &:after {
            content: '' !important;
        }
        &:before {
            content: '' !important;
        }
    }
    .login-btn {
        margin: 12px 0px 24px 0px;
    }
`;

interface IFormData {
    email: string;
    password: string;
}

interface IinitialStateValue {
    formData: IFormData;
}

const LoginForm: React.FC = () => {
    const [form] = Form.useForm();

    const initialStateValue: IinitialStateValue = { formData: { email: '', password: '' } };

    const [state, setState] = useState(initialStateValue);

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    const onFinishFailed = (...params: any) => {
        console.log('onFinishFailed params: ', params);
    };

    return (
        <FormWrapper>
            <Form
                form={form}
                name="login"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={state.formData}
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            type: 'email',
                            message: 'Please type valid Email!',
                        },
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                    className="form-item-container"
                >
                    <Input className="form-input" />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    className="form-item-container"
                    rules={[
                        {
                            required: true,
                            message: 'Please type password!',
                        },
                        // {
                        //     pattern: /\\s+/,
                        //     message: 'Password contains empty spaces!',
                        // },
                    ]}
                >
                    <Input.Password className="form-input" />
                </Form.Item>

                {/* <Form.Item> */}
                <Button className="login-btn" type="primary" htmlType="submit" block>
                    Login
                </Button>
                {/* </Form.Item> */}
            </Form>
        </FormWrapper>
    );
};

export default LoginForm;
