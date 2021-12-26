import Footer from "@Components/Footer.jsx";
import MultiDropdownNavbar from "@Components/multidropdown rc.jsx";
import Head from "next/head";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import TagManager from "react-gtm-module";
import "rc-texty/assets/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@Static/css/less/antMotionStyle.css";
import "@Static/css/main.scss";
import "@Static/css/antd.css";
import "react-tabs/style/react-tabs.css";
import "@Static/css/custom.scss";
import withReduxStore from "@Components/ecommerce redux/common/withReduxStore";
// import FetchInitData from "@Components/ecommerce redux/other/FetchInitData";
// import { Provider } from "react-redux";
// import "@Components/ecommerce redux/styles/styles.scss";

const tagManagerArgs = {
	gtmId: "GTM-N6Z6GCZ",
};

const App = ({ Component, pageProps, reduxStore }) => {
	useEffect(() => {
		if (process.env.NODE_ENV !== "production") {
			const axe = require("react-axe");
			axe(React, ReactDOM, 1000);
		}
		TagManager.initialize(tagManagerArgs);
	}, []);

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
};

export default withReduxStore(App);
