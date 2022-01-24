import Footer from "@Components/Footer.jsx";
import MultiDropdownNavbar from "@Components/multidropdown rc.jsx";
import App from "next/app";
import Head from "next/head";
import React from "react";
import ReactDOM from "react-dom";
import TagManager from "react-gtm-module";
import "rc-texty/assets/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@Static/css/less/antMotionStyle.css";
import "@Static/css/main.scss";
import "@Static/css/antd.css";
import "react-tabs/style/react-tabs.css";
import "@Static/css/custom.scss";

const tagManagerArgs = {
	gtmId: "GTM-N6Z6GCZ",
};

export default class MyApp extends App {
	componentDidMount() {
		TagManager.initialize(tagManagerArgs);
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<>
				<Head>
					<title>Kindness Shake</title>
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</Head>
				<MultiDropdownNavbar />
				<Component {...pageProps} />
				<Footer />
			</>
		);
	}
}
