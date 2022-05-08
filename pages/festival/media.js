import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Row, Col, Button } from "antd";
import { request } from "@Components/DatoCMS/datocms";
import ReactPlayer from "react-player";

export async function getStaticProps() {
	const data = await request({
		query: `
		query MyQuery {
			festivalMediacontent {
    		content
  		}
		}`,
	});
	return {
		props: { data },
		revalidate: 10,
	};
}

const Stalls = ({ data }) => {
	return (
		<>
			<div className="festivalbanner">
				<img src="/static/img/festival/2022/social_covers_Linkedin.png" width="100%" height="100%" alt="img" />
			</div>
			<div className="markdown  mx-3">
				<Row align="middle" justify="center">
					<Col xs={{ span: 24 }} lg={{ span: 12 }} align="middle" justify="center">
						<ReactMarkdown source={data.festivalMediacontent.content} />
					</Col>
				</Row>
			</div>
			<div>
				<Row align="middle" justify="center">
					<h2>Proudly sponsored by</h2>
				</Row>
				<Row align="middle" justify="center">
					<br />
					<Col xs={{ span: 12 }} lg={{ span: 6 }} align="middle" justify="center">
						<img src="/static/img/festival/darwinwaterfront.jpg" width="100%" alt="darwinwaterfront" />
					</Col>

					<Col xs={{ span: 12 }} lg={{ span: 6 }} align="middle" justify="center">
						<img src="/static/img/festival/ntg-logo.jpg" width="100%" alt="ntg-logo" />
					</Col>
				</Row>
				<br />
			</div>
		</>
	);
};

export default Stalls;
