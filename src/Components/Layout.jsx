import React, { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const Layout = ({ pageTitle, pageDescription, keyWords, children }) => {
	const { asPath } = useRouter();
	const baseUrl = "https://kindness-shake.com.au";
	return (
		<Fragment>
			<Head>
				<title>{pageTitle} - Kindness Shake | Darwin, Australia</title>
				<meta property="og:image" content={`${baseUrl}/webPreview.jpg`} />
				<link property="image" href={`${baseUrl}/webPreview.jpg`} />
			</Head>
			<div id="wrapper">{children}</div>
		</Fragment>
	);
};

export default Layout;
