import React from "react";
import { Row, Col } from "antd";
import { Parallax } from "rc-scroll-anim";
import { isMobile } from "react-device-detect";
import { GraphQLClient } from "graphql-request";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
	const graphcms = new GraphQLClient(
		"https://api-ap-northeast-1.graphcms.com/v2/ckmmudchrs3z701z29a833h9s/master",
	);

	const {
		supporters,
	} = await graphcms.request(
		`
		{
			supporters {
				info {
				  markdown
				}
				jsonContent
				image {
				  url
				}
			  }
		}
	  `,
	);
	return {
		props: {
			supporters,
		},
	};
}

const OurSupporters = ({
	supporters,
}) => {
	const logos = supporters[0].image.map(
		(x, i) => ({
			...x,
			...supporters[0]
				.jsonContent[i],
		}),
	);

	return (
		<div>
			<Col
				xs={{ span: 22 }}
				lg={{ span: 12 }}
				className="m-auto"
				align="middle"
				justify="center">
				{supporters.map(
					item => (
						<div className="markdown">
							<ReactMarkdown
								source={`${item.info.markdown}`}
							/>
						</div>
					),
				)}
			</Col>
			{isMobile ? (
				<Row
					align="middle"
					justify="center">
					{logos.map(item => (
						<Parallax
							animation={{
								x: 0,
								opacity: 1,
								playScale: [
									-0.2,
									0.8,
								],
							}}
							style={{
								transform:
									"translateX(-100px)",
								opacity: 1,
							}}>
							<div className="m-2 mt-3">
								<img
									src={
										item.url
									}
									width={
										item.widthMobile
									}
									alt="img"
								/>
							</div>
						</Parallax>
					))}
				</Row>
			) : (
				<Row
					align="middle"
					justify="center">
					{logos.map(item => (
						<Parallax
							animation={{
								x: 0,
								opacity: 1,
								playScale: [
									-0.2,
									0.8,
								],
							}}
							style={{
								transform:
									"translateX(-100px)",
								opacity: 1,
							}}>
							<Col
								span={
									4
								}>
								<div className="ml-5 mr-5 mu-2 md-2">
									<img
										src={
											item.url
										}
										width={
											item.width
										}
										alt="img"
									/>
								</div>
							</Col>
						</Parallax>
					))}
				</Row>
			)}
		</div>
	);
};

export default OurSupporters;
