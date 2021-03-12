import React from 'react'
import { Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import { isImg } from '@Components/utils'
import Image from 'next/image'

// https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser


const Home = () => {
	return (
		<>
			<div className="banner0">
				<div
					style={{
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%, -50%)'
					}}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<Image
							src="/static/img/ks-logo-transparent.png"
							width="300"
							height="300"
							alt="img"
						/>
					</div>
					<div style={{ color: 'white', fontSize: 30 }}>
						You need a hand? We'll give you a <br></br>#Kindness Shake
					</div>
					<br></br>
					<Button className="banner0-button">Learn more</Button>
				</div>
				<TweenOne
					animation={{
						y: '-=100',
						yoyo: true,
						repeat: -1,
						duration: 1000
					}}
					className="banner0-icon"
					key="icon"
				>
					<DownOutlined />
				</TweenOne>
			</div>
			
		</>
	)
}

export default Home
