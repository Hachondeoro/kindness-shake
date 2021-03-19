import React, { useEffect, useState } from 'react'
import { Layout, Menu, Button } from 'antd'
import {
	MailOutlined,
	HomeOutlined,
	TeamOutlined,
	InstagramOutlined,
	UsergroupAddOutlined,
	StarOutlined
} from '@ant-design/icons'
import Link from 'next/link'
import Drawer from 'rc-drawer'
import { Container } from 'reactstrap'

const SubMenu = Menu.SubMenu

const MultiDropdownNavbar = () => {
	const [current, setCurrent] = useState('mail')

	return (
		<>
			<div className="d-lg-none">
				<Drawer width="250px" className="d-lg-none">
					<Menu
						style={{ height: '200%', width: 'calc(100% - 1px)' }}
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						mode="inline"
						theme="dark"
					>
						<Menu.Item key="home" icon={<HomeOutlined />}>
							<Link id="navitem" href="/" passHref>
								Home
							</Link>
						</Menu.Item>
						<SubMenu key="sub1" icon={<TeamOutlined />} title="About us ">
							<Menu.Item key="story">
								<Link href="/ourstory" passHref>
									Our Story
								</Link>
							</Menu.Item>
							<Menu.Item key="team">
								<Link href="/ourteam" passHref>
									Our Team
								</Link>
							</Menu.Item>
							<Menu.Item key="supporters">
								<Link href="/oursupporters" passHref>
									Our supporters
								</Link>
							</Menu.Item>
							<Menu.Item key="awards">
								<Link href="/ourawards" passHref>
									Our awards
								</Link>
							</Menu.Item>
							<Menu.Item key="projects">
								<Link href="/ourprojects" passHref>
									Our projects
								</Link>
							</Menu.Item>
						</SubMenu>
						<Menu.Item key="socialmedia" icon={<InstagramOutlined />}>
							<Link href="/socialmedia" passHref>
								Our social media
							</Link>
						</Menu.Item>
						<Menu.Item key="volunteer" icon={<MailOutlined />}>
							<Link href="/volunteer" passHref>
								Volunteer
							</Link>
						</Menu.Item>
						<Menu.Item key="donate" icon={<StarOutlined />}>
							<Link href="/donate" passHref>
								Donate
							</Link>
						</Menu.Item>
						<SubMenu
							key="sub2"
							icon={<UsergroupAddOutlined />}
							title="Membership"
						>
							<Menu.Item key="becomemember">
								<Link href="/becomeamember" passHref>
									Become a member
								</Link>
							</Menu.Item>
							<Menu.Item key="belocalbuylocal">
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
					</Menu>
				</Drawer>
			</div>
			<div className="d-none d-lg-block m-auto" id="multidropdown">
				<Container className="m-auto" id="multidropdown">
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
							<Menu.Item key="story">
								<Link href="/ourstory" passHref>
									Our Story
								</Link>
							</Menu.Item>
							<Menu.Item key="team">
								<Link href="/ourteam" passHref>
									Our Team
								</Link>
							</Menu.Item>
							<Menu.Item key="supporters">
								<Link href="/oursupporters" passHref>
									Our supporters
								</Link>
							</Menu.Item>
							<Menu.Item key="awards">
								<Link href="/ourawards" passHref>
									Our awards
								</Link>
							</Menu.Item>
							<Menu.Item key="projects">
								<Link href="/ourprojects" passHref>
									Our projects
								</Link>
							</Menu.Item>
						</SubMenu>
						<Menu.Item key="socialmedia" icon={<InstagramOutlined />}>
							<Link href="/socialmedia" passHref>
								Our social media
							</Link>
						</Menu.Item>
						<Menu.Item key="volunteer" icon={<MailOutlined />}>
							<Link href="/volunteer" passHref>
								Volunteer
							</Link>
						</Menu.Item>
						<Menu.Item key="donate" icon={<StarOutlined />}>
							<Link href="/donate" passHref>
								Donate
							</Link>
						</Menu.Item>
						<SubMenu
							key="Membership"
							icon={<UsergroupAddOutlined />}
							title="Membership"
						>
							<Menu.Item key="becomemember">
								<Link href="/becomeamember" passHref>
									Become a member
								</Link>
							</Menu.Item>
							<Menu.Item key="belocalbuylocal">
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
					</Menu>
				</Container>
			</div>
		</>
	)
}

export default MultiDropdownNavbar
