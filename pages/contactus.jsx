/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Form, Input, InputNumber, Button, Select, Switch } from 'antd'
import { Row, Col, Divider } from 'antd'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import styles from '@Components/Titles.module.css'

const { GoogleSpreadsheet } = require('google-spreadsheet')

const layout = {
	labelCol: {
		span: 8
	},
	wrapperCol: {
		span: 16
	}
}

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 8 }
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 16 }
	}
}

const validateMessages = {
	required: '${label} is required!',
	types: {
		email: '${label} is not a valid email!',
		number: '${label} is not a valid number!'
	},
	number: {
		range: '${label} must be between ${min} and ${max}'
	}
}

const { Option } = Select
const prefixSelector = (
	<Form.Item name="prefix" noStyle>
		<Select style={{ width: 70 }}>
			<Option value="61">+61</Option>
		</Select>
	</Form.Item>
)

const doc = new GoogleSpreadsheet(
	'1zMFH3Uy2hwZRUDgqvsANSQkX2bMgL3WqT9nF6wqtOHg'
)

const Demo = () => {
	const [form] = Form.useForm()

	const onFinish = values => {
		write_rows(values.user)
		setOpen(true)
		form.resetFields()
	}

	const write_rows = async row => {
		const sheet = doc.sheetsById[762523534]
		const result = await sheet.addRow(row)
	}
	const [open, setOpen] = React.useState(false)
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}
		setOpen(false)
	}

	const [token, setToken] = useState('')
	useEffect(() => {
		getToken()
	}, [])

	const getToken = async () => {
		await doc.useServiceAccountAuth({
			client_email: process.env.sheets_email,
			private_key: process.env.sheets_privatekey
		})

		await doc.loadInfo()
	}

	return (
		<>
			<div className="home-page-wrapper">
				<h1 className="text-center m-5">CONTACT US TODAY</h1>
				<Row>
					<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
						<MuiAlert
							onClose={handleClose}
							elevation={6}
							variant="filled"
							severity="success"
						>
							Thank you for your interest!
						</MuiAlert>
					</Snackbar>
					<Col
						xs={{ span: 20, offset: 1 }}
						lg={{ span: 10, offset: 2 }}
						className="m-auto"
					>
						<Form
							{...formItemLayout}
							form={form}
							name="nest-messages"
							onFinish={onFinish}
							validateMessages={validateMessages}
							layout="horizontal"
							initialValues={{
								residence: ['zhejiang', 'hangzhou', 'xihu'],
								prefix: '61'
							}}
						>
							<Form.Item
								name={['user', 'firstname']}
								label="First Name"
								rules={[
									{
										required: true
									}
								]}
							>
								<Input />
							</Form.Item>
							<Form.Item
								name={['user', 'lastname']}
								label="Last Name"
								rules={[
									{
										required: true
									}
								]}
							>
								<Input />
							</Form.Item>
							<Form.Item
								name={['user', 'email']}
								label="Email"
								rules={[
									{
										required: true,
										type: 'email'
									}
								]}
							>
								<Input />
							</Form.Item>
							<Form.Item
								name={['user', 'phone']}
								label="Phone Number"
								rules={[
									{
										required: true,
										message: 'Please input your phone number!'
									}
								]}
							>
								<Input
									addonBefore={prefixSelector}
									style={{
										width: '100%'
									}}
								/>
							</Form.Item>
							<Form.Item
								name={['user', 'message']}
								label="Message"
								rules={[
									{
										required: true,
										message: 'Please type your message!'
									}
								]}
							>
								<Input.TextArea style={{ height: 200 }}/>
							</Form.Item>
							<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
								<Button type="primary" htmlType="submit">
									Submit
								</Button>
							</Form.Item>
						</Form>
					</Col>
					<Col
						xs={{ span: 20, offset: 1 }}
						lg={{ span: 10, offset: 2 }}
						className="mx-auto"
					>
						<div className={styles.contentContact}>
							Showcasing the importance and the value of international students
							in the NT while portraying the boundless ways the community can
							get together, regardless the difficult time the world is
							experiencing.
							<br></br> There are many ways to join us and support our mission.
							Contact us to find out more about volunteer opportunities,
							fundraising events, and ways that you can get our message to your
							friends and family.
							<br></br>
							<br></br>
							#KindnessShake<br></br>
							<br></br> Darwin, Northern Territory, Australia
							<br></br>
							info@kindness-shake.com.au<br></br>+61 451 717 861
							<br></br>
							<br></br>
							<br></br>
						</div>
					</Col>
				</Row>
			</div>
		</>
	)
}

export default Demo
