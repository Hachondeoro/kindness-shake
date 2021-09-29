import { request } from "@Components/DatoCMS/datocms";
import { Col, Row } from "antd";
import React from "react";

const MYQUERY = `query MyQuery {
	allFestivalSponsors (first:30) {
		class
		title
		description
		image {
		  url
		}
		hyperlink
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

const Sponsors = ({ data }) => {
	// const sponsors = [...new Set(data.allSponsors.map(obj => obj.class))]
	const sponsors = [
		"Event Partner",
		"Platinum Sponsor",
		"Gold Sponsor",
		"Silver Sponsor",
		"Media Partner",
	];
	const colorSponsors = ["#CACED8", "#CACED8", "#d4af37", "#C0C0C0", "#000"];
	// console.log(sponsors)
	return (
		<>
			<div className="home-page-wrapper">
				<h1 className="text-center m-5">OUR SPONSORS</h1>
				<Col xs={{ span: 24 }} lg={{ span: 16 }} className="m-auto" align="middle" justify="center">
					{sponsors.map((sponsorType, index) => {
						return (
							<>
								<h1
									className="text-center mt-4 mb-2 mr-2 ml-2"
									style={{ color: colorSponsors[index] }}>
									{sponsorType}s
								</h1>
								<div className="teams3-wrapper">
									<div className="markdown">
										<Row align="middle" justify="center">
											{data.allSponsors
												.filter(d => d.class === sponsorType)
												.map(item => (
													<Col
														xs={{ span: 12 }}
														lg={{ span: 8 }}
														// className="m-auto"
														align="middle"
														justify="center">
														<a href={item.hyperlink} rel="noopener noreferrer" target="_blank">
															<img src={item.image.url} className="sponsorImages" alt="img" />
														</a>
														{/* <div className="font-weight-bold">{item.title}</div> */}
													</Col>
												))}
										</Row>
									</div>
								</div>
							</>
						);
					})}
				</Col>
				<br></br>
			</div>
		</>
	);
};

export default Sponsors;
