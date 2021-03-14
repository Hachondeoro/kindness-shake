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
			'10% Discount on Food and Beverage in Kindness Space\n20% Discount on diverse Kindness Shake merchandise '
	},
	{
		title: 'Benefit 4',
		content: 'Kindness Shake newsletter every 3 months'
	},
	{
		title: 'Benefit 5',
		content:
			'A copy of the Kindness Shake constitution \nMinutes of general meetings \nAnnual reports and annual financial reports'
	},
	{
		title: 'Benefit 6',
		content:
			'Invite to annual general meetng with complimentary food and non-alcoholic beverages'
	},
	{
		title: 'Benefit 7',
		content:
			'First look for future Kindness Shake projects\nOptions to participate in strategy planning'
	},
	{
		title: 'Benefit 8',
		content: 'Mentorship program possibility'
	},
	{
		title: 'Benefit 9',
		content:
			'Some proceeds from the Membership Fee will be funded towards \nstudents scholarships and mentorships every academic year'
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

							<img
								src="/static/img/front-card.jpeg"
								height="300px"
								alt="frontcard"
							/>
							<img
								src="/static/img/back-card.jpeg"
								height="300px"
								alt="backcard"
							/>
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
							<div
								style={{ width: '40%', whiteSpace: 'pre' }}
								className="m-auto"
							>
								<List
									itemLayout="horizontal"
									dataSource={data}
									size="large"
									renderItem={item => (
										<List.Item>
											<List.Item.Meta
												avatar={<ArrowForwardIosIcon />}
												description={item.content}
											/>
										</List.Item>
									)}
								/>
								,
							</div>
							<br></br>
							<h2>Our partners</h2>
							<Row align="middle" justify="center">
								{BLBL.logos.map(item => (
									<Parallax
										animation={[
											{ x: 0, opacity: 1, playScale: [0, 0.8] },
											{ y: 100, playScale: [0, 0.3] },
											{ blur: '10px', playScale: [0, 1] }
										]}
										style={{
											transform: 'translateX(-100px)',
											filter: 'blur(0px)',
											opacity: 0
										}}
									>
										<div className="m-5">
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
