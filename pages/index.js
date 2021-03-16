import React from 'react'
import { enquireScreen } from 'enquire-js'
import Home from '@Components/home'

// const Map = dynamic(() => import("@Components/map-leaflet"), { ssr: false });

let isMobile
enquireScreen(b => {
	isMobile = b
})

const { location = {} } = typeof window !== 'undefined' ? window : {}

export default class Index extends React.Component {
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
		const content = this.state
		const children = [
			<Home />,
			// <Map/>
		]
		return (
			<div
				className="templates-wrapper"
				ref={d => {
					this.dom = d
				}}
			>
				{content.show && children}
			</div>
		)
	}
}

export async function getServerSideProps() {
	const res = await fetch(
		'https://api.github.com/repos/ooade/NextSimpleStarter'
	)
	const json = await res.json()

	return {
		props: {
			stars: json.stargazers_count
		}
	}
}
