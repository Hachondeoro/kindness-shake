/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react'
import { Row, Col, Divider } from 'antd'
import Image from 'next/image'
import {
	FacebookFilled,
	InstagramFilled,
	WechatFilled,
	LinkedinFilled
} from '@ant-design/icons'
import Link from 'next/link'
import styles from '@Components/Titles.module.css'

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
					<div className={styles.footerTitle}>ABOUT US</div>
					<br></br>
					<Link href="/ourstory" passHref>
						<a className={styles.footerSubtitle}>OUR VISION</a>
					</Link>
					<br></br>
					<br></br>
					<Link href="/ourstory" passHref>
						<a className={styles.footerSubtitle}>OUR MISSION</a>
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
					<div className={styles.footerTitle}>SOCIAL MEDIA</div>
					<br></br>
					<a
						href="https://www.facebook.com/KindnessShakeNT"
						rel="noopener noreferrer"
						target="_blank"
					>
						<FacebookFilled className={styles.footerLogos} />
					</a>

					<a
						href="https://www.instagram.com/kindnessshake/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<InstagramFilled className={styles.footerLogos} />
					</a>
					<a
						href="https://www.linkedin.com/company/kindnessshakent/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<LinkedinFilled className={styles.footerLogos} />
					</a>
					<a
						href="https://www.facebook.com/KindnessShakeNT"
						rel="noopener noreferrer"
						target="_blank"
					>
						<WechatFilled className={styles.footerLogos} />
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
