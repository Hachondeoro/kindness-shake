import { HomeOutlined, IdcardOutlined, UserOutlined } from "@ant-design/icons";
import { request } from "@Components/DatoCMS/datocms";
import { fadeinImages } from "@Components/gsap/gsapComponents";
import styles from "@Components/Titles.module.css";
import { Button, Col, Row } from "antd";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // pure gsap
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { Tween, ScrollTrigger} from "react-gsap";
import ReactMarkdown from "react-markdown";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

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
			allBelocalbuylocalSponsors {
				discount
				logo {
					url
				}
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

	// useEffect(() => {
	// 	fadeinImages(".box");
	// 	ScrollTrigger.refresh(true);
	// 	// ScrollTrigger.getAll().forEach(t => t.kill());
	// }, []);

	return (
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
								<br></br>
								<br></br>
								<br></br>
								<h2>Be a part of Kindness Shake in 2021!</h2>
								<br></br>
								<div className={styles.subtitle}>
									To have access to membership card please sign up to this website and complete the payment.
								</div>
								<br></br>
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
								<br></br>
								<br></br>
								<Button onClick={index => setTabIndex(1)} type="primary" shape="round" size="large">
									Register now!
								</Button>
								<br></br>
								<br></br>
								<h2>Membership benefits</h2>
								<div className="m-auto" style={{ whiteSpace: "pre-wrap" }}>
									<Col xs={{ span: 22 }} sm={{ span: 8 }} className="m-auto" align="middle" justify="center">
										<div className="markdown membershipbenefits">
											<ReactMarkdown source={`${data.membershipContent.content}`} />
										</div>
									</Col>
								</div>
								<br></br>
							</div>
							<h2>Our partners</h2>
							<Col xs={{ span: 24 }} lg={{ span: 16 }} className="m-auto" align="middle" justify="center">
								<ScrollTrigger start="top bottom-=100px" scrub={0.5}>
									<div class="container">
										<Tween from={{ y: "100px", opacity:0}} stagger={0.2} ease="elastic.out(0.2, 0.1)">
											{data.allBelocalbuylocalSponsors.map(item => (
												<div className="mx-1 mt-3 box ">
													<img src={item.logo.url} width="100em" alt="img" style={{ borderRadius: "10%" }} />
													<div className={styles.discount}>{item.discount} discount</div>
												</div>
											))}
										</Tween>
									</div>
								</ScrollTrigger>
							</Col>
						</div>
					</div>
				</TabPanel>
				<TabPanel>
					<div style={membershiphome}>
						{iosdevice ? (
							<div>
								<div className="mb-6">
									<br></br>
									<br></br>
									<br></br>
									<br></br>
									Our membership page is powered by Wild Apricot membership system
								</div>
								<Col xs={{ span: 20 }} md={{ span: 12 }} className="m-auto" align="middle" justify="center">
									<img
										src="/static/img/wild-apricot-logo.png"
										alt="wildapricotlogo"
										width="100%"
										height="100%"
										className="mt-5"
									/>
								</Col>
								<br></br>
								<div className="m-5">Please press the following button to submit an application form</div>
								<a href="https://ksi.wildapricot.org/widget/membership" rel="noopener noreferrer" target="_blank">
									<Button type="primary" shape="round" size="large">
										{" "}
										Membership Application form{" "}
									</Button>
								</a>
								<br></br>
								<br></br>
							</div>
						) : (
							<div>
								<iframe
									width="100%"
									height="1000px"
									frameBorder="no"
									src="https://ksi.wildapricot.org/widget/membership"></iframe>
								<br></br>
								<br></br>
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
	);
};

export default Membership;
