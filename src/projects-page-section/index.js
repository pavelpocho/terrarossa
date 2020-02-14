import css from './index.css';
import React, { Component } from 'react';
import RippleManager from '../ripple';
import Project from '../project';

export default class ProjectsPageSection extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        RippleManager.setUp();
    }

    render() {
        return (
            <div className={"projects-page-section-wrap"}>
                <div className="pps-expand-button">
                    <p className="pps-expand-text">{this.props.title}</p>
                </div>
                <Project />
                <Project />
                <Project />
            </div>
        )
    }

}