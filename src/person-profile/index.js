import css from './index.css';
import React, { Component } from 'react';
import RippleManager from '../ripple';

export default class PersonProfile extends Component {

    constructor(props) {
        super(props);
    

    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className={"person-profile-wrap"}>
                <div className={"person-texts-wrap"}>
                    <p className={"person-name"}>{this.props.name}</p>
                    <p className={"person-titles"}>{this.props.titles}</p>
                    <p className={"person-description"}>{this.props.description}<i><b> {this.props.motto}</b></i></p>
                </div>
                <div className={"image-placeholder"}></div>
            </div>
        )
    }

}