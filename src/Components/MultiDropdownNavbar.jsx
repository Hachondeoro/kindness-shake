import React, { useRef, forwardRef,useEffect, useState } from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import { Menu, Drawer, Button } from 'antd'
import {
	MailOutlined,
	HomeOutlined,
	TeamOutlined,
	InstagramOutlined,
	UsergroupAddOutlined,
	MenuOutlined
} from '@ant-design/icons'

// reactstrap components
import { Collapse, NavbarBrand, Navbar, Nav, Container } from 'reactstrap'

const { SubMenu } = Menu

const MultiDropdownNavbar = ({ children }) => {
	const [navbarColor, setNavbarColor] = React.useState('navbar-transparent')
	const [bodyClick, setBodyClick] = React.useState(false)
	const [collapseOpen, setCollapseOpen] = React.useState(false)
	const [current, setCurrent] = useState('mail')
	const [tabIndex, setTabIndex] = useState(0)

	React.useEffect(() => {
		const updateNavbarColor = () => {
			if (
				document.documentElement.scrollTop > 699 ||
				document.body.scrollTop > 699
			) {
				setNavbarColor('black')
			} else if (
				document.documentElement.scrollTop < 700 ||
				document.body.scrollTop < 700
			) {
				setNavbarColor('navbar-transparent')
			}
		}

		window.addEventListener('scroll', updateNavbarColor)
		return function cleanup() {
			window.removeEventListener('scroll', updateNavbarColor)
		}
	})
	return (
		<>
			{bodyClick ? (
				<div
					id="bodyClick"
					onClick={() => {
						document.documentElement.classList.toggle('nav-open')
						setBodyClick(false)
						setCollapseOpen(false)
					}}
				/>
			) : null}
			<Navbar
				className={classnames('fixed-top', navbarColor)}
				id="navbar-main"
				expand="lg"
			>
				<Container>
					<div className="navbar-translate">
						<button
							type="button"
							onClick={() => {
								document.documentElement.classList.toggle('nav-open')
								setBodyClick(true)
								setCollapseOpen(true)
							}}
						>
							<span className="navbar-toggler-bar bar1"></span>
							<span className="navbar-toggler-bar bar2"></span>
							<span className="navbar-toggler-bar bar3"></span>
						</button>
					</div>
					<Collapse navbar isOpen={collapseOpen}>
						<Menu
							onClick={e => setCurrent(e.key)}
							selectedKeys={[current]}
							mode="horizontal"
							theme="dark"
							className="m-auto"
						>
							<Menu.Item key="home" icon={<HomeOutlined />}>
								<Link id="navitem" href="/" passHref>
									Home
								</Link>
							</Menu.Item>
							<SubMenu key="aboutus" icon={<TeamOutlined />} title="About us ">
								<Menu.Item key="story" icon={<TeamOutlined />}>
									<Link href="/ourstory" passHref>
										Our Story
									</Link>
								</Menu.Item>
								<Menu.Item key="team" icon={<TeamOutlined />}>
									<Link href="/ourteam" passHref>
										Our Team
									</Link>
								</Menu.Item>
								<Menu.Item key="supporters" icon={<TeamOutlined />}>
									<Link href="/oursupporters" passHref>
										Our supporters
									</Link>
								</Menu.Item>
								<Menu.Item key="achievements" icon={<TeamOutlined />}>
									<Link href="/ourachievements" passHref>
										Our achievements
									</Link>
								</Menu.Item>
							</SubMenu>
							<Menu.Item key="socialmedia" icon={<InstagramOutlined />}>
								<Link href="/socialmedia" passHref>
									Our social media
								</Link>
							</Menu.Item>
							<SubMenu
								key="Membership"
								icon={<UsergroupAddOutlined />}
								title="Membership"
							>
								<Menu.Item key="becomemember" icon={<UsergroupAddOutlined />}>
									<Link href="/becomeamember" passHref>
										Become a member
									</Link>
								</Menu.Item>
								<Menu.Item
									key="belocalbuylocal"
									icon={<UsergroupAddOutlined />}
								>
									<Link href="/belocalbuylocal" passHref>
										Be Local Buy Local
									</Link>
								</Menu.Item>
							</SubMenu>
							<Menu.Item key="contactus" icon={<MailOutlined />}>
								<Link href="/contactus" passHref>
									Contact Us
								</Link>
							</Menu.Item>
							<Menu.Item key="volunteerwithus" icon={<MailOutlined />}>
								<Link href="/volunteerwithus" passHref>
									Volunteer with Us
								</Link>
							</Menu.Item>
						</Menu>
					</Collapse>
				</Container>
			</Navbar>
			{children}
		</>
	)
}

export default MultiDropdownNavbar
