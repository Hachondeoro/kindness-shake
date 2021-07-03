import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en-GB">
				<Head>
					<meta name="theme-color" content="#673ab7" />
					<meta property="og:title" content="Kindness Shake" />
					<meta property="og:description" content="You need a hand? We'll give you a #KindnessShake" />
					<meta property="og:image" content="https://kindness-shake.com.au/static/img/banner/Web-banner-logo.png"/>
					<meta property="og:url" content="https://kindness-shake.com.au/"/>
					<meta property="og:type" content="website" />

					<meta
						name="Description"
						content="You need a hand? We will give you a #KindnessShake!"
					/>
					<link rel="manifest" href="static/manifest.json" />
					<link rel="icon" href="/favicon.ico" />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollTrigger.min.js"></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
