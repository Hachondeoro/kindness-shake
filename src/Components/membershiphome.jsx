import React from 'react'
import { Row, Col, Divider } from 'antd'
import { Parallax } from 'rc-scroll-anim'
import { BLBL } from '@Components/data.js'
import SpecialTitle from '@Components/specialtitle'
import styles from '@Components/Titles.module.css'

const MembershipHome = () => {
	return (
		<div className="home-page-wrapper">
			<SpecialTitle title="MEMBERSHIP" subtitle="Kindness Shake Inc" />
			<h1 className="text-center m-5">{BLBL.subtitle}</h1>
			{BLBL.steps.map(item => (
				<Row align="middle" justify="center">
					<div className="m-3">
						<div className={styles.title}>{item.title}</div>
						<div className={styles.subtitle}>{item.subtitle}</div>
						<div className={styles.content}>{item.description}</div>
						<br></br>
					</div>
				</Row>
			))}
			<Row align="middle" justify="center">
				{BLBL.logos.map(item => (
					<Parallax
						animation={[
							{ x: 0, opacity: 1, playScale: [0, 0.8] },
							{ y: 100, playScale: [0, 0.3] },
							{ blur: '10px', playScale: [0, 1] }
						]}
						style={{
							transform: 'translateX(-100px)',
							filter: 'blur(0px)',
							opacity: 0
						}}
					>
						
							<div className="m-5">
								<img src={item.path} height="200px" alt="img" />
							</div>
							<div className={styles.discount}>{item.discount}</div>
							<br></br>
						
					</Parallax>
				))}
			</Row>
		</div>
	)
}

export default MembershipHome
