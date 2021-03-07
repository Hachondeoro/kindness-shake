/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";

// import YouTube from "react-youtube";
import Banner0 from "@Components/Banner0";
import Feature6 from "@Components/Feature6";
import Contact0 from "@Components/Contact0";


import {
	Banner00DataSource,
	Feature60DataSource,
	Contact00DataSource,
} from "@Components/data.source";

let isMobile;
enquireScreen(b => {
	isMobile = b;
});

const { location = {} } = typeof window !== "undefined" ? window : {};
const opts = {
	height: "500px",
	width: "100%",
	playerVars: {
		// https://developers.google.com/youtube/player_parameters
		autoplay: 0,
		controls: 0,
		modestbranding: 0,
	},
};

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isMobile,
			show: !location.port,
		};
	}

	componentDidMount() {
		enquireScreen(b => {
			this.setState({ isMobile: !!b });
		});
		if (location.port) {
			setTimeout(() => {
				this.setState({
					show: true,
				});
			}, 500);
		}
	}

	render() {
		const content = this.state;
		const children = [
			// <Nav0
			//     id="Nav0_0"
			//     key="Nav0_0"
			//     dataSource={Nav00DataSource}
			//     isMobile={this.state.isMobile}
			// />,
			<Banner0
				id="Banner0_0"
				key="Banner0_0"
				dataSource={Banner00DataSource}
				isMobile={content.isMobile}
			/>,
			// <Content5
			//     id="Content5_0"
			//     key="Content5_0"
			//     dataSource={Content50DataSource}
			//     isMobile={content.isMobile}
			// />,

			// <YouTube videoId="47x5hD5DfqA" opts={opts} />,
			<Feature6
				id="Feature6_0"
				key="Feature6_0"
				dataSource={Feature60DataSource}
				isMobile={content.isMobile}
			/>,
			<Contact0
				id="Contact0_0"
				key="Contact0_0"
				dataSource={Contact00DataSource}
				isMobile={content.isMobile}
			/>,
		];
		return (
			<div
				className="templates-wrapper"
				ref={d => {
					this.dom = d;
				}}
			>
				{content.show && children}
			</div>
		);
	}
}


export async function getServerSideProps() {
	const res = await fetch(
		'https://api.github.com/repos/ooade/NextSimpleStarter'
	)
	const json = await res.json()

	return {
		props: {
			stars: json.stargazers_count,
		},
	}
}
