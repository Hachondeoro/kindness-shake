import React, { useRef, useEffect } from 'react'
import { Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import TweenOne from 'rc-tween-one'
import Feature6 from '@Components/Feature6'
import InstagramEmbed from 'react-instagram-embed'
import { Parallax } from 'rc-scroll-anim'
import { Row, Col } from 'antd'
import Link from 'next/link'
import Image from 'next/image'
import { Feature60DataSource } from '@Components/data.source'
import styles from '@Components/Titles.module.css'
import { GraphQLClient } from 'graphql-request'

export async function getStaticProps() {
	const graphcms = new GraphQLClient(
		'https://api-ap-northeast-1.graphcms.com/v2/ckmmudchrs3z701z29a833h9s/master'
	)
	const { homes, socialmedias } = await graphcms.request(
		`
		{ 
			homes {
				title
				content
			}
			socialmedias {
				title
				jsoncontent
			}
		}
	  `
	)
	return {
		props: {
			homes,
			socialmedias
		}
	}
}

const Home = ({ homes, socialmedias }) => {
	let imageRef = useRef(null)
	let textRef = useRef(null)

	useEffect(() => {
		var tl = gsap.timeline()
		tl.from(imageRef, { opacity: 0, scale: 0.2 }, 0.75).from(
			textRef,
			{ opacity: 0, scale: 0.2 },
			1.5
		)
	}, [])

	return (
		<>
			<div className="bannerHome">
				<Col
					xs={{ span: 24 }}
					lg={{ span: 10 }}
					className="m-auto"
					align="middle"
					justify="center"
				>
					<div className="banner-logo">
						<img
							src="/static/img/banner/Web-banner-logo.png"
							width="80%"
							alt="ks-logo"
							ref={img => (imageRef = img)}
						/>
					</div>
					<div className="banner-text">
						<img
							src="/static/img/banner/Web-banner-text.png"
							width="80%"
							alt="ks-text"
							ref={img => (textRef = img)}
						/>
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
						<DownOutlined style={{ color: 'white' }} />
					</TweenOne>
				</Col>
			</div>
			<Col
				xs={{ span: 23 }}
				lg={{ span: 12 }}
				className="m-auto"
				align="middle"
				justify="center"
			>
				<div className={styles.contentHome}>
					{homes.find(p => p.title == 'INTRO').content}
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
			<div className="vision">
				<Row justify="center">
					<Col
						xs={{ span: 23 }}
						lg={{ span: 8 }}
						align="middle"
						justify="center"
					>
						<br></br>
						<br></br>
						<h1 className={styles.titleHome}>OUR VISION</h1>
						<div className={styles.contentHome}>
							{homes.find(p => p.title == 'OUR VISION').content}
						</div>
						<br></br>
					</Col>
					<Col
						xs={{ span: 23 }}
						lg={{ span: 8 }}
						align="middle"
						justify="center"
					>
						<br></br>
						<br></br>
						<h1 className={styles.titleHome}>OUR MISSION</h1>
						<div className={styles.contentHome}>
							{homes.find(p => p.title == 'OUR MISSION').content}
						</div>
						<br></br>
					</Col>
				</Row>
				<Feature6
					id="Feature6_0"
					key="Feature6_0"
					dataSource={Feature60DataSource}
				/>
			</div>
			<div className="home-page-wrapper">
				<h1 className="text-center m-3">Social Media</h1>
				<Row align="top" justify="center">
					{socialmedias[0].jsoncontent.slice(0, 3).map(item => (
						<Parallax
							animation={{ x: 0, opacity: 1, playScale: [0, 0.8] }}
							style={{ transform: 'translateX(-100px)', opacity: 0 }}
							key={item.post}
						>
							<Col span={8}>
								<div className="m-2">
									<InstagramEmbed
										url={item.post}
										clientAccessToken="821751731773259|69972d556b438c02d3cd032878cfdbee"
										maxWidth={450}
										maxHeight={500}
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
					<br></br>
					<br></br>
				</div>
				<div>
					<Col
						xs={{ span: 20 }}
						lg={{ span: 8 }}
						className="m-auto"
						align="middle"
						justify="center"
					>
						<form
							action="https://www.paypal.com/donate"
							method="post"
							target="_top"
						>
							<input
								type="hidden"
								name="hosted_button_id"
								value="2HH49PTBMLK48"
							/>
							<input
								type="image"
								src="https://icon-library.com/images/paypal-donate-icon/paypal-donate-icon-0.jpg"
								border="0"
								name="submit"
								title="PayPal - The safer, easier way to pay online!"
								alt="Donate with PayPal button"
								height="140em"
							/>
							<img
								alt=""
								border="0"
								src="https://www.paypal.com/en_AU/i/scr/pixel.gif"
								width="1"
								height="1"
							/>
						</form>
					</Col>
					<br></br>
					<br></br>
				</div>
			</Col>
		</>
	)
}

export default Home
