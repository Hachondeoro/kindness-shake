import React from 'react'
import { enquireScreen } from 'enquire-js'
import { Card } from 'antd'
import { Row, Col } from 'antd'
import { Teaminfo } from '@Components/data.js'
import { Parallax } from 'rc-scroll-anim'
import styles from '@Components/Titles.module.css'

import { GraphQLClient } from 'graphql-request'
import ReactMarkdown from 'react-markdown'

export async function getStaticProps() {
	const graphcms = new GraphQLClient(
		'https://api-ap-northeast-1.graphcms.com/v2/ckmmudchrs3z701z29a833h9s/master'
	)

	const { teammembers } = await graphcms.request(
		`
		{ 
			teammembers {
				info
				image {
				  url
				}
			  }
		}
	  `
	)
	return {
		props: {
			teammembers
		}
	}
}

const Team = ({ teammembers }) => {
	return (
		<>
			<div className="home-page-wrapper">
				<h1 className="text-center m-5">OUR TEAM</h1>
				<div className="teams3-wrapper">
					<Row align="middle" justify="center">
						{teammembers.map(item => (
							
							<div className="markdown">
								{/* <ReactMarkdown source={`${item.info.markdown}`} /> */}
								<Parallax
									animation={{ x: 0, opacity: 1, playScale: [0, 0.8] }}
									style={{ transform: 'translateX(-300px)', opacity: 0 }}
								>
									<Col span={8}>
										<div className="teams3-top-image">
											<img
												src={item.image.url}
												width="100%"
												height="100%"
												alt="img"
											/>
										</div>

										<div className="teams3-top-title">{item.info.name}</div>
										<div className={styles.TeamDepartments}>
											{item.info.position}
										</div>
										<div className={styles.TeamEmails}>{item.info.email}</div>
										<div className="teams3-top-content">{item.info.description}</div>
										<br></br>
									</Col>
								</Parallax>
							</div>
						))}
					</Row>
				</div>
			</div>
		</>
	)
}

export default Team
