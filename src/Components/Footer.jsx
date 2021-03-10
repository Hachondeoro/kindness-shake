/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react'
import { enquireScreen } from 'enquire-js'
import Teams3 from '@Components/Teams3'
import { Card } from 'antd'
import { Row, Col, Divider } from 'antd'
import QueueAnim from 'rc-queue-anim'
import { Team } from '@Components/data.js'
import { Parallax } from 'rc-scroll-anim'
import Image from 'next/image'

const Footer = () => {
	return (
		<div className="footer">
			<Row align="middle" justify="center">
				<Col
					span={8}
					className="ant-col block ant-col-xs-24 ant-col-md-6 p-5"
					align="middle"
					justify="center"
				>
					<Image
						src="/static/img/ks-logo-transparent.png"
						width={200}
						height={200}
						layout="responsive"
						alt="img"
					/>
					Kindness Shake team acknowledges and pays respect to the past, present
					and future traditional custodians and elders of this nation and the
					continuation of cultural, spiritual and educational practices of
					Aboriginal and Torres Strait islander peoples.
				</Col>
				<Col span={8} className="ant-col block ant-col-xs-24 ant-col-md-6 p-5">
					<h1>ABOUT US</h1>
					<p>Our values</p>
					<p>Our mission</p>
					<p>Our vision</p>
				</Col>
				<Col span={8} className="ant-col block ant-col-xs-24 ant-col-md-6 p-5">
					<h1>SOCIAL MEDIA</h1>
					<p>Facebook</p>
					<p>Instagram</p>
					<p>Wechat</p>
				</Col>
			</Row>
			<Divider style={{ 'backgroundColor': '#182B3D' }} />
			<Row align="middle" justify="center">
				©2020 by Kindness Shake
				<br></br>
				<br></br>
				<br></br>
			</Row>
		</div>
	)
}

export default Footer
