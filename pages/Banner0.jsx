import React from "react";
import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import { isImg } from "./utils";
import Image from 'next/image'

class Banner extends React.PureComponent {
    render() {
        const { ...currentProps } = this.props;
        const { dataSource } = currentProps;
        delete currentProps.dataSource;
        delete currentProps.isMobile;
        return (
            <div {...currentProps} {...dataSource.wrapper}>
                <QueueAnim
                    key="QueueAnim"
                    type={["bottom", "top"]}
                    delay={200}
                    {...dataSource.textWrapper}
                >
                    <div key="title" {...dataSource.title}>
                        {typeof dataSource.title.children === "string" &&
                            dataSource.title.children.match(isImg) ? (
                            <Image
                                src={dataSource.title.logo}
                                width="192"
                                height="192"
                                alt="img"
                            />
                        ) : (
                            dataSource.title.children
                        )}
                    </div>
                    <div key="content" {...dataSource.content}>
                        <h2 style={{ whiteSpace: "pre-line", color: "white" }}>
                            {dataSource.content.children}
                        </h2>
                    </div>
                    <Button ghost key="button" {...dataSource.button}>
                        {dataSource.button.children}
                    </Button>
                </QueueAnim>
                <TweenOne
                    animation={{
                        y: "-=100",
                        yoyo: true,
                        repeat: -1,
                        duration: 1000,
                    }}
                    className="banner0-icon"
                    key="icon"
                >
                    <DownOutlined />
                </TweenOne>
            </div>
        );
    }
}
export default Banner;
