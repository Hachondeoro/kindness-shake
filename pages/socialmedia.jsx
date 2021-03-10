import React from 'react'
import InstagramEmbed from 'react-instagram-embed'
import { Instagram } from '@Components/data.js'
import { Parallax } from 'rc-scroll-anim'
import { Row, Col } from 'antd'

const socialmedia = () => {
	return (
		<div className="home-page-wrapper">
			<h1 className="text-center m-5">SOCIAL MEDIA</h1>
			<Row align="middle" justify="center">
				{Instagram.map(item => (
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
						<Col span={8}>
							<div className="m-5">
								<InstagramEmbed
									url={item.post}
									clientAccessToken="821751731773259|69972d556b438c02d3cd032878cfdbee"
									maxWidth={450}
									hideCaption={false}
									containerTagName="div"
									protocol=""
									injectScript
									onLoading={() => {}}
									onSuccess={() => {}}
									onAfterRender={() => {}}
									onFailure={() => {}}
								/>
							</div>
						</Col>
					</Parallax>
				))}
			</Row>
		</div>
	)
}

export default socialmedia
