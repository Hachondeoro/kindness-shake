import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { Row, Col } from 'antd'
import { Parallax } from 'rc-scroll-anim'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { HomeOutlined, IdcardOutlined, UserOutlined } from '@ant-design/icons'
import styles from '@Components/Titles.module.css'
import { isMobile } from 'react-device-detect'
import { GraphQLClient } from 'graphql-request'

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

export async function getStaticProps() {
	const graphcms = new GraphQLClient(
		'https://api-ap-northeast-1.graphcms.com/v2/ckmmudchrs3z701z29a833h9s/master'
	)

	// 5 times in total teammembers
	const { belocals, memberships } = await graphcms.request(
		`
		{ 
			belocals {
				richtext {
				  markdown
				}
				image {
				  url
				}
				jsontext
			  }
			memberships {
				image {
				  url
				}
				benefit
			  }
		}
	  `
	)
	return {
		props: {
			belocals, memberships
		}
	}
}



const Membership = ({belocals, memberships}) => {
	const [tabIndex, setTabIndex] = useState(0)
	const logos = belocals[0].image.map((x, i) => ({
		...x,
		...belocals[0].jsontext[i]
	}))


	function iOS() {
		return (
			[
				'iPad Simulator',
				'iPhone Simulator',
				'iPod Simulator',
				'iPad',
				'iPhone',
				'iPod'
			].includes(navigator.platform) ||
			// iPad on iOS 13 detection
			(navigator.userAgent.includes('Mac') && 'ontouchend' in document)
		)
	}

	const [iosdevice, setIosdevice] = useState(true)
	const [phone, setPhone] = useState(false)

	useEffect(() => {
		setIosdevice(iOS())
		setPhone(isMobile)
	}, [])

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
							<div>
								<br></br>
								<br></br>
								<br></br>
								<h2>Be a part of Kindness Shake in 2021!</h2>
								<br></br>
								<div className={styles.subtitle}>
									To have access to membership card please sign up to this
									website and complete the payment.
								</div>
								<br></br>
								<Row align="middle" justify="center">
									<Col
										xs={{ span: 20 }}
										lg={{ span: 8 }}
										className="m-2"
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
										className="m-2"
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
										{memberships.map(item => (
											<Col
												xs={{ span: 23 }}
												lg={{ span: 12 }}
												className="m-auto"
												align="middle"
												justify="center"
											>
												<Row align="middle" justify="center">
													<Col
														xs={{ span: 4 }}
														lg={{ span: 4 }}
														className="m-auto"
														align="middle"
														justify="center"
													>
														<img src={item.image.url} width="48px" alt="img" />
													</Col>
													<Col
														xs={{ span: 20 }}
														lg={{ span: 20 }}
														className="m-auto"
														align="middle"
														justify="center"
													>
														<div className={styles.contentMembership}>
															{item.benefit}
														</div>
													</Col>
												</Row>
											</Col>
										))}
									</Col>
								</div>
								<br></br>
							</div>
							<h2>Our partners</h2>
							{phone ? (
								<Row align="middle" justify="center">
									{logos.map(item => (
										<Parallax
											animation={{ x: 0, opacity: 1, playScale: [-0.6, 0.8] }}
											style={{ transform: 'translateX(-200px)', opacity: 0 }}
										>
											<div className="mx-1 mt-3">
												<img
													src={item.url}
													width={item.widthMobile}
													alt="img"
												/>
											</div>
											<div className={styles.discount}>{item.discount}</div>
											<br></br>
										</Parallax>
									))}
								</Row>
							) : (
								<Row align="middle" justify="center">
									{logos.map(item => (
										<Parallax
											animation={{ x: 0, opacity: 1, playScale: [-0.6, 0.8] }}
											style={{ transform: 'translateX(-200px)', opacity: 0 }}
										>
											<div className="ml-5 mr-5 mu-2 md-2">
												<img src={item.url} width={item.width} alt="img" />
											</div>
											<div className={styles.discount}>{item.discount}</div>
											<br></br>
										</Parallax>
									))}
								</Row>
							)}
						</div>
					</div>
				</TabPanel>
				<TabPanel>
					<div style={membershiphome}>
						{iosdevice ? (
							<div>
								<div className="mb-6">
									<br></br>
									<br></br>
									<br></br>
									<br></br>
									Our membership page is powered by Wild Apricot membership
									system
								</div>
								<Col
									xs={{ span: 20 }}
									md={{ span: 12 }}
									className="m-auto"
									align="middle"
									justify="center"
								>
									<img
										src="/static/img/wild-apricot-logo.png"
										alt="wildapricotlogo"
										width="100%"
										height="100%"
										className="mt-5"
									/>
								</Col>
								<br></br>
								<div className="m-5">
									Please press the following button to submit an application
									form
								</div>
								<a
									href="https://ksi.wildapricot.org/widget/membership"
									rel="noopener noreferrer"
									target="_blank"
								>
									<Button type="primary" shape="round" size="large">
										{' '}
										Membership Application form{' '}
									</Button>
								</a>
								<br></br>
								<br></br>
							</div>
						) : (
							<div>
								<iframe
									width="100%"
									height="1000px"
									frameBorder="no"
									src="https://ksi.wildapricot.org/widget/membership"
								></iframe>
								<br></br>
								<br></br>
							</div>
						)}
					</div>
				</TabPanel>
				<TabPanel>
					<div style={membershiphome}>
						<iframe
							width="100%"
							height="1000px"
							frameBorder="no"
							src="https://ksi.wildapricot.org/widget/Sys/Profile"
						></iframe>
					</div>
				</TabPanel>
			</Tabs>
		</div>
	)
}

export default Membership
