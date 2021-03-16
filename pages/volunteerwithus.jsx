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
		const expertise = values.user.expertise.join(', ')
		values.user.expertise = expertise
		write_rows(values.user)
		setOpen(true)
		form.resetFields()
	}

	const write_rows = async row => {
		const sheet = doc.sheetsById[0]
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
				<h1 className="text-center m-5">Volunteering Expression of Interest</h1>
				<Col
					xs={{ span: 20 }}
					lg={{ span: 8 }}
					className="m-auto"
					align="middle"
					justify="center"
				>
					<div className={styles.subtitle}>
						If you want to be part of our volunteer projects please fill this
						form and we will be in contact once we have assessed your
						application. <br></br> If you have any questions or comments, please
						email volunteers@kindness-shake.com.au
						<br></br>
						<br></br>
					</div>
				</Col>

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
				<Row align="middle" justify="center" className="mx-5">
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
									type: 'email',
									required: true
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
						<Form.Item name={['user', 'availability']} label="Available now?">
							<Switch />
						</Form.Item>
						<Form.Item
							name={['user', 'expertise']}
							label="Areas of expertise"
							rules={[
								{
									required: true,
									message: 'Please select your areas of expertise!',
									type: 'array'
								}
							]}
						>
							<Select
								mode="multiple"
								placeholder="Please select your areas of expertise"
							>
								<Option value="Administration">Administration</Option>
								<Option value="Event Management">Event Management</Option>
								<Option value="IT">IT</Option>
								<Option value="Logistics">Logistics</Option>
								<Option value="Marketing">
									Marketing, Communications and Media
								</Option>
								<Option value="Partnerships">Partnerships</Option>
								<Option value="Fundraising">Fundraising</Option>
								<Option value="Human Resources">Human Resources</Option>
							</Select>
						</Form.Item>
						<Form.Item
							className={'two-rows-label'}
							name={['user', 'areasimprovement']}
							label="Any other areas that you would like to develop professionally?"
						>
							<Input.TextArea />
						</Form.Item>
						<Form.Item
							className={'two-rows-label'}
							name={['user', 'consent']}
							rules={[
								{
									required: true
								}
							]}
							label="I acknowledge that my personal details will be used for the purpose of expressing interest for Volunteering in Kindness Shake programs or events"
						>
							<Switch />
						</Form.Item>
						<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Row>
			</div>
		</>
	)
}

export default Demo
