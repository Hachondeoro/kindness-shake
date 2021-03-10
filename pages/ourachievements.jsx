import React from 'react'
import { enquireScreen } from 'enquire-js'
import { Card } from 'antd'
import { Row, Col } from 'antd'
import { Aboutus } from '@Components/data.js'
import { Parallax } from 'rc-scroll-anim'

let isMobile
enquireScreen(b => {
	isMobile = b
})
const { location = {} } = typeof window !== 'undefined' ? window : {}
const { Meta } = Card

export default class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isMobile,
			show: !location.port
		}
	}

	componentDidMount() {
		enquireScreen(b => {
			this.setState({ isMobile: !!b })
		})

		if (location.port) {
			setTimeout(() => {
				this.setState({
					show: true
				})
			}, 500)
		}
	}

	render() {
		return (
			<>
				<div className="home-page-wrapper">
					<h1 className="text-center m-5">OUR STORY</h1>
					<div className="teams3-wrapper">
						{Aboutus.story.map(item => (
							<Parallax
								animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
								style={{ transform: 'translateX(-100px)', opacity: 0 }}
							>
								<Row align="middle" justify="center">
									<div className="teams3-top-image">
										<img src={item.img} width="100%" height="100%" alt="img" />
									</div>
									<div className="teams3-top-content">{item.description}</div>
									<br></br>
								</Row>
							</Parallax>
						))}
					</div>
				</div>
			</>
		)
	}
}
