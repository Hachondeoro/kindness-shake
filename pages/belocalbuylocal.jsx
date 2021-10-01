import { request } from "@Components/DatoCMS/datocms";
import { FadeInImageGrid } from "@Components/gsap/gsapComponents";
import styles from "@Components/Titles.module.css";
import { Col, Row } from "antd";
import Texty from "rc-texty";
import React from "react";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
	const data = await request({
		query: `query MyQuery {
			allBelocalbuylocalSponsors {
				discount
				logo {
					url
				}
			}
			belocalbuylocalContent {
				content
			}
		}`,
	});
	return {
		props: { data },
		revalidate: 10,
	};
}

const OurSupporters = ({ data }) => {
	return (
		<div className="home-page-wrapper">
			<div className="texty-demo" style={{ marginTop: 64 }}>
				<Texty className={styles.titleBLBL}>Welcome to</Texty>
				<Texty className={styles.titleBLBL}>Be Local Buy Local</Texty>
			</div>
			<div className={styles.descriptionBLBL}>
				Be LOCAL & Buy LOCAL is an initiative aimed to support and establish an enduring relationship between local
				businesses and local community
			</div>
			<h1 className="text-center m-5">How Be Local Buy Local works</h1>

			<Col xs={{ span: 20 }} lg={{ span: 8 }} className="m-auto" align="middle" justify="center">
				<div className="markdown">
					<ReactMarkdown source={`${data.belocalbuylocalContent.content}`} />
				</div>
			</Col>

			<Col xs={{ span: 24 }} lg={{ span: 16 }} className="m-auto" align="middle" justify="center">
				<Row align="middle" justify="center">
					{data.allBelocalbuylocalSponsors.map(item => (
						<FadeInImageGrid>
							<div className="mx-1 mt-3 boxNew">
								<img src={item.logo.url} width="120em" alt="img" style={{ borderRadius: "10%" }} />
								<div className={styles.discount}>{item.discount} discount</div>
							</div>
						</FadeInImageGrid>
					))}
				</Row>
			</Col>
		</div>
	);
};

export default OurSupporters;
