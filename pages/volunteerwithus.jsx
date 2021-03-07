/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { Form, Input, InputNumber, Button, Select } from "antd";

// const { GoogleSpreadsheet } = require("google-spreadsheet");

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
/* eslint-disable no-template-curly-in-string */
const { Option } = Select;

const validateMessages = {
    required: "${label} is required!",
    types: {
        email: "${label} is not a valid email!",
        number: "${label} is not a valid number!",
    },
    number: {
        range: "${label} must be between ${min} and ${max}",
    },
};

/* eslint-enable no-template-curly-in-string */
const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
            <Option value="61">+61</Option>
        </Select>
    </Form.Item>
);

// const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);

const Demo = () => {
    // useEffect(() => {
    // }, []);

    const onFinish = values => {
        console.log(values);
    };

    // const [token, setToken] = useState(null);
    // useEffect(() => {
    //     async function getToken() {
    //         await doc.useServiceAccountAuth({
    //             client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    //             private_key: process.env.GOOGLE_PRIVATE_KEY,
    //         });

    //         await doc.loadInfo(); // loads document properties and worksheets
    //         console.log(doc.title);
    //     }
    //     getToken();
    // }, []);

    return (
        <>
            <Form
                {...formItemLayout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
                initialValues={{
                    residence: ["zhejiang", "hangzhou", "xihu"],
                    prefix: "61",
                }}
            >
                <Form.Item
                    name={["user", "name"]}
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={["user", "email"]}
                    label="Email"
                    rules={[
                        {
                            type: "email",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={["user", "age"]}
                    label="Age"
                    rules={[
                        {
                            type: "number",
                            min: 0,
                            max: 99,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: "Please input your phone number!",
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelector}
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name={["user", "expertise"]}
                    label="Areas of expertise?"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={["user", "areasimprovement"]}
                    label="Any areas that you would like to improve yourself professionally?"
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Demo;
