import React, { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const Layout = ({ pageTitle, pageDescription, keyWords, children }) => {
	const { asPath } = useRouter();
	const baseUrl = "https://kindness-shake.com.au";
	return (
		<Fragment>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta charSet="UTF-8" />
				<meta name="google-site-verification" content="Q1VbG70vk5QDujpOCiy41GLO32duGdDJ9BVYXzmKOGs" />
				<title>{pageTitle} - Kindness Shake | Darwin, Australia</title>
				<meta property="og:title" content={pageTitle} />
				<meta name="description" content={pageDescription} />
				<meta property="og:description" content={pageDescription} />
				<meta name="keywords" content={keyWords} />
				<meta property="og:type" content="website" />
				<meta property="og:image" content={`${baseUrl}/webPreview.jpg`} />
				<link property="image" href={`${baseUrl}/webPreview.jpg`} />

				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<meta property="og:url" content={`${baseUrl}${asPath}`} />
				<meta property="og:site_name" content="Kindness Shake" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={`${pageTitle} - Kindness Shake | Darwin, Australia`} />
				<meta name="twitter:description" content={pageDescription} />
				<meta name="twitter:image" content={`${baseUrl}/webPreview.jpg`} />

				<meta property="og:locale" content="en_AU" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-title" content={pageTitle} />
				<meta name="mobile-web-app-capable" content="yes" />
			</Head>
			<div id="wrapper">{children}</div>
		</Fragment>
	);
};

export default Layout;
