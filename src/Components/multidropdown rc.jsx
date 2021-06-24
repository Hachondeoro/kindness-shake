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
import styles from '@Components/Titles.module.css'

const SubMenu = Menu.SubMenu

const MultiDropdownNavbar = () => {
	const [current, setCurrent] = useState('mail')
	const centerStyle = {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		background: '#3E7678',
		fontWeight: 'bold',
		color: '#FFFFFF',
		fontSize: '1em',
		height: '3.5em'
	}
	const MenuStyle = {
		fontSize: '1em',
		display: 'inline-flex',
		alignItems: 'center',
		marginTop: '20px'
	}
	const mobileStyle = {
		background: '#3E7678',
		fontWeight: 'bold',
		color: '#FFFFFF'
	}
	const submenuStyle = {
		fontWeight: 'normal',
		color: '#FFFFFF'
	}

	return (
		<>
			<div className="d-lg-none">
				<Drawer width="250px" className="d-lg-none">
					<Menu
						style={{ height: '200%', width: 'calc(100% - 1px)' }}
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1', 'sub2']}
						mode="inline"
						theme="dark"
						style={mobileStyle}
					>
						<Menu.Item key="home" icon={<HomeOutlined />}>
							<Link id="navitem" href="/" passHref>
								HOME
							</Link>
						</Menu.Item>
						<SubMenu key="sub1" icon={<TeamOutlined />} title="ABOUT US">
							<Menu.Item key="story" style={submenuStyle}>
								<Link href="/ourstory" passHref>
									Our Story
								</Link>
							</Menu.Item>
							<Menu.Item key="team" style={submenuStyle}>
								<Link href="/ourteam" passHref>
									Our Team
								</Link>
							</Menu.Item>
							<Menu.Item key="projects" style={submenuStyle} >
								<Link href="/ourprojects" passHref>
									Our Projects
								</Link>
							</Menu.Item>
							<Menu.Item key="supporters" style={submenuStyle}>
								<Link href="/oursupporters" passHref>
									Our Supporters
								</Link>
							</Menu.Item>
							<Menu.Item key="awards" style={submenuStyle}>
								<Link href="/ourachievements" passHref>
									Our Achievements
								</Link>
							</Menu.Item>
						</SubMenu>
						<Menu.Item key="festival" icon={<StarOutlined />}>
							<Link href="/festival" passHref>
								KS FESTIVAL
							</Link>
						</Menu.Item>
						<Menu.Item key="socialmedia" icon={<InstagramOutlined />}>
							<Link href="/socialmedia" passHref>
								OUR SOCIAL MEDIA
							</Link>
						</Menu.Item>
						<Menu.Item key="volunteer" icon={<MailOutlined />}>
							<Link href="/volunteer" passHref>
								VOLUNTEER
							</Link>
						</Menu.Item>
						<Menu.Item key="donate" icon={<StarOutlined />}>
							<Link href="/donate" passHref>
								DONATE
							</Link>
						</Menu.Item>
						<SubMenu
							key="sub2"
							icon={<UsergroupAddOutlined />}
							title="MEMBERSHIP"
						>
							<Menu.Item key="becomemember" style={submenuStyle}>
								<Link href="/becomeamember" passHref>
									Become a Member
								</Link>
							</Menu.Item>
							<Menu.Item key="belocalbuylocal" style={submenuStyle}>
								<Link href="/belocalbuylocal" passHref>
									Be Local Buy Local
								</Link>
							</Menu.Item>
						</SubMenu>
						<Menu.Item key="contactus" icon={<MailOutlined />}>
							<Link href="/contactus" passHref>
								CONTACT US
							</Link>
						</Menu.Item>
					</Menu>
				</Drawer>
			</div>
			<div className="d-none d-lg-block multidropdownmenu">
				<Menu
					onClick={e => setCurrent(e.key)}
					selectedKeys={[current]}
					mode="horizontal"
					theme="dark"
					style={centerStyle}
				>
					<Menu.Item
						key="home"
						icon={<HomeOutlined className="navItem" style={MenuStyle} />}
					>
						<Link id="navitem" href="/" passHref>
							HOME
						</Link>
					</Menu.Item>
					<SubMenu
						key="aboutus"
						icon={<TeamOutlined style={MenuStyle} />}
						title="ABOUT US"
					>
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
						<Menu.Item key="projects">
							<Link href="/ourprojects" passHref>
								Our Projects
							</Link>
						</Menu.Item>
						<Menu.Item key="supporters">
							<Link href="/oursupporters" passHref>
								Our Supporters
							</Link>
						</Menu.Item>
						<Menu.Item key="awards">
							<Link href="/ourachievements" passHref>
								Our Achievements
							</Link>
						</Menu.Item>
					</SubMenu>
					<Menu.Item key="festival" icon={<StarOutlined style={MenuStyle} />}>
						<Link href="/festival" passHref>
							KS FESTIVAL
						</Link>
					</Menu.Item>
					<Menu.Item
						key="socialmedia"
						icon={<InstagramOutlined style={MenuStyle} />}
					>
						<Link href="/socialmedia" passHref>
							OUR SOCIAL MEDIA
						</Link>
					</Menu.Item>
					<Menu.Item key="volunteer" icon={<MailOutlined style={MenuStyle} />}>
						<Link href="/volunteer" passHref>
							VOLUNTEER
						</Link>
					</Menu.Item>
					<Menu.Item key="donate" icon={<StarOutlined style={MenuStyle} />}>
						<Link href="/donate" passHref>
							DONATE
						</Link>
					</Menu.Item>
					<SubMenu
						key="Membership"
						icon={<UsergroupAddOutlined style={MenuStyle} />}
						title="MEMBERSHIP"
					>
						<Menu.Item key="becomemember">
							<Link href="/becomeamember" passHref>
								Become a Member
							</Link>
						</Menu.Item>
						<Menu.Item key="belocalbuylocal">
							<Link href="/belocalbuylocal" passHref>
								Be Local Buy Local
							</Link>
						</Menu.Item>
					</SubMenu>
					<Menu.Item key="contactus" icon={<MailOutlined style={MenuStyle} />}>
						<Link href="/contactus" passHref>
							CONTACT US
						</Link>
					</Menu.Item>
				</Menu>
			</div>
		</>
	)
}

export default MultiDropdownNavbar
