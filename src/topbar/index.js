import css from './index.css';
import React, { Component } from 'react';
import RippleManager from '../ripple';

export default class TopBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sliderPosition: 0,
            imageHeight: 0,
            scrolled: false,
            darkened: false,
            menuExpanded: false
        }

        window.onpopstate = ev => {
            if (ev.state == null) {
                this.setSlider(0);
            }
            else if (typeof ev.state == "string") {
                if (ev.state.split("")[1] == "0") {
                    props.system.mainPage.current.card1.current.open();
                }
                else if (ev.state.split("")[1] == "1") {
                    props.system.mainPage.current.card2.current.open();
                }
                else {
                    props.system.mainPage.current.card3.current.open();
                }
            }
            else if (ev.state == this.state.sliderPosition) {
                this.state.buttonFunction();
            }
            else {
                this.setSlider(ev.state);
            }
        };
        
        window.onresize = () => {
            this.forceUpdate();
        }

        this.backgroundRef = React.createRef();
        this.menuButton = React.createRef();

        this.buttonWrap = React.createRef();
        this.wrap = React.createRef();

        /*this.props.system.setScrollFunction(
            () => {
                let height = document.getElementsByClassName("showoff-background")[0].offsetHeight;
                if (this.state.darkened) return;
                this.backgroundRef.current.style.boxShadow = ((document.getElementById("root").scrollTop / height)) > 1 ? "2px 2px 15px -4px #a1a1a1" : "none";
                this.backgroundRef.current.style.opacity = ((document.getElementById("root").scrollTop / height)) <= 1 ? ((document.getElementById("root").scrollTop / height)) : 1;
            },
            document.getElementById("root")
        )*/
    }

    setShadow(visibility) {
        if (visibility) {
            this.wrap.current.style.boxShadow = "0px 0px 8px -3px #444";
        }
        else {
            this.wrap.current.style.boxShadow = "none";
        }
    }

    setSliderPosition(p) {
        this.setSlider(p);
        if (this.state.menuExpanded) {
            this.expandMenu();
        }
    }

    hideButtons(t) {
        if (window.innerWidth > 800) {
            if (t) {
                document.getElementsByClassName("top-bar-button-wrap")[0].style.opacity = "0";
            }
            else {
                document.getElementsByClassName("top-bar-button-wrap")[0].style.opacity = "1";
            }
        }
        else {
            if (this.state.menuExpanded) {
                this.expandMenu();
            }
            if (t) {
                document.getElementsByClassName("top-bar-button-expand")[0].style.opacity = "0";
            }
            else {
                document.getElementsByClassName("top-bar-button-expand")[0].style.opacity = "1";
            }
        }
    }

    setSlider(p) {
        this.props.system.switchPage(p);

        if (p != this.state.sliderPosition) {
            this.setState({
                sliderPosition: p
            });
        };
    }

    componentDidMount() {
        RippleManager.setUp();
        /*setTimeout(() => {
            this.setState({
                imageHeight: document.getElementsByClassName("showoff-background")[0].offsetHeight - 82
            });
        }, 250);*/
    }
    
    expandMenu() {
        if (this.state.menuExpanded) {
            this.wrap.current.style.height = "82px";
            this.wrap.current.style.borderBottom = "none";
        }
        else {
            this.wrap.current.style.height = "auto";
            this.wrap.current.style.borderBottom = "1px solid #aaa";
        }
        this.menuButton.current.style.transform = "rotate(" + (this.state.menuExpanded ? 0 : 90) + "deg)";
        this.setState((prevState) => {
            return {
                menuExpanded: !prevState.menuExpanded
            }
        })
    }

    setCloseButtonFunction(f) {

        this.setState({
            buttonFunction: f
        });

    }

    render() {

        const menuStyle = {
            opacity: this.state.menuExpanded ? "0" : "1"
        }

        const clearStyle = {
            opacity: this.state.menuExpanded ? "1" : "0"
        }

        const buttons = window.innerWidth >= 700 ? (
            <div ref={this.buttonWrap} className="top-bar-button-wrap">
                <button className={"top-bar-button" + (this.state.sliderPosition == 0 ? " selected" : "")} onClick={() => {this.setSliderPosition(0)}}>Home</button>
                <button className={"top-bar-button" + (this.state.sliderPosition == 1 ? " selected" : "")} onClick={() => {this.setSliderPosition(1)}}>Profile</button>
                <button className={"top-bar-button" + (this.state.sliderPosition == 2 ? " selected" : "")} onClick={() => {this.setSliderPosition(2)}}>Projects</button>
                <button className={"top-bar-button" + (this.state.sliderPosition == 3 ? " selected" : "")} onClick={() => {this.setSliderPosition(3)}}>Services</button>
                <button className={"top-bar-button" + (this.state.sliderPosition == 4 ? " selected" : "")} onClick={() => {this.setSliderPosition(4)}}>Contact</button>
                {/*<div className="top-bar-button-slider" style={{transform: "translateX(" + ((this.state.sliderPosition * 116) + 30) + "px)"}}></div>*/}
            </div>
        ) : (
            <div ref={this.buttonWrap} className="top-bar-button-wrap">
                <button className="top-bar-button-expand" onClick={() => {this.expandMenu()}}>
                    <div className="tbbe-icon-wrap" ref={this.menuButton}>
                        <i className="material-icons" style={menuStyle}>menu</i>
                        <i className="material-icons" style={clearStyle}>clear</i>
                    </div>
                    {
                        this.state.menuExpanded ? (
                            <p>Close Menu</p>
                        ) : (
                            <p>Open Menu</p>
                        )
                    }
                </button>
            </div>
        );

        return (
            <div className="top-bar-wrap" ref={this.wrap}>
            <div className="top-bar-background" ref={this.backgroundRef}></div>
                <div className="top-bar-inner">
                    <div className="top-bar-inner-foreground">
                        {/*<div className="top-bar-logo-back-wrap">
                            <button className="top-bar-back-button" onClick={() => {window.history.back()}}><i className="material-icons">clear</i></button>
                            <svg id="background-logo-background-wrap">
                                <defs>
                                    <filter id="f1" x="0" y="0" width="150%" height="150%">
                                        <feColorMatrix in="SourceGraphic"
                                            type="matrix"
                                            values="0 0 0 0 0
                                                    0 0 0 0 0
                                                    0 0 0 0 0
                                                    0 0 0 0.07 0" result="alphaOut"/>
                                        <feOffset result="offOut" in="alphaOut" dx="1" dy="1" />
                                        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="20" />
                                        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                                    </filter>
                                </defs>
                                <polygon id="background-logo-background" points="0,0 245,0 175,110 0,110" filter="url(#f1)"/>
                            </svg>
                            <img className="logo" src={logo} />
                            </div>*/}
                        {buttons}
                    </div>
                </div>
                {
                    this.state.menuExpanded ? (
                        <div className="top-bar-expanded">
                            <div className="top-bar-button-wrap">
                            <button className={"top-bar-button" + (this.state.sliderPosition == 0 ? " selected" : "")} onClick={() => {this.setSliderPosition(0)}}>Home</button>
                            <button className={"top-bar-button" + (this.state.sliderPosition == 1 ? " selected" : "")} onClick={() => {this.setSliderPosition(1)}}>Profile</button>
                            <button className={"top-bar-button" + (this.state.sliderPosition == 2 ? " selected" : "")} onClick={() => {this.setSliderPosition(2)}}>Projects</button>
                            <button className={"top-bar-button" + (this.state.sliderPosition == 3 ? " selected" : "")} onClick={() => {this.setSliderPosition(3)}}>Services</button>
                            <button className={"top-bar-button" + (this.state.sliderPosition == 4 ? " selected" : "")} onClick={() => {this.setSliderPosition(4)}}>Contact</button>
                                {/*<div className="top-bar-button-slider" style={{transform: "translateX(" + ((this.state.sliderPosition * 116) + 30) + "px)"}}></div>*/}
                            </div>
                        </div>
                    ) : null
                }
            </div>
        );
    }

}