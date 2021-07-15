import React from 'react'
import { enquireScreen } from 'enquire-js'
import { Card } from 'antd'
import { Row, Col } from 'antd'
import { Teaminfo } from '@Components/data.js'
import { Parallax } from 'rc-scroll-anim'
import styles from '@Components/Titles.module.css'
import { request } from '@Components/DatoCMS/datocms'

const MYQUERY = `query MyQuery {
	allSponsors {
		class
		title
		description
		image {
		  url
		}
		hyperlink
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

const Sponsors = ({ data }) => {
	return (
		<>
			<div className="home-page-wrapper">
				<h1 className="text-center m-5">OUR SPONSORS</h1>
				<h1 className="text-center m-5" style={{ color: '#d4af37' }}>
					Gold Sponsors
				</h1>
				<div className="teams3-wrapper">
					<div className="markdown">
						{data.allSponsors
							.filter(d => d.class === 'Gold Sponsor')
							.map(item => (
								<Col
									xs={{ span: 12 }}
									lg={{ span: 8 }}
									className="m-auto"
									align="middle"
									justify="center"
								>
									<Row align="middle" justify="center">
										<a
											href={item.hyperlink}
											rel="noopener noreferrer"
											target="_blank"
										>
											<img
												src={item.image.url}
												// width="100%"
												height="180em"
												style={{ margin: 'auto' }}
												alt="img"
											/>
										</a>

										<div className="teams3-top-title text-center">
											{item.title}
										</div>
										<div className="teams3-top-content text-center">
											{item.description}
										</div>
									</Row>
								</Col>
							))}
					</div>
				</div>
				<h1 className="text-center m-5">Festival Partners</h1>
				<div className="teams3-wrapper">
					<div className="markdown">
						{data.allSponsors
							.filter(d => d.class === 'Festival Partner')
							.map(item => (
								<Col
									xs={{ span: 12 }}
									lg={{ span: 8 }}
									className="m-auto"
									align="middle"
									justify="center"
								>
									<Row align="middle" justify="center">
										<a
											href={item.hyperlink}
											rel="noopener noreferrer"
											target="_blank"
										>
											<img
												src={item.image.url}
												// width="100%"
												height="180em"
												style={{ margin: 'auto' }}
												alt="img"
											/>
										</a>

										<div className="teams3-top-title text-center">
											{item.title}
										</div>
										<div className="teams3-top-content text-center">
											{item.description}
										</div>
									</Row>
								</Col>
							))}
					</div>
				</div>
				<br></br>
			</div>
		</>
	)
}

export default Sponsors
