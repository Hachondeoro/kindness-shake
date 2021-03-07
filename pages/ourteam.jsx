/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";
import Teams3 from "@Components/Teams3";

import { Teams30DataSource } from "@Components/data.source";

let isMobile;
enquireScreen(b => {
    isMobile = b;
});
const { location = {} } = typeof window !== "undefined" ? window : {};

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            show: !location.port,
        };
    }

    componentDidMount() {
        enquireScreen(b => {
            this.setState({ isMobile: !!b });
        });

        if (location.port) {
            setTimeout(() => {
                this.setState({
                    show: true,
                });
            }, 500);
        }
    }

    render() {
        const children = [
            <Teams3
                id="Teams3_0"
                key="Teams3_0"
                dataSource={Teams30DataSource}
                isMobile={this.state.isMobile}
            />,
        ];
        return (
            <div
                className="templates-wrapper"
                ref={d => {
                    this.dom = d;
                }}
            >
                {/* 如果不是 dva 2.0 替换成 {children} start */}
                {this.state.show && children}
                {/* 如果不是 dva 2.0 替换成 {children} end */}
            </div>
        );
    }
}
