import React from 'react'
import ReactDOM from 'react-dom'
import Head from 'next/head'
import App from 'next/app'
import MultiDropdownNavbar from '@Components/multidropdown rc.jsx'
import Footer from '@Components/Footer.jsx'

import 'react-tabs/style/react-tabs.css'
import '@Static/css/main.scss'
import 'rc-texty/assets/index.css'
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@Static/css/less/antMotionStyle.css'
import '@Static/css/custom.scss'

export default class MyApp extends App {
	
	componentDidMount() {
		if (process.env.NODE_ENV !== 'production') {
			const axe = require('react-axe')
			axe(React, ReactDOM, 1000)
		}
	}

	render() {
		const { Component, pageProps } = this.props

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
				<Footer />
			</>
		)
	}
}
