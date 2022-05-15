import { HomeOutlined, IdcardOutlined, UserOutlined } from "@ant-design/icons";
import { request } from "@Components/DatoCMS/datocms";
import { FadeInImageGrid } from "@Components/gsap/gsapComponents";
import styles from "@Components/Titles.module.css";
import { Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import ReactMarkdown from "react-markdown";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Layout from "@Components/Layout";
import parse from "html-react-parser";

const navmenu = {
	fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
	textAlign: "center",
	background: "#001529",
	color: "white",
};

const membershiphome = {
	textAlign: "center",
	background: "#ffffff",
	color: "black",
};

export async function getStaticProps() {
	const data = await request({
		query: `query MyQuery {
			belocalbuylocalSponsor {
   		 content
  		}
			membershipContent {
				content
			}
		}`,
	});
	return {
		props: { data },
		revalidate: 10,
	};
}

const Membership = ({ data }) => {
	const [tabIndex, setTabIndex] = useState(0);
	function iOS() {
		return (
			["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) ||
			// iPad on iOS 13 detection
			(navigator.userAgent.includes("Mac") && "ontouchend" in document)
		);
	}

	const [iosdevice, setIosdevice] = useState(true);
	const [phone, setPhone] = useState(false);
	useEffect(() => {
		setIosdevice(iOS());
		setPhone(isMobile);
	}, []);

	return (
		<Layout
			pageTitle="Become a member"
			pageDescription="Become a member of this highly successful charity located in Darwin, Northern Territory. With this membership you will have access to countless benefits and you will be supporting the local business and communities"
			keyWords="charity, international student, darwin">
			<div style={navmenu}>
				<Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
					<TabList>
						<Tab>
							<HomeOutlined /> Home
						</Tab>
						<Tab>
							<IdcardOutlined /> Join us
						</Tab>
						<Tab>
							<UserOutlined /> Login
						</Tab>
					</TabList>
					<TabPanel>
						<div style={membershiphome}>
							<div className="home-page-wrapper">
								<div>
									<h2>Be a part of Kindness Shake in 2021!</h2>

									<div className={styles.subtitle}>
										To have access to membership card please sign up to this website and complete the payment.
									</div>

									<Row align="middle" justify="center">
										<Col
											xs={{ span: 20 }}
											sm={{ span: 16 }}
											lg={{ span: 8 }}
											className="m-2"
											align="middle"
											justify="center">
											<img
												src="/static/img/front-card.jpeg"
												alt="frontcard"
												width="100%"
												height="100%"
												className="my-2"
											/>
										</Col>
										<Col
											xs={{ span: 20 }}
											sm={{ span: 16 }}
											lg={{ span: 8 }}
											className="m-2"
											align="middle"
											justify="center">
											<img
												src="/static/img/back-card-blank.jpeg"
												alt="backcard"
												width="100%"
												height="100%"
												className="my-2"
											/>
										</Col>
									</Row>
									<Button onClick={index => setTabIndex(1)} type="primary" shape="round" size="large" className="mb-4">
										Register now!
									</Button>
									<h2>Membership benefits</h2>
									<div className="m-auto" style={{ whiteSpace: "pre-wrap" }}>
										<Col xs={{ span: 22 }} sm={{ span: 8 }} className="m-auto" align="middle" justify="center">
											<div className="markdown membershipbenefits">
												<ReactMarkdown source={`${data.membershipContent.content}`} />
											</div>
										</Col>
									</div>
								</div>
								<h2 className="mt-4">Our partners</h2>
								<Col xs={{ span: 24 }} lg={{ span: 16 }} className="m-auto" align="middle" justify="center">
									<FadeInImageGrid>
										<div class="container">{parse(data.belocalbuylocalSponsor.content)}</div>
									</FadeInImageGrid>
								</Col>
							</div>
						</div>
					</TabPanel>
					<TabPanel>
						<div style={membershiphome}>
							{iosdevice ? (
								<div>
									<div className="mb-6">Our membership page is powered by Wild Apricot membership system</div>
									<Col xs={{ span: 20 }} md={{ span: 12 }} className="m-auto" align="middle" justify="center">
										<img
											src="/static/img/wild-apricot-logo.png"
											alt="wildapricotlogo"
											width="100%"
											height="100%"
											className="mt-5"
										/>
									</Col>

									<div className="m-5">Please press the following button to submit an application form</div>
									<a href="https://ksi.wildapricot.org/widget/membership" rel="noopener noreferrer" target="_blank">
										<Button type="primary" shape="round" size="large">
											{" "}
											Membership Application form{" "}
										</Button>
									</a>
								</div>
							) : (
								<div>
									<iframe
										width="100%"
										height="1000px"
										frameBorder="no"
										src="https://ksi.wildapricot.org/widget/membership"></iframe>
								</div>
							)}
						</div>
					</TabPanel>
					<TabPanel>
						<div style={membershiphome}>
							<iframe
								width="100%"
								height="1000px"
								frameBorder="no"
								src="https://ksi.wildapricot.org/widget/Sys/Profile"></iframe>
						</div>
					</TabPanel>
				</Tabs>
			</div>
		</Layout>
	);
};

export default Membership;
