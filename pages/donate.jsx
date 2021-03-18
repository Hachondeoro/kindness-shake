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
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
                    backgroundImage: 'url("/static/img/volunteer/volunteer3.jpg")',
                    backgroundSize:"contain",
                    backgroundRepeat:"no-repeat",
                    backgroundPosition:"center",
                    height:"800px"
				}}
			>
				<script
					src="https://donorbox.org/widget.js"
					paypalExpress="false"
				></script>
				<iframe
					allowpaymentrequest=""
					frameborder="0"
					height="900px"
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
			</div>
		</div>
	)
}

export default socialmedia
