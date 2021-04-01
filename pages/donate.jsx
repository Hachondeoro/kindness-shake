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
					align="middle"
					justify="center"
				>
					
					<form
						action="https://www.paypal.com/donate"
						method="post"
						target="_top"
					>
						<input
							type="hidden"
							name="hosted_button_id"
							value="2HH49PTBMLK48"
						/>
						<input
							type="image"
							src="https://icon-library.com/images/paypal-donate-icon/paypal-donate-icon-0.jpg"
							border="0"
							name="submit"
							title="PayPal - The safer, easier way to pay online!"
							alt="Donate with PayPal button"
							height="180em"
						/>
						<img
							alt=""
							border="0"
							src="https://www.paypal.com/en_AU/i/scr/pixel.gif"
							width="1"
							height="1"
						/>
					</form>
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
