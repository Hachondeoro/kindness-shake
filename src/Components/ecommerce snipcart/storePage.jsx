import Head from "next/head";
import Product from "./Product";
import { SiteClient } from "datocms-client";
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { request } from "@Components/DatoCMS/datocms";
import Image from "next/image";

const MYQUERY = `query MyQuery {
  allProducts {
    id
    name
    image {
      url
      title
      alt
    }
    description
    price
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

export default function StorePage({ data }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>My Next.js E-commerce</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://cdn.snipcart.com" />
				<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css" />
			</Head>

			<main className={styles.main}>
				<h1>E-Commerce in Next.js and SnipCart!</h1>

				<div className={styles.grid}>
					{console.log(data)}
					{data.map(item => (
						<>
							<div key={item.id} className={styles.product}>
								<Image src={image.url} alt={item.image.alt} title={item.image.title} height={640} width={640} />
								<h3>{item.name}</h3>
								<p>{item.description}</p>
								<span>${item.price}</span>
								<div>
									<button
										className="snipcart-add-item"
										data-item-id={item.id}
										data-item-image={item.image.url}
										data-item-name={item.name}
										data-item-url="/"
										data-item-price={item.price}>
										Add to Cart
									</button>
								</div>
							</div>
						</>
					))}
				</div>
			</main>
			<script src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js"></script>
			<div
				hidden
				id="snipcart"
				data-config-modal-style="side"
				data-api-key="NmUzYzExMmEtMjQwMC00NTY2LWFjYTEtOGRiOWNiZjlkNjQ4NjM3NzYwOTI5MjM4NTk4MDg2"></div>
		</div>
	);
}
