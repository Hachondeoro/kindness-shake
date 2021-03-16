/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react'
import { Row, Col, Divider } from 'antd'
import Image from 'next/image'
import {
	FacebookFilled,
	InstagramFilled,
	WechatFilled
} from '@ant-design/icons'
import Link from 'next/link'

const Footer = () => {
	return (
		<div className="footer">
			<Row align="middle" justify="center">
				<Col
					xs={{ span: 20 }}
					lg={{ span: 8 }}
					className="m-auto"
					align="middle"
					justify="center"
				>
					<Image
						src="/static/img/ks-logo-transparent.png"
						width={200}
						height={200}
						layout="responsive"
						alt="img"
						className="my-4"
					/>
					<br></br>
					<br></br>
					Kindness Shake team acknowledges and pays respect to the past, present
					and future traditional custodians and elders of this nation and the
					continuation of cultural, spiritual and educational practices of
					Aboriginal and Torres Strait islander peoples.
					<br></br>
					<br></br>
				</Col>
				<Col
					xs={{ span: 20 }}
					lg={{ span: 8 }}
					className="m-auto"
					align="middle"
					justify="center"
				>
					<h1>ABOUT US</h1>
					<br></br>
					<Link href="/ourstory" passHref>
					<a style={{fontSize:"20px", color:"#919191"}}>OUR VISION</a>
					</Link>
					<br></br>
					<br></br>
					<Link href="/ourstory" passHref>
						<a style={{fontSize:"20px", color:"#919191"}}>OUR MISSION</a>
					</Link>
					<br></br>
					<br></br>
				</Col>
				<Col
					xs={{ span: 20 }}
					lg={{ span: 8 }}
					className="m-auto"
					align="middle"
					justify="center"
				>
					<h1>SOCIAL MEDIA</h1>
					<br></br>
					<a
						href="https://www.facebook.com/KindnessShakeNT"
						rel="noopener noreferrer"
						target="_blank"
					>
						<FacebookFilled
							style={{ fontSize: '48px', color: '#919191' }}
							className="m-2"
						/>
					</a>
					<br></br>
					<a
						href="https://www.instagram.com/kindnessshake/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<InstagramFilled
							style={{ fontSize: '48px', color: '#919191' }}
							className="m-2"
						/>
					</a>
					<br></br>
					<a
						href="https://www.facebook.com/KindnessShakeNT"
						rel="noopener noreferrer"
						target="_blank"
					>
						<WechatFilled
							style={{ fontSize: '48px', color: '#919191' }}
							className="m-2"
						/>
					</a>
					<br></br>
				</Col>
			</Row>
			<Divider style={{ backgroundColor: '#182B3D' }} />
			<Row align="middle" justify="center">
				©2021 by Kindness Shake
				<br></br>
				<br></br>
				<br></br>
			</Row>
		</div>
	)
}

export default Footer
