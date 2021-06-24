import React from 'react'
import { enquireScreen } from 'enquire-js'
import { Card } from 'antd'
import { Row, Col } from 'antd'
import { Teaminfo } from '@Components/data.js'
import { Parallax } from 'rc-scroll-anim'
import styles from '@Components/Titles.module.css'
import { request } from '@Components/DatoCMS/datocms'

const MYQUERY = `query MyQuery {
	allTeammembers {
		name
		email
		role
		description
		image {
		  url
		}
	  }
}
`

export async function getStaticProps() {
	const data = await request({
		query: MYQUERY
	})
	return {
		props: { data },
		revalidate: 10
	}
}

const Team = ({ data }) => {
	return (
		<>
			<div className="home-page-wrapper">
				<h1 className="text-center m-5">OUR TEAM</h1>
				<div className="teams3-wrapper">
					<Row align="top" justify="center">
						{data.allTeammembers.map(item => (
							<div className="markdown">
								<Parallax
									animation={{ x: 0, opacity: 1, playScale: [-0.2, 0.8] }}
									style={{ transform: 'translateX(-100px)', opacity: 1 }}
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

										<div className="teams3-top-title">{item.name}</div>
										<div className={styles.TeamDepartments}>{item.role}</div>
										<div className={styles.TeamEmails}>{item.email}</div>
										<div className="teams3-top-content">{item.description}</div>
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
