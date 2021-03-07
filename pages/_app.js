import React from 'react'
import ReactDOM from 'react-dom'
import Head from 'next/head'
import App from 'next/app'
import { createMuiTheme } from '@material-ui/core/styles'
import Footer1 from "@Components/Footer1.jsx";
import { Footer10DataSource } from "@Components/data.source";
import { enquireScreen } from "enquire-js";
import MultiDropdownNavbar from "@Components/multidropdown.jsx";

import "@Static/css/main.scss";
import "rc-texty/assets/index.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@Static/css/less/antMotionStyle.css";

export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		return {
			pageProps: {
				// Call page-level getInitialProps
				...(Component.getInitialProps
					? await Component.getInitialProps(ctx)
					: {}),
			},
		}
	}

	componentDidMount() {
		if (process.env.NODE_ENV !== 'production') {
			const axe = require('react-axe')
			axe(React, ReactDOM, 1000)
		}
	}

	render() {
		const { Component, pageProps } = this.props

		const theme = createMuiTheme({
			palette: {
				background: {
					default: '#EEE',
				},
				primary: {
					main: '#673ab7',
				},
			},
		})

		return (
			<>
				<Head>
					<title>Kindness Shake</title>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
				</Head>
						<MultiDropdownNavbar />
						<Component {...pageProps} />
						<Footer1
							id="Footer1_0"
							key="Footer1_0"
							dataSource={Footer10DataSource}
							// isMobile={}
						/>
			</>
		)
	}
}
