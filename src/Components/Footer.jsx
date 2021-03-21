/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React, { useState } from 'react'
import { Row, Col, Divider, Modal } from 'antd'
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
	const [isModalVisible, setIsModalVisible] = useState(false)
	const showModal = () => {
		setIsModalVisible(true)
	}

	const handleOk = () => {
		setIsModalVisible(false)
	}
	return (
		<div className="footer" style={{ background: '#3E7678', color: '#FFFFFF' }}>
			<Row align="middle" justify="center">
				<Col
					xs={{ span: 20 }}
					lg={{ span: 8 }}
					className="m-auto"
					align="middle"
					justify="center"
				>
					<Row align="middle" justify="center">
						<Image
							src="/static/img/ks-logo-transparent.png"
							width={200}
							height={200}
							layout="responsive"
							alt="img"
							className="my-4"
						/>
						<Image
							src="/static/img/acnc.png"
							width={100}
							height={100}
							layout="responsive"
							alt="img"
							className="my-4"
						/>
					</Row>
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
						style={{ color: 'inherit' }}
					>
						<FacebookFilled className={styles.footerLogos} />
					</a>

					<a
						href="https://www.instagram.com/kindnessshake/"
						rel="noopener noreferrer"
						target="_blank"
						style={{ color: 'inherit' }}
					>
						<InstagramFilled className={styles.footerLogos} />
					</a>
					<a
						href="https://www.linkedin.com/company/kindnessshakent/"
						rel="noopener noreferrer"
						target="_blank"
						style={{ color: 'inherit' }}
					>
						<LinkedinFilled className={styles.footerLogos} />
					</a>
					<button
						onClick={showModal}
						style={{ border: 'none', background: 'none' }}
					>
						<WechatFilled className={styles.footerLogos} />
					</button>
					<Modal
						title="Our WeChat Account"
						visible={isModalVisible}
						onOk={handleOk}
						onCancel={handleOk}
					>
						{' '}
						<img
							src="/static/img/wechat-logo.jpg"
							alt="frontcard"
							width="100%"
							height="100%"
							className="my-2"
						/>
					</Modal>

					<br></br>
				</Col>
			</Row>
			<Divider style={{ backgroundColor: '#182B3D' }} />
			<Row align="middle" justify="center">
				<Col
					xs={{ span: 22 }}
					lg={{ span: 12 }}
					className="m-auto"
					align="middle"
					justify="center"
				>
					© 2021 Kindness Shake | info@kindness-shake.com.au | +61 451 717 861 |
					ABN: 72 451 262 337
					<br></br>
					<br></br>
					<br></br>
				</Col>
			</Row>
		</div>
	)
}

export default Footer
