import React from "react";
import {Col, Row} from "antd";

import StorePage from "@Components/ecommerce/StorePage"
const Store = () => {
	return (
		<>
			<div className="home-page-wrapper">
				<h1 className="text-center m-5">KINDNESS SHAKE Store</h1>
				<div className="teams3-wrapper">
					<StorePage/>
				</div>
			</div>
		</>
	);
};

export default Store;
