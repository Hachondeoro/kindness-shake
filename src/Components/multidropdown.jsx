import React from "react";
import { Menu } from "antd";
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { Container } from "reactstrap";

const { SubMenu } = Menu;


class MultiDropdownNavbar extends React.Component {
    state = {
        current: "mail",
    };

    handleClick = e => {
        console.log("click ", e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <div id="multidropdown">
                <Container className="m-auto" id="multidropdown">
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[current]}
                        mode="horizontal"
                        theme="dark"
                    >
                        <Menu.Item key="home" icon={<MailOutlined />}>
                            <Link id="navitem" href="/" passHref>
                                Home
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="aboutus"
                            icon={<SettingOutlined />}
                            title="About us "
                        >
                            <Menu.Item key="story" icon={<AppstoreOutlined />}>
                                <Link href="/ourteam" passHref>
                                    Our Story
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="team" icon={<AppstoreOutlined />}>
                                <Link href="/ourteam" passHref>
                                    Our Team
                                </Link>
                            </Menu.Item>
                            <Menu.Item
                                key="supporters"
                                icon={<AppstoreOutlined />}
                            >
                                <Link href="/ourteam" passHref>
                                    Our supporters
                                </Link>
                            </Menu.Item>
                            <Menu.Item
                                key="achievements"
                                icon={<AppstoreOutlined />}
                            >
                                <Link href="/ourteam" passHref>
                                    Our achievements
                                </Link>
                            </Menu.Item>
                            <Menu.Item
                                key="committee"
                                icon={<AppstoreOutlined />}
                            >
                                <Link href="/ourteam" passHref>
                                    Committee
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="GetInvolved"
                            icon={<SettingOutlined />}
                            title="Get involved"
                        >
                            <Menu.Item
                                key="partnerships"
                                icon={<AppstoreOutlined />}
                            >
                                <Link href="/volunteerwithus" passHref>
                                    Partnerships
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="events" icon={<AppstoreOutlined />}>
                                <Link href="/volunteerwithus" passHref>
                                    Events
                                </Link>
                            </Menu.Item>
                            <Menu.Item
                                key="donatetoday"
                                icon={<AppstoreOutlined />}
                            >
                                <Link href="/volunteerwithus" passHref>
                                    Donate today
                                </Link>
                            </Menu.Item>
                        </SubMenu>

                        <Menu.Item
                            key="socialmedia"
                            icon={<AppstoreOutlined />}
                        >
                            <Link href="/" passHref>
                                Our social media
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="Membership"
                            icon={<SettingOutlined />}
                            title="Membership"
                        >
                            <Menu.Item
                                key="becomemember"
                                icon={<AppstoreOutlined />}
                            >
                                <Link href="/becomeamember" passHref>
                                    Become a member
                                </Link>
                            </Menu.Item>
                            <Menu.ItemGroup title="Be local Buy local">
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.Item
                                key="vendors"
                                icon={<AppstoreOutlined />}
                            >
                                <Link href="/volunteerwithus" passHref>
                                    Vendors
                                </Link>
                            </Menu.Item>
                            <Menu.Item
                                key="becomevendor"
                                icon={<AppstoreOutlined />}
                            >
                                <Link href="/volunteerwithus" passHref>
                                    Become a vendor
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="contactus" icon={<AppstoreOutlined />}>
                            <Link href="/volunteerwithus" passHref>
                                Contact Us
                            </Link>
                        </Menu.Item>
                        <Menu.Item
                            key="volunteerwithus"
                            icon={<AppstoreOutlined />}
                        >
                            <Link href="/volunteerwithus" passHref>
                                Volunteer with Us
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Container>
            </div>
        );
    }
}

export default MultiDropdownNavbar;
