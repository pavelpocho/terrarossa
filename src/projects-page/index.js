import css from './index.css';
import React, { Component } from 'react';
import RippleManager from '../ripple';
import ProjectsPageSection from '../projects-page-section';

export default class ProjectsPage extends Component {

    constructor(props) {
        super(props);
        

    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className={"projects-page-wrap"}>
                <ProjectsPageSection title={"Architecture"} />
                <ProjectsPageSection title={"Surveying"} />
                <ProjectsPageSection title={"Interior Design"} />
            </div>
        )
    }

}