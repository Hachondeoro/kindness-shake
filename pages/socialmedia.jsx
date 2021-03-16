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

const EventbriteSVG = () => (
	<svg
		t="1615897317877"
		class="icon"
		viewBox="0 0 1024 1024"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		p-id="1462"
		width="64"
		height="64"
	>
		<path
			d="M448.63488 247.466667c115.2-25.6 226.133333 21.333333 290.133333 106.666666L239.568213 469.333333c17.066667-106.666667 98.133333-196.266667 209.066667-221.866666z m294.4 418.133333c-38.4 55.466667-98.133333 98.133333-166.4 110.933333-115.2 25.6-226.133333-21.333333-290.133333-110.933333L785.701547 554.666667l81.066666-17.066667 157.866667-34.133333c0-34.133333-4.266667-68.266667-12.8-98.133334C947.83488 128 674.768213-38.4 397.43488 25.6S-50.56512 358.4 13.43488 627.2 350.501547 1066.666667 627.83488 1002.666667c162.133333-38.4 290.133333-145.066667 349.866667-281.6 4.266667-4.266667-234.666667-55.466667-234.666667-55.466667z"
			p-id="1463"
			fill="#919191"
		></path>
	</svg>
)

const VolunteerSVG = () => (
	<svg t="1615897995351" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1735" width="64" height="64"><path d="M655.984 256a128 128 0 1 0-0.064-255.936A128 128 0 0 0 655.984 256zM803.536 352h-308.672c-85.376 0-152.96 55.936-174.4 131.904l-51.904 145.344H111.152c-34.816 0-63.168 26.56-63.168 60.224 0 33.696 28.352 61.12 63.168 61.12h174.496c45.632 0 81.728-30.176 95.936-70.368l38.4-107.136h24.32v443.968h373.696V572.992h32.448V962.88c0 33.824 28.32 61.12 63.168 61.12C948.432 1024 975.984 996.704 975.984 963.008V530.56C975.984 432.032 905.52 352 803.536 352z" p-id="1736" fill="#919191"></path></svg>
)

const socialmedia = () => {
	return (
		<div className="home-page-wrapper">
			<h1 className="text-center m-5">SOCIAL MEDIA</h1>
			<Row align="middle" justify="center">
				<a
					href="https://www.facebook.com/KindnessShakeNT"
					rel="noopener noreferrer"
					target="_blank"
				>
					<FacebookFilled
						style={{ fontSize: '64px', color: '#919191' }}
						className="m-2"
					/>
				</a>
				<a
					href="https://www.instagram.com/kindnessshake/"
					rel="noopener noreferrer"
					target="_blank"
				>
					<InstagramFilled
						style={{ fontSize: '64px', color: '#919191' }}
						className="m-2"
					/>
				</a>
				<a
					href="https://www.facebook.com/KindnessShakeNT"
					rel="noopener noreferrer"
					target="_blank"
				>
					<WechatFilled
						style={{ fontSize: '64px', color: '#919191' }}
						className="m-2"
					/>
				</a>
				<a
					href="https://www.linkedin.com/company/kindnessshakent/"
					rel="noopener noreferrer"
					target="_blank"
				>
					<LinkedinFilled
						style={{ fontSize: '64px', color: '#919191' }}
						className="m-2"
					/>
				</a>
				<a
					href="http://kindnessshake.eventbrite.com/"
					rel="noopener noreferrer"
					target="_blank"
				>
					<Icon component={EventbriteSVG}
						style={{ fontSize: '32px', color: '#919191' }}
						className="m-2"
					/>
				</a>
				<a
					href="https://kindness-shake.com.au/volunteerwithus"
					rel="noopener noreferrer"
					target="_blank"
				>
					<Icon component={VolunteerSVG}
						style={{ fontSize: '32px', color: '#919191' }}
						className="m-2"
					/>
				</a>
			</Row>
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
