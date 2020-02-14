import css from './index.css';
import React, { Component } from 'react';
import RippleManager from '../ripple';
import ProjectsPageSection from '../projects-page-section';
import GoogleMapReact from 'google-map-react';

export default class ContactsPage extends Component {

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

    renderMarker(map, maps) {
        let marker = new maps.Marker({
            position: { lat: 51.288263, lng: -0.074488 },
            map,
            title: 'terrarossa project'
        });
    }

    render() {
        return (
            <div className={"contacts-page-wrap"}>
                <div className={"cp-section"}>
                    <div className={"g-map-wrap"}>
                        <GoogleMapReact yesIWantToUseGoogleMapApiInternals={true} onGoogleApiLoaded={({map, maps}) => this.renderMarker(map, maps)} defaultCenter={{ lat: 51.288263, lng: -0.074488 }} defaultZoom={14} />
                    </div>
                    <div className={"contact-info"}>
                        <div className={"contact-info-text"}>
                            <p>9 Elgin Crescent<br/>Caterham, CR3 6ND</p>
                            <p>07920 728 200<br/>terrarossa@email.com</p>
                        </div>
                        <div className={"cp-logo-wrap"}>
                            <p className={"mp-logo-title"} ref={this.title}>terrarossa project</p>
                            <p className={"mp-logo-subtitle"} ref={this.subtitle}>Design Consultants</p>
                            <div className={"mp-logo-circle-wrap"}>
                                <div className={"mp-logo-circle"} ref={this.circle}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"cp-section"}>
                    <p>This is where the form is going to beeeeeeeeee</p>
                </div>
            </div>
        )
    }

}