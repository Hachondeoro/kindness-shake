import React, { useEffect, useState } from 'react'
import { Layout, Menu, Drawer, Button } from 'antd'
import {
	MailOutlined,
	HomeOutlined,
	TeamOutlined,
	InstagramOutlined,
	UsergroupAddOutlined,
	MenuOutlined
} from '@ant-design/icons'
import Link from 'next/link'
import { Collapse, NavbarBrand, Navbar, Nav, Container } from 'reactstrap'
const { Header, Content, Footer, Sider } = Layout
import classnames from "classnames";


const { SubMenu } = Menu
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

const MultiDropdownNavbar = () => {
	const [current, setCurrent] = useState('mail')
	const [tabIndex, setTabIndex] = useState(0)
	const [collapseOpen, setCollapseOpen] = useState(false)
	const [openKeys, setOpenKeys] = useState(['sub1'])
	const [navbarColor, setNavbarColor] = useState("navbar-transparent");
	const onOpenChange = keys => {
		const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
		if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			setOpenKeys(keys)
		} else {
			setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
		}
	}

	return (
		<>
			<div>
				<Layout>
					<Sider
						breakpoint="lg"
						collapsedWidth="0"
						onCollapse={(collapsed, type) => {
							console.log(collapsed, type)
						}}
						// trigger={null}
					>
					<div className="logo"/>
						<Menu
							mode="inline"
							openKeys={openKeys}
							onOpenChange={onOpenChange}
							// style={{ width: '100%' }}
							theme="dark"
						>
							<Menu.Item key="home" icon={<HomeOutlined />}>
								<Link id="navitem" href="/" passHref>
									Home
								</Link>
							</Menu.Item>
							<SubMenu key="sub1" icon={<TeamOutlined />} title="About us ">
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
								key="sub2"
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
						
					</Sider>
				</Layout>
			</div>
			<div>
				{/* <Navbar
					className={classnames('fixed-top', navbarColor)}
					id="navbar-main"
					expand="lg"
				>
					<Collapse isOpen={collapseOpen}>
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
				</Navbar> */}
			</div>
		</>
	)
}

export default MultiDropdownNavbar
