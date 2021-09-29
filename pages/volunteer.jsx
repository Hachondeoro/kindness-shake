/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { Form, Select } from "antd";
import { Button } from "reactstrap";
import { Row, Col } from "antd";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import ReactMarkdown from "react-markdown";
import VolunteerIntro from "@Components/VolunteerIntro.md";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import * as emailjs from "emailjs-com";
import { Container } from "reactstrap";

const { GoogleSpreadsheet } = require("google-spreadsheet");

const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 8 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 16 },
	},
};

const validateMessages = {
	required: "${label} is required!",
	types: {
		email: "${label} is not a valid email!",
		number: "${label} is not a valid number!",
	},
	number: {
		range: "${label} must be between ${min} and ${max}",
	},
};

const { Option } = Select;

const VolunteerForm = props => {
	const [form] = Form.useForm();
	const { width, height } = useWindowSize();

	return (
		<>
			<div className="home-page-wrapper">
				<Row align="middle" justify="center">
					<Col xs={{ span: 20 }} lg={{ span: 8 }} className="m-2" align="left" justify="center">
						<div className="markdown">
							<ReactMarkdown source={`${VolunteerIntro}`} />
						</div>
						<br></br>
						<br></br>
					</Col>
					<Col xs={{ span: 20 }} lg={{ span: 8 }} className="m-2 volunteerImages" align="middle" justify="center">
						<img src="/static/img/volunteer/volunteer1.jpg" alt="volunteer1" className="mt-2" />
						<img src="/static/img/volunteer/volunteer2.jpg" alt="volunteer2" className="mt-2" />
						<img src="/static/img/volunteer/volunteer3.jpg" alt="volunteer3" className="mt-2 mb-4" />
					</Col>
				</Row>
				<Row>
					<Col xs={{ span: 20 }} lg={{ span: 20 }} className="m-auto" align="center" justify="center">
						<Button style={{ fontSize: "3.5em", backgroundColor: "#386B6C", color: "#fff" }}>
							<a
								href="https://app.betterimpact.com/Application?OrganizationGuid=99f2b048-0aba-4317-ac86-36de26c132c0&ApplicationFormNumber=1"
								target="_blank">
								<p style={{ color: "#fff" }}>REGISTER HERE</p>
							</a>
						</Button>
						<br></br>
						<br></br>
						<br></br>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default VolunteerForm;
