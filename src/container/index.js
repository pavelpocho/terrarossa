import css from './index.css';
import React, { Component } from 'react';
import TopBar from '../topbar';
import HomePage from '../home-page';
import ProfilePage from '../profile-page';
import ProjectsPage from '../projects-page';
import ContactsPage from '../contacts-page';

export class Container extends Component {

    constructor(props) {
        super(props);

        this.container1 = React.createRef();
        this.container2 = React.createRef();

        this.state = {
            content: 1,
            activePage: 0,
            update: true,
            history: [0],
            backdropFunction: () => {},
            scrollFunctions: [],
            dialog: null
        }

        this.copyright = React.createRef();
        this.topbar = React.createRef();
        this.mainPage = React.createRef();
        this.cardBackdrop = React.createRef();
        this.scrollBar = React.createRef();
    }

    openDialog(dialog) {
        this.setState({
            dialog
        })
    }

    closeDialog() {
        this.setState({
            dialog: null
        })
    }

    switchPage(p) {

        if (this.state.activePage == p) {
            return;
        }

        //this.scrollBar.current.preventUpdate = true;

        setTimeout(() => {
            //this.scrollBar.current.preventUpdate = false;
            //this.scrollBar.current.update();
        }, 600);

        this.setState((prevState) => {
            let h = prevState.history;
            h.push(p);
            return {
                activePage: p,
                content: prevState.content == 2 ? 1 : 2,
                update: true,
                history: h
            }
        });
    }

    checkUpdate() {
        if (!this.state.update) {
            return;
        }

        this.setState({
            update: false
        });

        setTimeout(() => {
            if (this.state.content == 1) {
                this.container1.current.style.opacity = "1";
                this.container2.current.style.opacity = "0";
            }
            else {
                this.container1.current.style.opacity = "0";
                this.container2.current.style.opacity = "1";
            }
        }, 100);

        setTimeout(() => {
            this.componentDidUpdate();
        }, 620);
    }
    
    setScrollFunction(f, element) {
        this.setState((prevState) => {
            if (element == document.getElementById("root")) {
                let s = prevState.scrollFunctions;
                s.push(f);
                element.onscroll = (e) => {
                    s[0](e);
                    s[1](e);
                }
                return {
                    scrollFunctions: s
                }
            }
            element.onscroll = (e) => {
                f(e);
            }
        })
    }

    componentDidMount() {
        var scEl = document.getElementById("master-container");
        scEl.onscroll = () => {
            this.topbar.current.setShadow(scEl.scrollTop > 0);
        }
        this.checkUpdate();
        setTimeout(() => {
            //this.scrollBar.current.preventUpdate = false;
            //this.scrollBar.current.update();
        }, 50);
    }

    componentDidUpdate() {

        if (this.state.content == 1) {
            this.container1.current.style.zIndex = "4";
            this.container2.current.style.zIndex = "0";
        }
        else {
            this.container1.current.style.zIndex = "0";
            this.container2.current.style.zIndex = "4";
        }
        this.checkUpdate();

    }

    render() {

        const content = this.state.activePage == 0 ? (
            <HomePage />
        ) : this.state.activePage == 1 ? (
            <ProfilePage />
        ) : this.state.activePage == 2 ? (
            <ProjectsPage />
        ) : this.state.activePage == 3 ? (
            null
        ) : this.state.activePage == 4 ? (
            <ContactsPage />
        ) : null;

        var history = null;

        if (this.state.history.length > 1) {
            history = this.state.history[this.state.history.length - 2] == 0 ? (
                <HomePage />
            ) : this.state.history[this.state.history.length - 2] == 1 ? (
                <ProfilePage />
            ) : this.state.history[this.state.history.length - 2] == 2 ? (
                <ProjectsPage />
            ) : this.state.history[this.state.history.length - 2] == 3 ? (
                null
            ) : this.state.history[this.state.history.length - 2] == 4 ? (
                <ContactsPage />
            ) : null;
        }

        const content1 = this.state.content == 1 ? (
            content
        ) : history;

        const content2 = this.state.content == 2 ? (
            content
        ) : history;

        return (
            <div className={"container"}>
                <TopBar system={this} ref={this.topbar} />
                <div className="master-container" id="master-container">
                    <div className="inner-container" ref={this.container1}>
                        {content1}
                    </div>
                    <div className="inner-container" ref={this.container2}>
                        {content2}
                    </div>
                </div>
                {
                    this.state.dialog != null ? (
                        <div className="dialog-wrap">
                            {this.state.dialog}
                        </div>       
                    ) : null
                }
            </div>
        );
    }

}