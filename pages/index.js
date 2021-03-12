/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react'
import { enquireScreen } from 'enquire-js'

// import YouTube from "react-youtube";
import Banner0 from '@Components/Banner0'
import Feature6 from '@Components/Feature6'
import Contact0 from '@Components/Contact0'
import Banner from '@Components/home'
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@Components/map-leaflet"), { ssr: false });

import {
	Banner00DataSource,
	Feature60DataSource,
	Contact00DataSource
} from '@Components/data.source'

let isMobile
enquireScreen(b => {
	isMobile = b
})

const { location = {} } = typeof window !== 'undefined' ? window : {}
const opts = {
	height: '500px',
	width: '100%',
	playerVars: {
		// https://developers.google.com/youtube/player_parameters
		autoplay: 0,
		controls: 0,
		modestbranding: 0
	}
}

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
		const content = this.state
		const children = [
			<Banner />,
			<Feature6
				id="Feature6_0"
				key="Feature6_0"
				dataSource={Feature60DataSource}
				isMobile={content.isMobile}
			/>,
			<Map/>
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
