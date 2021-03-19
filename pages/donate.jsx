import React from 'react'
import InstagramEmbed from 'react-instagram-embed'
import { Instagram } from '@Components/data.js'
import { Parallax } from 'rc-scroll-anim'
import { Row, Col } from 'antd'
import Icon, {
	FacebookFilled,
	InstagramFilled,
	WechatFilled,
	LinkedinFilled
} from '@ant-design/icons'

const socialmedia = () => {
	return (
		<div className="home-page-wrapper">
			<h1 className="text-center m-5">DONATE TODAY!</h1>
			<Row>
				<Col
					xs={{ span: 20 }}
					lg={{ span: 10 }}
					className="m-auto"
					align="middle"
					justify="center"
				>
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
					justify="center"
				>
					<img
						src="/static/img/volunteer/volunteer3.jpg"
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

export default socialmedia
