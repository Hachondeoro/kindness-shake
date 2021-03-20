import React from 'react'
import { Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import TweenOne from 'rc-tween-one'
import Feature6 from '@Components/Feature6'
import { enquireScreen } from 'enquire-js'

import InstagramEmbed from 'react-instagram-embed'
import { Instagram } from '@Components/data.js'
import { Parallax } from 'rc-scroll-anim'
import { Row, Col } from 'antd'
import Link from 'next/link'
import { Aboutus } from '@Components/data.js'
import Image from 'next/image'
import { Feature60DataSource } from '@Components/data.source'
import styles from '@Components/Titles.module.css'
// import { Button } from '@material-ui/core';

// https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser
let isMobile
enquireScreen(b => {
	isMobile = b
})

const Home = () => {
	return (
		<>
			<div className="banner0">
				<div
					style={{
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%, -50%)'
					}}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<Image
							src="/static/img/ks-logo-transparent.png"
							width="300"
							height="300"
							alt="img"
						/>
					</div>
					<div style={{ color: 'white', fontSize: 32 }}>
						Welcome to #KindnessShake
					</div>
					<br></br>
				</div>
				<TweenOne
					animation={{
						y: '-=50',
						yoyo: true,
						repeat: -1,
						duration: 1000
					}}
					className="banner0-icon"
					key="icon"
				>
					<DownOutlined />
				</TweenOne>
			</div>
			<Col
				xs={{ span: 23 }}
				lg={{ span: 12 }}
				className="m-auto"
				align="middle"
				justify="center"
			>
				<div className={styles.contentHome}>
					The Kindness Shake (KS) is a community and student-led initiative,
					launched during the outbreak of the COVID-19 pandemic. It supports and
					focuses on international students, migrants, refugees, and temporary
					visa holders who are experiencing financial difficulties. This
					partnership between international student volunteers, education and
					training providers, local businesses, multi-cultural groups, and
					Governments, aims to ensure that no one in the NT affected by the
					crisis goes to bed without a meal and a kind and genuine smile. 
				</div>
				<Button
					type="primary"
					shape="round"
					size="large"
					ghost
					style={{ borderColor: '#ccc' }}
				>
					<Link href="/ourstory" passHref>
						LEARN MORE
					</Link>
				</Button>
			</Col>
			<Row justify="center">
				<Col xs={{ span: 23 }} lg={{ span: 8 }} align="middle" justify="center">
					<br></br>
					<br></br>
					<h1 className={styles.titleHome}>OUR VISION</h1>
					<div className={styles.contentHome}>{Aboutus.vision} </div>
					<br></br>
				</Col>
				<Col xs={{ span: 23 }} lg={{ span: 8 }} align="middle" justify="center">
					<br></br>
					<br></br>
					<h1 className={styles.titleHome}>OUR MISSION</h1>
					<div className={styles.contentHome}>{Aboutus.mission} </div>
					<br></br>
				</Col>
			</Row>
			<Feature6
				id="Feature6_0"
				key="Feature6_0"
				dataSource={Feature60DataSource}
				isMobile={isMobile}
			/>
			<div className="home-page-wrapper">
				<h1 className="text-center m-3">Social Media</h1>
				<Row align="middle" justify="center">
					{Instagram.slice(0, 3).map(item => (
						<Parallax
							animation={{ x: 0, opacity: 1, playScale: [0, 0.8] }}
							style={{ transform: 'translateX(-100px)', opacity: 0 }}
						>
							<Col span={8}>
								<div className="m-2">
									<InstagramEmbed
										url={item.post}
										clientAccessToken="821751731773259|69972d556b438c02d3cd032878cfdbee"
										maxWidth={450}
										hideCaption={true}
										containerTagName="div"
										protocol=""
										injectScript
										onLoading={() => {}}
										onSuccess={() => {}}
										onAfterRender={() => {}}
										onFailure={() => {}}
									/>
								</div>
							</Col>
						</Parallax>
					))}
				</Row>
			</div>
			<Col
				xs={{ span: 20 }}
				lg={{ span: 12 }}
				className="m-auto"
				align="middle"
				justify="center"
			>
				<div className={styles.titleHome}>
				<br></br>
					Take part in empowering whole communities
				</div>
				<div >
				<Button
					type="primary"
					shape="round"
					ghost
					style={{
						borderColor: '#ccc',
						fontSize: '40px',
						fontWeight: '600',
						minHeight: '70px',
						marginTop:'2em',
						marginBottom:'2em',
					}}
				>
					<Link href="/donate" passHref>
						DONATE NOW
					</Link>
				</Button>
				<br></br>
				<br></br>
				</div>
			</Col>
		</>
	)
}

export default Home
