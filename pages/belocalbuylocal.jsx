import React from 'react'
import { Row, Col, Divider } from 'antd'
import { Parallax } from 'rc-scroll-anim'
import { BLBL } from '@Components/data.js'
import Texty from 'rc-texty'
import styles from '@Components/Titles.module.css'

const OurSupporters = () => {
	return (
		<div className="home-page-wrapper">
			<div className="texty-demo" style={{ marginTop: 64 }}>
				<Texty className={styles.titleBLBL}>Welcome to</Texty>
				<Texty className={styles.titleBLBL}>Be Local Buy Local</Texty>
			</div>
			<div className={styles.descriptionBLBL}>{BLBL.description}</div>
			<h1 className="text-center m-5">{BLBL.subtitle}</h1>
			{BLBL.steps.map(item => (
				<Col
					xs={{ span: 20 }}
					lg={{ span: 8 }}
					className="m-auto"
					align="middle"
					justify="center"
				>
					<div>
						<div className={styles.title}>{item.title}</div>
						<div className={styles.subtitle}>{item.subtitle}</div>
						<div className={styles.content}>{item.description}</div>
						<br></br>
					</div>
				</Col>
			))}
			<Row align="middle" justify="center">
				{BLBL.logos.map(item => (
					<Parallax
						animation={{ x: 0, opacity: 1, playScale: [-0.2, 0.8] }}
						style={{ transform: 'translateX(-200px)', opacity: 0 }}
					>
						<div className="ml-5 mr-5 mu-2 md-2">
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

export default OurSupporters
