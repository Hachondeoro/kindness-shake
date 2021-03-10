import React from 'react'
import { enquireScreen } from 'enquire-js'
import Teams3 from '@Components/Teams3'
import { Card } from 'antd'
import { Row, Col, Divider } from 'antd'
import QueueAnim from 'rc-queue-anim'
import { Team } from '@Components/data.js'
import { Parallax } from 'rc-scroll-anim'
import Image from 'next/image'
import { Supporters } from '@Components/data.js'

const OurSupporters = () => {
	return (
		<div className="home-page-wrapper">
			<h1 className="text-center m-5">OUR SUPPORTERS</h1>
			<Row align="middle" justify="center">
				{Supporters.map(item => (
					<Parallax
						animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
						style={{ transform: 'translateX(-100px)', opacity: 0 }}
					>
						<Col span={4}>
							<div className="m-5">
								<img src={item.path} height="150px" alt="img" />
							</div>
							<br></br>
						</Col>
					</Parallax>
				))}
			</Row>
		</div>
	)
}

export default OurSupporters
