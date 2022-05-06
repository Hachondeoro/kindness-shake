import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Row, Col, Button } from "antd";
import { request } from "@Components/DatoCMS/datocms";
import ReactPlayer from "react-player";

const MYQUERY = `query MyQuery {
	festivalContent {
    content
  }
}
`;

export async function getStaticProps() {
	const data = await request({
		query: MYQUERY,
	});
	return {
		props: { data },
		revalidate: 10,
	};
}

const OurProjects = ({ data }) => {
	return (
		<>
			<div className="festivalbanner">
				<img src="/static/img/festival/2022/social_covers_Linkedin.png" width="100%" height="100%" alt="img" />
			</div>
			<div className="markdown  mx-3">
				<Row align="middle" justify="center">
					<Col xs={{ span: 24 }} lg={{ span: 12 }} align="middle" justify="center">
						<ReactMarkdown source={data.festivalContent.content} />
						{/* <ReactMarkdown source={`${VolunteerIntro}`} /> */}
						{/*<Button type="primary" shape="round" size="large" ghost style={{ borderColor: "#ccc" }}>*/}
						{/*	<a href="https://www.eventbrite.com.au/e/123964590427" target="_blank">*/}
						{/*		ATTENDEES REGISTRATION*/}
						{/*	</a>*/}
						{/*</Button>*/}
						{/*<br />*/}
						{/*<br />*/}
						{/*<strong>Want to have a stall at the Kindness Festival?</strong>*/}
						{/*<br />*/}
						{/*<Button type="primary" shape="round" size="large" ghost style={{ borderColor: "#ccc" }}>*/}
						{/*	<a href="https://forms.office.com/r/qMrKDu6fu1" target="_blank">*/}
						{/*		STALL HOLDERS REGISTRATION*/}
						{/*	</a>*/}
						{/*</Button>*/}
						{/*<br />*/}
						{/*<br />*/}
						{/*<strong>*/}
						{/*	Want to perform or know someone who <br />*/}
						{/*	should perform at the Kindness Festival?*/}
						{/*</strong>*/}
						{/*<br />*/}
						{/*<Button type="primary" shape="round" size="large" ghost style={{ borderColor: "#ccc", height: "auto" }}>*/}
						{/*	<a href="https://forms.office.com/r/ATxnQz3AHF" target="_blank">*/}
						{/*		ARTS, CULTURE & PERFORMANCES*/}
						{/*		<br />*/}
						{/*		EXPRESSIONS OF INTEREST*/}
						{/*	</a>*/}
						{/*</Button>*/}
					</Col>
				</Row>
			</div>
			{/*<div className="my-3">*/}
			{/*	<Row align="middle" justify="center">*/}
			{/*		<ReactPlayer*/}
			{/*			url="https://www.youtube.com/embed/pyV1Z_Hfk4M"*/}
			{/*			config={{*/}
			{/*				youtube: {*/}
			{/*					playerVars: { modestbranding: 1, showinfo: 0 },*/}
			{/*				},*/}
			{/*			}}*/}
			{/*		/>*/}
			{/*	</Row>*/}
			{/*</div>*/}
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

// CSS to focus on the img on mobile
// CSS to use another footer on laptop

export default OurProjects;
