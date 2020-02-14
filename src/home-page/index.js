import css from './index.css';
import React, { Component } from 'react';
import RippleManager from '../ripple';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        
        this.circle = React.createRef();
        this.title = React.createRef();
        this.subtitle = React.createRef();
    }

    componentDidMount() {
        setTimeout(() => {
            this.circle.current.style.transform = "scale(1)";
            this.circle.current.style.opacity = "1";
            setTimeout(() => {
                this.title.current.style.transform = "translateY(0px)";
                this.title.current.style.opacity = "1";
                setTimeout(() => {
                    this.subtitle.current.style.transform = "translateY(0px)";
                    this.subtitle.current.style.opacity = "1";
                }, 600);
            }, 800);
        }, 800);
    }

    render() {
        return (
            <div className={"main-page-wrap"}>
                <div className={"drawing-wrap"}>
                    <img src="https://static.wixstatic.com/media/5b2d93_7b0470edb4b84417885d565dffc55593~mv2_d_3506_2480_s_4_2.jpg/v1/crop/x_11,y_0,w_3479,h_2018/fill/w_1938,h_1126,al_c,q_90,usm_2.00_1.00_0.00/Option1.webp" />
                </div>
                <div className={"mp-logo-wrap"}>
                    <p className={"mp-logo-title"} ref={this.title}>terrarossa project</p>
                    <p className={"mp-logo-subtitle"} ref={this.subtitle}>Design Consultants</p>
                    <div className={"mp-logo-circle-wrap"}>
                        <div className={"mp-logo-circle"} ref={this.circle}></div>
                    </div>
                </div>
            </div>
        )
    }

}