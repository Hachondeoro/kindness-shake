/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react'
import { enquireScreen } from 'enquire-js'
import Teams3 from '@Components/Teams3'
import { Card } from 'antd'
import { Row, Col, Divider } from 'antd'
import QueueAnim from 'rc-queue-anim'
import Image from 'next/image'

import { Teams30DataSource } from '@Components/data.source'

let isMobile
enquireScreen(b => {
	isMobile = b
})
const { location = {} } = typeof window !== 'undefined' ? window : {}
const { Meta } = Card

export default class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isMobile,
			show: !location.port
		}
	}

	componentDidMount() {
		enquireScreen(b => {
			this.setState({ isMobile: !!b })
		})

		if (location.port) {
			setTimeout(() => {
				this.setState({
					show: true
				})
			}, 500)
		}
	}

	render() {
		const children = [
			<Teams3
				id="Teams3_0"
				key="Teams3_0"
				dataSource={Teams30DataSource}
				isMobile={this.state.isMobile}
			/>
		]
		return (
			<>
				<div className="home-page-wrapper">
					<h1 class="text-center m-5">OUR TEAM</h1>
					<div className="teams3-wrapper">
						{/* <Row>
							<Col span={7}>
								<div className="teams3-top-image">
									<img
										src="/static/img/ali-dhirani.jpg"
										width="100%"
										height="100%"
										alt="img"
									/>
								</div>
							</Col>
							<Col span={17}>
								<div className="teams3-top-title">Ali Dhirani</div>
								<div className="teams3-top-job">Co-Founder</div>
								<div className="teams3-top-content">
									Ali is from Tanzania and has recently graduated from Charles
									Darwin University with a Bachelor of Accounting.
								</div>
							</Col>
						</Row> */}
						<Row>
							<Col span={8}>
								<div className="teams3-top-image">
									<img
										src="/static/img/ben-poveda.jpg"
										width="100%"
										height="100%"
										alt="img"
									/>
								</div>

								<div className="teams3-top-title">Ben Poveda</div>
								<div className="teams3-top-job">Co-Founder</div>
								<div className="teams3-top-content">
									Ben is passionate about multiculturalism, youth empowerment,
									community engagement and international education
								</div>
							</Col>
							<Col span={8}>
								<div className="teams3-top-image">
									<img
										src="/static/img/ali-dhirani.jpg"
										width="100%"
										height="100%"
										alt="img"
									/>
								</div>

								<div className="teams3-top-title">Ali Dhirani</div>
								<div className="teams3-top-job">Co-Founder</div>
								<div className="teams3-top-content">
									Ali is from Tanzania and has recently graduated from Charles
									Darwin University with a Bachelor of Accounting.
								</div>
							</Col>
							<Col span={8}>
								<div className="teams3-top-image">
									<img
										src="/static/img/manfred.jpg"
										width="100%"
										height="100%"
										alt="img"
									/>
								</div>

								<div className="teams3-top-title">Manfred Mletsin</div>
								<div className="teams3-top-job">Co-Founder</div>
								<div className="teams3-top-content">
									Coming from Estonia and currently finishing his Bachelor of
									Accounting degree at Charles Darwin University, Manfred also
									holds qualifications in Business Management.
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</>
		)
	}
}
