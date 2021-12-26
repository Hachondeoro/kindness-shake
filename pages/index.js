/* eslint-disable react/jsx-no-comment-textnodes */
import {DownOutlined} from "@ant-design/icons";
import {Feature60DataSource} from "@Components/data.source";
import {request} from "@Components/DatoCMS/datocms";
import Feature6 from "@Components/Feature6";
import styles from "@Components/Titles.module.css";
import {Col, Row} from "antd";
import {gsap} from "gsap"; // pure gsap
import Link from "next/link";
import TweenOne from "rc-tween-one";
import React, {useEffect, useRef, useState} from "react";
import {Button} from "react-bootstrap";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import {Alert} from "reactstrap";

const MYQUERY = `query MyQuery {
	allInstagrams {
		url
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
const Home = ({ data }) => {
	let imageRef = useRef(null);
	let textRef = useRef(null);
	const [showConfetti, setshowConfetti] = useState(false);
	const { width, height } = useWindowSize();
	const [visible, setVisible] = useState(false);
	const onFinish = e => {
		setshowConfetti(true);
		setVisible(true);
		setTimeout(() => {
			setVisible(false);
		}, 4000);
	};

	// prettier-ignore
	useEffect(() => {
		gsap.to(".box", { duration: 1, rotation: 360, y: 100, stagger: 0.5 });
		var tl = gsap.timeline();
		tl.from(imageRef,{ opacity: 0, scale: 0.2,},0.75)
  		.from(textRef,{ opacity: 0, scale: 0.2,},1.5);
	}, []);

	return (
		<>
			<div className="bannerHome">
				<Col xs={{ span: 24 }} lg={{ span: 10 }} className="m-auto" align="middle" justify="center">
					<div className="banner-logo">
						<img src="/static/img/banner/Web-banner-logo.png" width="80%" alt="ks-logo" ref={img => (imageRef = img)} />
					</div>
					<div className="banner-text">
						<img src="/static/img/banner/Web-banner-text.png" width="80%" alt="ks-text" ref={img => (textRef = img)} />
					</div>
					<TweenOne
						animation={{
							y: "-=50",
							yoyo: true,
							repeat: -1,
							duration: 1000,
						}}
						className="banner0-icon"
						key="icon">
						<DownOutlined
							style={{
								color: "white",
							}}
						/>
					</TweenOne>
				</Col>
			</div>
			<Col xs={{ span: 23 }} lg={{ span: 12 }} className="m-auto" align="middle" justify="center">
				<div className={styles.contentHome}>
					The Kindness Shake (KS) is a community and student-led initiative, launched during the outbreak of the
					COVID-19 pandemic. It supports and focuses on international students, migrants, refugees, and temporary visa
					holders who are experiencing financial difficulties. This partnership between international student
					volunteers, education and training providers, local businesses, multi-cultural groups, and Governments, aims
					to ensure that no one in the NT affected by the crisis goes to bed without a meal and a kind and genuine
					smile. 
				</div>
				<Link href="/ourstory" passHref>
					<Button type="primary">LEARN MORE</Button>
				</Link>
			</Col>
			<br></br>
			{/* <Row justify="center">
				<div className="festivalbanner">
					<img src="/static/img/festival/ks-cover.png" width="100%" height="100%" alt="img" />
				</div>
				<Button
					type="primary"
					shape="round"
					size="large"
					ghost
					style={{
						borderColor: "#ccc",
					}}>
					<Link href="/festival" passHref>
						CHECKOUT THE KS FESTIVAL!
					</Link>
				</Button>
			</Row> */}
			<div className="vision">
				<Row justify="center">
					<Col xs={{ span: 23 }} lg={{ span: 8 }} align="middle" justify="center">
						<br></br>
						<br></br>
						<h1 className={styles.titleHome}>OUR VISION</h1>
						<div className={styles.contentHome}>
							Enhancing the wellbeing of international students in the Northern Territory through social and cultural
							engagement, humanitarian services and employability improvement while showcasing the importance of
							multiculturalism and international communities in Australia.
						</div>
						<br></br>
					</Col>
					<Col xs={{ span: 23 }} lg={{ span: 8 }} align="middle" justify="center">
						<br></br>
						<br></br>
						<h1 className={styles.titleHome}>OUR MISSION</h1>
						<div className={styles.contentHome}>
							Our mission is to provide any form of support, not limited to free meals and employability, but also
							social engagement and welfare/well-being improvement of international students and migrants in the
							Northern Territory. This will be achieved through our current initiatives and future goals.
						</div>
						<br></br>
					</Col>
				</Row>
				<Feature6 id="Feature6_0" key="Feature6_0" dataSource={Feature60DataSource} />
			</div>
			{/* <div className="home-page-wrapper">
				<h1 className="text-center m-3">Social Media</h1>
				<Col xs={{ span: 20 }} lg={{ span: 16 }} className="m-auto" align="middle" justify="center">
					<Row align="top" justify="center">
						{data.allInstagrams.slice(0, 3).map(item => (
							<FadeInImageSocialMedia>
								<div key={item.post}>
									<InstagramEmbed
										url={item.url}
										clientAccessToken="821751731773259|69972d556b438c02d3cd032878cfdbee"
										maxWidth={420}
										hideCaption={true}
										containerTagName="div"
										protocol=""
										injectScript
										onLoading={() => {}}
										onSuccess={() => {}}
										onAfterRender={() => {}}
										onFailure={() => {}}
									/>
								</div>
							</FadeInImageSocialMedia>
						))}
					</Row>
				</Col>
			</div> */}
			<Col xs={{ span: 20 }} lg={{ span: 12 }} className="m-auto" align="middle" justify="center">
				<div className={styles.titleHome}>
					<br></br>
					Take part in empowering whole communities
					<br></br>
					<br></br>
				</div>
				<div>
					<Col xs={{ span: 20 }} lg={{ span: 8 }} className="m-auto" align="middle" justify="center">
						<form action="https://www.paypal.com/donate" method="post" target="_top">
							<input type="hidden" name="hosted_button_id" value="2HH49PTBMLK48" />
							<input
								type="image"
								src="https://icon-library.com/images/paypal-donate-icon/paypal-donate-icon-0.jpg"
								border="0"
								name="submit"
								title="PayPal - The safer, easier way to pay online!"
								alt="Donate with PayPal button"
								height="140em"
							/>
							<img alt="" border="0" src="https://www.paypal.com/en_AU/i/scr/pixel.gif" width="1" height="1" />
						</form>
					</Col>
					<br></br>
					<br></br>
				</div>
				{showConfetti ? (
					<Confetti
						width={width}
						height={height}
						numberOfPieces={1000}
						gravity={0.08}
						recycle={false}
						onConfettiComplete={() => setshowConfetti(false)}
					/>
				) : null}
				<div className="newsletter">
					<div className={styles.titleHome}>Subscribe to our Newsletter!</div>
					<div id="mc_embed_signup">
						<form
							action="https://kindness-shake.us17.list-manage.com/subscribe/post?u=cc4ef06a3def8acf17446188e&amp;id=79ac613722"
							method="post"
							id="mc-embedded-subscribe-form"
							name="mc-embedded-subscribe-form"
							className="validate"
							// target="_blank"
							onSubmit={e => {
								onFinish(e);
							}}>
							<div id="mc_embed_signup_scroll" className="my-2">
								<br></br>
								<input
									type="text"
									name="FNAME"
									class="form-control"
									style={{ width: "20em" }}
									placeholder="First Name"
									required
								/>
								<br></br>
								<input
									type="text"
									name="LNAME"
									class="form-control"
									style={{ width: "20em" }}
									placeholder="Last Name"
									required
								/>
								<br></br>
								<input
									type="email"
									name="EMAIL"
									class="form-control"
									id="mce-EMAIL"
									style={{ width: "20em" }}
									placeholder="Email Address"
									required
								/>
							</div>
							<Button type="submit" className="my-3">
								SUBSCRIBE
							</Button>
						</form>
						<Alert color="success" isOpen={visible}>
							Thank you for subscribing!
						</Alert>
					</div>
				</div>
			</Col>
		</>
	);
};

export default Home;
