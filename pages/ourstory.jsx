import React from 'react'
import { Row, Col } from 'antd'
import { Parallax } from 'rc-scroll-anim'
import styles from '@Components/Titles.module.css'
import { GraphQLClient } from 'graphql-request'

export async function getStaticProps() {
	const graphcms = new GraphQLClient(
		'https://api-ap-northeast-1.graphcms.com/v2/ckmmudchrs3z701z29a833h9s/master'
	)

	const { aboutuses } = await graphcms.request(
		`
		{ 
			aboutuses {
				image {
				  url
				}
				description
			  }
		}
	  `
	)
	return {
		props: {
			aboutuses
		}
	}
}

const OurStory = ({ aboutuses }) => {
	return (
		<>
			<div className="home-page-wrapper">
				<h1 className="text-center m-5">OUR STORY</h1>
				<div className="teams3-wrapper">
					{aboutuses.map(item => (
						<Parallax
							animation={{ x: 0, opacity: 1, playScale: [-0.2, 0.8] }}
							style={{ transform: 'translateX(-100px)', opacity: 1 }}
						>
							<Row align="middle" justify="center">
								<Col
									xs={{ span: 24 }}
									lg={{ span: 12 }}
									className="m-auto"
									align="middle"
									justify="center"
								>
									<div className="m-5">
										<img
											src={item.image.url}
											width="100%"
											height="100%"
											alt="img"
										/>
									</div>
								</Col>
								<Col
									xs={{ span: 20 }}
									lg={{ span: 8 }}
									className="m-auto"
									align="left"
									justify="left"
								>
									<div className={styles.subtitleStory}>{item.description}</div>
								</Col>
								<br></br>
							</Row>
						</Parallax>
					))}
				</div>
			</div>
		</>
	)
}

export default OurStory
