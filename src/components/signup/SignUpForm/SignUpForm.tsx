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
    .signup-btn {
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

const SignUpForm: React.FC = () => {
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
                name="register"
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
                        //},
                    ]}
                    hasFeedback
                >
                    <Input.Password className="form-input" />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm"
                    dependencies={['password']}
                    className="form-item-container"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error(`Password didn't match!`));
                            },
                        }),
                    ]}
                >
                    <Input.Password className="form-input" />
                </Form.Item>

                {/* <Form.Item> */}
                <Button className="signup-btn" type="primary" htmlType="submit" block>
                    Sign Up
                </Button>
                {/* </Form.Item> */}
            </Form>
        </FormWrapper>
    );
};

export default SignUpForm;
