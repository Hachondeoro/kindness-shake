import React from 'react'
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

	// 6 times in total teammembers


	
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
			<Row justify="center">
				<Col xs={{ span: 23 }} lg={{ span: 8 }} align="middle" justify="center">
					<br></br>
					<br></br>
					<h1 className={styles.titleHome}>OUR VISION</h1>
					<div className={styles.contentHome}>
						{homes.find(p => p.title == 'OUR VISION').content}
					</div>
					<br></br>
				</Col>
				<Col xs={{ span: 23 }} lg={{ span: 8 }} align="middle" justify="center">
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
			<div className="home-page-wrapper">
				<h1 className="text-center m-3">Social Media</h1>
				<Row align="middle" justify="center">
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
				<div>
					<Button
						type="primary"
						shape="round"
						ghost
						style={{
							borderColor: '#ccc',
							fontSize: '40px',
							fontWeight: '600',
							minHeight: '70px',
							marginTop: '2em',
							marginBottom: '2em'
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
