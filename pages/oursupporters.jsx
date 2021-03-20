import React from 'react'
import { Row, Col } from 'antd'
import { Parallax } from 'rc-scroll-anim'
import { Supporters } from '@Components/data.js'
import styles from '@Components/Titles.module.css'

const OurSupporters = () => {
	return (
		<div className="home-page-wrapper">
			<h1 className="text-center m-5">
				Together, we are supporting the Northern Territory community{' '}
			</h1>
			<Col
				xs={{ span: 22 }}
				lg={{ span: 10 }}
				className="m-auto"
				align="middle"
				justify="center"
			>
				<div className={styles.membership}>
					We are incredibly fortunate to work with large and small organisations
					as well as some very special individuals who are committed to provide
					support to international students, temporary visa holders and
					migrants.
					<br></br>
					<br></br>
					The support that Kindness Shake provides would not be possible without
					the incredible generosity of our supporters.
					<br></br>
					<br></br>
				</div>
				<div className={styles.membership}>
					Contact us:<br></br>
					<a href="mailto:info@kindness-shake.com.au">
						info@kindness-shake.com.au
					</a>
					<br></br>+61 451 717 861
				</div>
			</Col>
			<h1 className="text-center m-5">OUR SUPPORTERS</h1>
			<Row align="middle" justify="center">
				{Supporters.map(item => (
					<Parallax
						animation={{ x: 0, opacity: 1, playScale: [-0.5, 0.8] }}
						style={{ transform: 'translateX(-500px)', opacity: 0 }}
					>
						<Col span={4}>
							<div className="ml-5 mr-5 mu-2 md-2">
								<img src={item.path} height={item.height} alt="img" />
							</div>
							<br></br>
						</Col>
					</Parallax>
				))}
			</Row>
		</div>
	)
}

export default OurSupporters
