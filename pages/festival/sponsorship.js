import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import VolunteerIntro from '@Components/Festival.md'

import { Row, Col, Button } from 'antd'
import { Projects } from '@Components/data.js'
import { Parallax } from 'rc-scroll-anim'
import styles from '@Components/Titles.module.css'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
import useWindowSize from 'react-use/lib/useWindowSize'

const OurProjects = () => {
	const [numPages, setNumPages] = useState(null)
	const [pageNumber, setPageNumber] = useState(1)
	const { width, height } = useWindowSize()

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages)
		setPageNumber(1)
	}

	function changePage(offset) {
		setPageNumber(prevPageNumber => prevPageNumber + offset)
	}

	function previousPage() {
		changePage(-1)
	}

	function nextPage() {
		changePage(1)
	}

	return (
		<>
			<div className="festivalbanner">
				<img
					src="/static/img/festival/ks-cover.png"
					width="100%"
					height="100%"
					alt="img"
				/>
			</div>
			<div className="markdown  mx-3">
				<Row align="middle" justify="center">
					<Col
						xs={{ span: 24 }}
						lg={{ span: 12 }}
						align="middle"
						justify="center"
					>
						<h1 style={{textAlign:"center"}}>SPONSORSHIP</h1>
					</Col>
				</Row>
			</div>

			<div>
				<Col
					xs={{ span: 24 }}
					lg={{ span: 24 }}
					className="m-auto"
					align="middle"
					justify="center"
				>
					<Document
						file="/festivalsponsorship_Optimized.pdf"
						onLoadSuccess={onDocumentLoadSuccess}
					>
						{width < 500 ? (
							<Page pageNumber={pageNumber} width="360" />
						) : (
							<Page pageNumber={pageNumber} width="600" />
						)}
					</Document>
					<div>
						<p>
							Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
						</p>

						<Button
							type="primary"
							shape="round"
							size="large"
							ghost
							style={{ borderColor: '#ccc' }}
							disabled={pageNumber <= 1}
							onClick={previousPage}
						>
							{'<'}
						</Button>
						<Button
							type="primary"
							shape="round"
							size="large"
							ghost
							style={{ borderColor: '#ccc' }}
							disabled={pageNumber >= numPages}
							onClick={nextPage}
						>
							{'>'}
						</Button>
						<br></br>
						<Button
							type="primary"
							shape="round"
							size="large"
							ghost
							style={{ borderColor: '#ccc' }}
						>
							<a
								href="/festivalsponsorship_Optimized.pdf"
								target="_blank"
							>
								Download PDF
							</a>
						</Button>
						{/* <button
							type="button"
							disabled={pageNumber >= numPages}
							onClick={nextPage}
						>
							Next
						</button> */}
					</div>
				</Col>
			</div>
			<div className="markdown">
				<Row align="middle" justify="center">
					<h1>Proudly sponsored by</h1>
				</Row>
				<Row align="middle" justify="center">
					<br></br>
					<Col
						xs={{ span: 12 }}
						lg={{ span: 6 }}
						align="middle"
						justify="center"
					>
						<img
							src="/static/img/festival/darwinwaterfront.jpg"
							width="100%"
							alt="darwinwaterfront"
						/>
					</Col>

					<Col
						xs={{ span: 12 }}
						lg={{ span: 6 }}
						align="middle"
						justify="center"
					>
						<img
							src="/static/img/festival/ntg-logo.jpg"
							width="100%"
							alt="ntg-logo"
						/>
					</Col>
				</Row>
				<br></br>
			</div>
		</>
	)
}

// CSS to focus on the img on mobile
// CSS to use another footer on laptop

export default OurProjects
