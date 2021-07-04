import React from 'react'
import ReactMarkdown from 'react-markdown'
import VolunteerIntro from '@Components/Festival.md'

import { Row, Col, Button } from 'antd'
import { Projects } from '@Components/data.js'
import { Parallax } from 'rc-scroll-anim'
import styles from '@Components/Titles.module.css'

const OurProjects = () => {
	return (
		<>
			<div className="festivalbanner">
				<img
					src="/static/img/festival/ks-cover.png"
					width="100%"
					height="100%"
					alt="img"
				/>
			</div>
			<div className="markdown  mx-3">
				<Row align="middle" justify="center">
					<Col
						xs={{ span: 24 }}
						lg={{ span: 12 }}
						align="middle"
						justify="center"
					>
						<ReactMarkdown source={`${VolunteerIntro}`} />
						<Button
							type="primary"
							shape="round"
							size="large"
							ghost
							style={{ borderColor: '#ccc' }}
						>
							<a
								href="https://www.eventbrite.com.au/e/123964590427"
								target="_blank"
							>
								ATTENDEES REGISTRATION
							</a>
						</Button>
						<br></br>
						<br></br>
						<strong>Want to have a stall at the Kindness Festival?</strong>
						<br></br>
						<Button
							type="primary"
							shape="round"
							size="large"
							ghost
							style={{ borderColor: '#ccc' }}
						>
							<a href="https://forms.office.com/r/qMrKDu6fu1" target="_blank">
								STALL HOLDERS REGISTRATION
							</a>
						</Button>
						<br></br>
						<br></br>
						<strong>
							Want to perform or know someone who <br></br>should perform at the Kindness
							Festival?
						</strong>
						<br></br>
						<Button
							type="primary"
							shape="round"
							size="large"
							ghost
							style={{ borderColor: '#ccc' }}
						>
							<a href="https://forms.office.com/r/ATxnQz3AHF" target="_blank">
								PERFORMERS REGISTRATION
							</a>
						</Button>
					</Col>
				</Row>
			</div>
			<div className="markdown">
				<Row align="middle" justify="center">
					<h1>Proudly sponsored by</h1>
				</Row>
				<Row align="middle" justify="center">
					<br></br>
					<Col
						xs={{ span: 12 }}
						lg={{ span: 6 }}
						align="middle"
						justify="center"
					>
						<img
							src="/static/img/festival/darwinwaterfront.jpg"
							width="100%"
							alt="darwinwaterfront"
						/>
					</Col>

					<Col
						xs={{ span: 12 }}
						lg={{ span: 6 }}
						align="middle"
						justify="center"
					>
						<img
							src="/static/img/festival/ntg-logo.jpg"
							width="100%"
							alt="ntg-logo"
						/>
					</Col>
				</Row>
				<br></br>
			</div>
		</>
	)
}

// CSS to focus on the img on mobile
// CSS to use another footer on laptop

export default OurProjects
