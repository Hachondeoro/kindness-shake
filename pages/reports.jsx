import React from "react";
import { Col, Row } from "antd";
import { Parallax } from "rc-scroll-anim";
import styles from "@Components/Titles.module.css";
import { request } from "@Components/DatoCMS/datocms";
import PDFreader from "../components/pdf-viewer";

const MYQUERY = `query MyQuery {
	allPublications {
    title
    publication {
      url
    }
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

const Reports = ({ data }) => {
	return (
		<>
			<div className="home-page-wrapper">
				<h1 className="text-center m-5">KINDNESS SHAKE REPORTS</h1>
				<div className="teams3-wrapper">
					<Row align="top" justify="center">
						{data.allPublications.map(item => (
							<div className="markdown">
								<Col span={8}>
									<div className="teams3-top-title">{item.title}</div>
									<PDFreader pdffile={item.publication.url} />
									<br />
								</Col>
							</div>
						))}
					</Row>
				</div>
			</div>
		</>
	);
};

export default Reports;
