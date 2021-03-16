import React, { useState, useEffect } from 'react'
import { Form, Input, InputNumber, Button, List, Avatar } from 'antd'
import { Row, Col, Divider } from 'antd'
import { Parallax } from 'rc-scroll-anim'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { HomeOutlined, IdcardOutlined, UserOutlined } from '@ant-design/icons'
import { BLBL } from '@Components/data.js'
import SpecialTitle from '@Components/specialtitle'
import styles from '@Components/Titles.module.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { UsergroupAddOutlined } from '@ant-design/icons'

const navmenu = {
	fontFamily:
		'-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
	textAlign: 'center',
	background: '#001529',
	color: 'white'
}

const membershiphome = {
	textAlign: 'center',
	background: '#ffffff',
	color: 'black'
}

const data = [
	{
		title: 'Benefit 1',
		content: 'Voting Rights at the Annual General Meeting'
	},
	{
		title: 'Benefit 2',
		content: 'Privileged invite to all future Kindness Shake events'
	},
	{
		title: 'Benefit 3',
		content:
			'10% Discount on Food and Beverage in Kindness Space. \n20% Discount on diverse Kindness Shake merchandise '
	},
	{
		title: 'Benefit 4',
		content: 'Kindness Shake newsletter every 3 months'
	},
	{
		title: 'Benefit 5',
		content:
			'A copy of the Kindness Shake constitution. \nMinutes of general meetings.\nAnnual reports and annual financial reports'
	},
	{
		title: 'Benefit 6',
		content:
			'Invite to annual general meetng with complimentary food and non-alcoholic beverages'
	},
	{
		title: 'Benefit 7',
		content:
			'First look for future Kindness Shake projects. \nOptions to participate in strategy planning'
	},
	{
		title: 'Benefit 8',
		content: 'Mentorship program possibility'
	},
	{
		title: 'Benefit 9',
		content:
			'Some proceeds from the Membership Fee will be funded towards students scholarships and mentorships every academic year'
	}
]

const Membership = () => {
	const [tabIndex, setTabIndex] = useState(0)

	return (
		<div style={navmenu}>
			<Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
				<TabList>
					<Tab>
						<HomeOutlined /> Home
					</Tab>
					<Tab>
						<IdcardOutlined /> Join us
					</Tab>
					<Tab>
						<UserOutlined /> Login
					</Tab>
				</TabList>
				<TabPanel>
					<div style={membershiphome}>
						<div className="home-page-wrapper">
							<br></br>
							<h2>Be a part of Kindness Shake in 2021!</h2>
							<div className={styles.subtitle}>
								To have access to membership card please sign up to this website
								and complete the payment.
							</div>
							<br></br>
							<Row align="middle" justify="center">
								<Col
									xs={{ span: 20 }}
									lg={{ span: 8 }}
									className="m-auto"
									align="middle"
									justify="center"
								>
									<img
										src="/static/img/front-card.jpeg"
										alt="frontcard"
										width="100%"
										height="100%"
										className="my-2"
									/>
								</Col>
								<Col
									xs={{ span: 20 }}
									lg={{ span: 8 }}
									className="m-auto"
									align="middle"
									justify="center"
								>
									<img
										src="/static/img/back-card-blank.jpeg"
										alt="backcard"
										width="100%"
										height="100%"
										className="my-2"
									/>
								</Col>
							</Row>
							<br></br>
							<br></br>
							<Button
								onClick={index => setTabIndex(1)}
								type="primary"
								shape="round"
								size="large"
							>
								Register now!
							</Button>
							<br></br>
							<br></br>
							<h2>Membership benefits</h2>
							<div className="m-auto" style={{ whiteSpace: 'pre-wrap' }}>
								<Col>
									{data.map(item => (
										<Col
											xs={{ span: 20 }}
											lg={{ span: 8 }}
											className="m-auto"
											align="middle"
											justify="center"
										>
											<div className={styles.contentMembership}>
												<ArrowForwardIosIcon />
												{item.content}
											</div>
										</Col>
									))}
								</Col>
							</div>
							<br></br>
							<h2>Our partners</h2>
							<Row align="middle" justify="center">
								{BLBL.logos.map(item => (
									<Parallax
										animation={{ x: 0, opacity: 1, playScale: [0, 0.8] }}
										style={{ transform: 'translateX(-500px)', opacity: 0 }}
									>
										<div className="ml-5 mr-5 mu-2 md-2">
											<img src={item.path} height="200px" alt="img" />
										</div>
										<div className={styles.discount}>{item.discount}</div>
										<br></br>
									</Parallax>
								))}
							</Row>
						</div>
					</div>
				</TabPanel>
				<TabPanel>
					<div style={membershiphome}>
						<iframe
							width="100%"
							height="1000px"
							frameborder="no"
							src="https://ksi.wildapricot.org/widget/membership"
						></iframe>
						<br></br>
						<br></br>
						If you can not see the registration form, please follow the
						following link
						<br></br>
						<a
							href="https://ksi.wildapricot.org/widget/membership"
							rel="noopener noreferrer"
							target="_blank"
						>
							<UsergroupAddOutlined
								style={{ fontSize: '64px', color: '#919191' }}
								className="m-2"
							/>
						</a>
						<br></br>
						<br></br>
					</div>
				</TabPanel>
				<TabPanel>
					<div style={membershiphome}>
						<iframe
							width="100%"
							height="1000px"
							frameborder="no"
							src="https://ksi.wildapricot.org/widget/Sys/Profile"
						></iframe>
					</div>
				</TabPanel>
			</Tabs>
		</div>
	)
}

export default Membership
