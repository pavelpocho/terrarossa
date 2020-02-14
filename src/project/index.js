import css from './index.css';
import React, { Component } from 'react';
import RippleManager from '../ripple';

export default class Project extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        RippleManager.setUp();
    }

    render() {
        return (
            <div className={"project-wrap"}>
                <div className={"image-wrap"}>
                    <p>*Image slideshow*</p>
                </div>
                <div className="project-texts">
                    <p>
                        <span className="project-name">Project Name</span>
                        <span className={"separator"}></span>
                        <span className={"project-description"}>Sample project description, about this project.</span>
                    </p>
                </div>
            </div>
        )
    }
}