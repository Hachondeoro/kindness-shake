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

import Image from 'next/image'
import { Feature60DataSource } from '@Components/data.source'

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
					<div style={{ color: 'white', fontSize: 30 }}>
						You need a hand? We'll give you a <br></br>#KindnessShake
					</div>
					<br></br>
					<Button className="banner0-button">Learn more</Button>
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
			<Feature6
				id="Feature6_0"
				key="Feature6_0"
				dataSource={Feature60DataSource}
				isMobile={isMobile}
			/>
			<div className="home-page-wrapper">
				<h1 className="text-center m-5">Social Media</h1>
				<Row align="middle" justify="center">
					{Instagram.slice(0, 6).map(item => (
						<Parallax
							animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
							style={{ transform: 'translateX(-100px)', opacity: 0 }}
						>
							<Col span={8}>
								<div className="m-5">
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
		</>
	)
}

export default Home
