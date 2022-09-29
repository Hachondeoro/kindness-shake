import React from "react";
import Document, {
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en-GB">
				<Head>
					{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollTrigger.min.js"></script> */}
					{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
