import React from 'react'
import { Row, Col } from 'antd'
import { Projects } from '@Components/data.js'
import { Parallax } from 'rc-scroll-anim'
import styles from '@Components/Titles.module.css'

const OurProjects = () => {
	return (
		<>
			<div className="home-page-wrapper">
				<h1 className="text-center mt-5">OUR PROJECTS</h1>
				<div className="teams3-wrapper">
					{Projects.map(item => (
						<Parallax
							animation={{ x: 0, opacity: 1, playScale: [-0.2, 0.8] }}
							style={{ transform: 'translateX(-100px)', opacity: 1 }}
						>
							<Row align="middle" justify="center">
								<Col
									xs={{ span: 24 }}
									lg={{ span: 10 }}
									className="m-auto"
									align="middle"
									justify="center"
								>
									<div>
										<img
											src={item.image}
											width="100%"
											height="100%"
											alt="img"
                                            className="mt-1"
										/>
									</div>
								</Col>
								<Col
									xs={{ span: 20 }}
									lg={{ span: 10 }}
									className="m-auto"
									align="middle"
									justify="center"
								>
									<div className={styles.titleAwards}>{item.title}</div>
									<div className={styles.contentAwards}>{item.description}</div>
									<br></br>
								</Col>
							</Row>
						</Parallax>
					))}
				</div>
			</div>
		</>
	)
}

export default OurProjects
