import React, { useState, useEffect } from 'react'
import { Row, Col, Divider } from 'antd'
import { Parallax } from 'rc-scroll-anim'
import Texty from 'rc-texty'
import styles from '@Components/Titles.module.css'
import { isMobile } from 'react-device-detect'
import { GraphQLClient } from 'graphql-request'
import ReactMarkdown from 'react-markdown'

export async function getStaticProps() {
	const graphcms = new GraphQLClient(
		'https://api-ap-northeast-1.graphcms.com/v2/ckmmudchrs3z701z29a833h9s/master'
	)

	// 5 times in total teammembers
	const { belocals } = await graphcms.request(
		`
		{ 
			belocals {
				richtext {
				  markdown
				}
				image {
				  url
				}
				jsontext
			  }
		}
	  `
	)
	return {
		props: {
			belocals
		}
	}
}

const OurSupporters = ({ belocals }) => {
	const [phone, setPhone] = useState(false)

	const logos = belocals[0].image.map((x, i) => ({
		...x,
		...belocals[0].jsontext[i]
	}))

	useEffect(() => {
		setPhone(isMobile)
	}, [])

	return (
		<div className="home-page-wrapper">
			<div className="texty-demo" style={{ marginTop: 64 }}>
				<Texty className={styles.titleBLBL}>Welcome to</Texty>
				<Texty className={styles.titleBLBL}>Be Local Buy Local</Texty>
			</div>
			<div className={styles.descriptionBLBL}>
				Be LOCAL & Buy LOCAL is an initiative aimed to support and establish an
				enduring relationship between local businesses and local community
			</div>
			<h1 className="text-center m-5">How Be Local Buy Local works</h1>

			{belocals.map(item => (
				<Col
					xs={{ span: 20 }}
					lg={{ span: 8 }}
					className="m-auto"
					align="middle"
					justify="center"
				>
					<div className="markdown">
						<ReactMarkdown source={`${item.richtext.markdown}`} />
					</div>
				</Col>
			))}

			{phone ? (
				<Row align="middle" justify="center">
					{logos.map(item => (
						<Parallax
							animation={{ x: 0, opacity: 1, playScale: [-0.6, 0.8] }}
							style={{ transform: 'translateX(-200px)', opacity: 0 }}
						>
							<div className="mx-1 mt-3">
								<img src={item.url} width={item.widthMobile} alt="img" />
							</div>
							<div className={styles.discount}>{item.discount}</div>
							<br></br>
						</Parallax>
					))}
				</Row>
			) : (
				<Row align="middle" justify="center">
					{logos.map(item => (
						<Parallax
							animation={{ x: 0, opacity: 1, playScale: [-0.6, 0.8] }}
							style={{ transform: 'translateX(-200px)', opacity: 0 }}
						>
							<div className="ml-5 mr-5 mu-2 md-2">
								<img src={item.url} width={item.width} alt="img" />
							</div>
							<div className={styles.discount}>{item.discount}</div>
							<br></br>
						</Parallax>
					))}
				</Row>
			)}
		</div>
	)
}

export default OurSupporters
