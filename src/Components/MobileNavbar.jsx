import React, { useState, useEffect } from 'react'
import { Menu } from 'antd'
import {
	MailOutlined,
	HomeOutlined,
	TeamOutlined,
	InstagramOutlined,
	UsergroupAddOutlined,
	MenuOutlined
} from '@ant-design/icons'
import Link from 'next/link'

const { SubMenu } = Menu

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

const MobileNavbar = () => {
	const [openKeys, setOpenKeys] = useState(['sub1'])

	const onOpenChange = keys => {
		const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
		if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			setOpenKeys(keys)
		} else {
			setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
		}
	}

	return (
		<Menu
			mode="inline"
			openKeys={openKeys}
			onOpenChange={onOpenChange}
			style={{ width: '100%' }}
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
				<Menu.Item key="belocalbuylocal" icon={<UsergroupAddOutlined />}>
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
	)
}

export default MobileNavbar
