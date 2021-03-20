import React from 'react'
import { Row, Col, Button } from 'antd'
import styles from '@Components/Titles.module.css'

const Donate = () => {
	return (
		<div className="home-page-wrapper">
			<h1 className="text-center m-4">DONATE TODAY!</h1>
			<div className={styles.membership}>
				Thank you for making a difference to your community by helping us
				support the Northern Territory community.{' '}
			</div>
			<Row>
				<Col
					xs={{ span: 20 }}
					lg={{ span: 8 }}
					className="m-auto"
					align="right"
					justify="middle"
				>
					<div style={{ fontWeight: 'bold', textAlign: 'center' }}>
						<br></br>
						My gift to Kindness Shake
						<br></br>
						<br></br>
					</div>
					<script
						src="https://donorbox.org/widget.js"
						paypalExpress="false"
					></script>
					<iframe
						allowpaymentrequest=""
						frameborder="0"
						height="600px"
						name="donorbox"
						scrolling="no"
						seamless="seamless"
						src="https://donorbox.org/embed/inthistogether-1?default_interval=o&hide_donation_meter=true"
						style={{
							maxWidth: '500px',
							minWidth: '250px',
							maxHeight: 'none!important'
						}}
						width="100%"
					></iframe>
				</Col>
				<Col
					xs={{ span: 20 }}
					lg={{ span: 14 }}
					className="m-auto"
					align="middle"
					justify="left"
				>
					<img
						src="/static/img/donate.jpg"
						alt="frontcard"
						width="100%"
						height="100%"
						className="my-2"
					/>
				</Col>
			</Row>
		</div>
	)
}

export default Donate
