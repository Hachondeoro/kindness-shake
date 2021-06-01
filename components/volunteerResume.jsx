/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Select, Switch, Radio, Upload } from 'antd'
import { Row, Col } from 'antd'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import ReactMarkdown from 'react-markdown'
import VolunteerIntro from '@Components/VolunteerIntro.md'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import * as emailjs from 'emailjs-com'
import { Container } from 'reactstrap'
import { UploadOutlined } from '@ant-design/icons'

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

const VolunteerForm = props => {
	const [form] = Form.useForm()
	const [showConfetti, setshowConfetti] = useState(false)
	const { width, height } = useWindowSize()

	const sendEmail = e => {
		emailjs
			.send(
				'service_ahbfe0g',
				'template_ypm8kd5',
				e,
				'user_ez3Faw0hPtbM3o6P3x5Nc'
			)
			.then(
				result => {
					console.log(result.text)
				},
				error => {
					console.log(error.text)
				}
			)
	}

	const onFinish = values => {
		const expertise = values.user.expertise.join(', ')
		values.user.expertise = expertise
		const availability = values.user.availability ? 'Yes' : 'No'
		values.user.availability = availability
		const consent = values.user.consent ? 'Yes' : 'No'
		values.user.consent = consent
		values.user.date = new Date().toLocaleString()
		setshowConfetti(true)
		console.log(values.user)
		write_rows(values.user)
		values.user.resume = values.resume
		sendEmail(values.user)
		setOpen(true)
		// form.resetFields()
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

	useEffect(() => {
		getToken()
	}, [])

	const getToken = async () => {
		await doc.useServiceAccountAuth({
			client_email:
				'volunteers-serviceaccount@volunteer-service-306610.iam.gserviceaccount.com',
			private_key:
				'-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDNbsBKf2JI/Yeg\nQqig95/7Fudy+3sdLBFZ71GHYr+4y7XVRNCv1FvgBChHwBTgQOmJ7n6gdcKdqBjz\nNXQmbcMG2c7cqAiCPVTaXabM8xSzwe8zcScgEL/CA5XhHMoumHXTNmkVMN0DmIIb\n1hmYG2IRpqZb7qTMXKfSu55cLFmIFvprnfTDUOO6iuNBH5wp+w1IR5Pz3AnyKujd\nOKpZop7JWxurfQAL9hezEcCvVhPYSqwkXoxJAhvPO2PBtjugwxk9o9t/XJ81/45m\nxKMB2ENQzZ21Z34F2Uyf/hb7Olvt2aE96a6bLO2TH2+XSTh5lGHhnrtvYu12Jit4\n0E8T8WuBAgMBAAECggEAANmXfUVrN4doQseU01fr8R/bWruHcxerHZXMzuY/yiLK\nYobKpOAYZlgZDzEwWuxM1RCr9KOxF7o12neBHs21ZOVUvq8prBmHLOE+YPakYkEk\nIWCzcWWdV/8AHTibbet8wRA+iX9QikjMuMMTO3jJSE653WtykkuDuJ6U619l+k8R\nYOVh37uNVmzzfOcdDzn/2lz0s5Cfp2pAZZSa7HlMA4BGxH7XfBQo07A0/XTCX/a9\nVMvEJM4ah+sScNUBmH+3xrf0rCScri9sEStRDzDUcawh1gWRfFI+18Dh9ZuDWUm2\npxBhhyUvfeLeROUCact9Ix9IfgpQfT+tAkLhUA7U4QKBgQDz0VjoIIdbY1ijGujS\ngoSneJ1ZxZUdNJE5ZnIfdkf0uwroFCzfbZrA0YE0xHxdw5IDyzMu71wBet21R7gX\nWsi4v/q+Rr9RgSIT0EG7v1EZzho/ymXDYfVs5e/DBi5kEMNokYpjnmlsoGgDvpCG\nfYqnlKx141/oBroSfs62MSZNYQKBgQDXsmw1+r9RMMalMDzmqMslARYebZRIQLaw\nEKmvMOqfY6/7KPxMPZFj1EkgsizdFIZXarDdami+ScP8Cu706m2m6otyvxZf7KXG\nRCFEitO+Uq+VHu8xrBSTlG7WuZ+k2iqL2L407HQRzO/cp7CG+foJgCaXQrsnIJxU\nCuYANLSyIQKBgHHVfhLyjP/IBGwydh1CvriKAb0WGKaIEn2gLQwvZy0F3vO357Nx\nMt1vc0m1qvMECjonNwBk1KoEOVsX3wVYZ3qKd4E6+rwM9GIXy3jiu/S2W18JGjX8\nmF99g1GkoygpA3Lg8KHOJh6HTcjhwgxotMHFEjgALpjf+yQDfHNnwyBBAoGBAKXk\n5484tI6Yah/AkwaAigWC6WUruGE9zIRrvGYuxDUkscQFSM7Gh5z1N+06vICo+Y4g\nU7lnzvmTuHWQXyrlZsJ7IBd32piaZQGxgri54ZM++yZA7Y0RoZ3ECt+BUsSyuwhm\nAhyoQ7kxGsZl/sJBXsqR0pyByXmVfkaxPyanYtahAoGBAIIXUeN6K6Kz2C+yfM8i\nku6TMhoRBuTzPwdU8OEKwHWrMYwO+jS8amM884tSKFq9CaCohDTJ3j1buZAG8bcG\nSB5NyzT2AnKKi2TCjjXX92xBbCY03G5wHexGu3UD24fCIHIJ3ioBEgvG2s9dFbcy\nB5go8dN1j7B11JQxKv106OrI\n-----END PRIVATE KEY-----\n'
		})

		await doc.loadInfo()
	}

	return (
		<>
			<div className="home-page-wrapper">
				<Row align="middle" justify="center">
					<Col
						xs={{ span: 20 }}
						lg={{ span: 8 }}
						className="m-2"
						align="left"
						justify="center"
					>
						<div className="markdown">
							<ReactMarkdown source={`${VolunteerIntro}`} />
						</div>
						<br></br>
						<br></br>
					</Col>
					<Col
						xs={{ span: 20 }}
						lg={{ span: 8 }}
						className="m-2"
						align="middle"
						justify="center"
					>
						<img
							src="/static/img/volunteer/volunteer1.jpg"
							alt="volunteer1"
							width="80%"
							height="80%"
							className="mt-2"
						/>
						<img
							src="/static/img/volunteer/volunteer2.jpg"
							alt="volunteer2"
							width="80%"
							height="80%"
							className="mt-2"
						/>
						<img
							src="/static/img/volunteer/volunteer3.jpg"
							alt="volunteer3"
							width="80%"
							height="80%"
							className="mt-2 mb-4"
						/>
					</Col>
				</Row>
				<Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
					<MuiAlert
						onClose={handleClose}
						elevation={6}
						variant="filled"
						severity="success"
					>
						Thank you for your interest! We will be in touch with you soon
					</MuiAlert>
				</Snackbar>
				<div>
					<Col
						xs={{ span: 24 }}
						lg={{ span: 20 }}
						align="left"
						justify="center"
					>
						{showConfetti ? (
							<Confetti
								width={width}
								height={height}
								numberOfPieces={1500}
								gravity={0.08}
								recycle={false}
								onConfettiComplete={() => setshowConfetti(false)}
							/>
						) : null}

						<div className="container">
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
										name={['user', 'preferredname']}
										label="Preferred Name"
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
									<Form.Item
										name={['user', 'address']}
										label="Address"
										rules={[
											{
												required: true
											}
										]}
									>
										<Input />
									</Form.Item>

									<Form.Item name={['user', 'position']} label="I want to be a">
										<Radio.Group>
											<Radio value="Casual">Casual Volunteer</Radio>
											<Radio value="Permanent">Permanent Volunteer</Radio>
										</Radio.Group>
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
											<Option value="Other">Other</Option>
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
										name={['user', 'whyus']}
										label="Why do you want to volunteer with Kindness Shake?"
									>
										<Input.TextArea />
									</Form.Item>
									<Form.Item
										name={['resume']}
										label="Resume"
										rules={[
											{
												type: 'file',
												required: true
											}
										]}
									>
										<Upload>
											<Button icon={<UploadOutlined />}>Click to Upload</Button>
										</Upload>
										,
									</Form.Item>
									<Form.Item
										className={'two-rows-label'}
										name={['user', 'consent']}
										rules={[
											{
												validator: (_, value) =>
													value
														? Promise.resolve()
														: Promise.reject(
																new Error('Should accept agreement')
														  )
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
					</Col>
				</div>
			</div>
		</>
	)
}

export default VolunteerForm
