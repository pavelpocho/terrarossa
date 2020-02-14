import css from './index.css';
import React, { Component } from 'react';
import RippleManager from '../ripple';
import PersonProfile from '../person-profile';

export default class ProfilePage extends Component {

    constructor(props) {
        super(props);
    

    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className={"profile-page-wrap"}>
                <div className={"pp-section"}>
                    <div className={"pp-logo-wrap"}>
                        <div className={"pp-logo-background"}>
                            <div className={"pp-logo-text-wrap"}>
                                <p className={"profile-title"}>Profile</p>
                                <p className={"profile-text"}>
                                    Terrarossa, or Red Land, is neither a socio-political statement nor a homage to a blood-stained battlefield
                                    in some foreign land but it simply stands for Land of Passion, which is at the base of our project
                                </p>
                                <p className={"profile-text"}>
                                    Founded in 2010 by Rosario Russo as a means of self-expression and utopia, it became an organized entity in 2012
                                    after a long and revealing chat with his close friends and colleagues John and Tereza
                                </p>
                                <p className={"profile-text"}>
                                    Terrarossa combines Italian flare and vision with Anglo-Saxon stoicism and practicality and Eastern European grounded
                                    realism
                                </p>
                                <p className={"profile-text"}>
                                    The practice has worked on numerous projects, delivering quality and happiness to the Clients
                                    and to themselves
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"pp-section people"}>
                    <PersonProfile name={"Arch. Rosario Russo"} titles={"BEng BA (Hons) Dip ARCH RIBA"} description={
                        "Born and raised in Naples but adopted London as his second home 19 years ago, \
                        he completed his studies in UK to becom a fully qualified Architect in 2013."
                    } motto={"Founder of Terrarossa and creative brain behind each project."} />
                    <PersonProfile name={"John Parker"} titles={"BSc MRICS + Registered Valuer"} description={
                        "Having seen his first light of day in Dulwich Hospital and lived 28 years of his \
                        life in Dulwich Village, John is a true and proud South Londoner. Having worked in \
                        the construction industry since 1978,"
                    } motto={"he brings a valuable wealth of experience and technicality."} />
                    <PersonProfile name={"Tereza Pochobradska"} titles={"PA + Admin"} description={
                        "Experienced practice administrator, Tereza has been fundamental for the marketing \
                        and consequential growth of the business. Originally from the heart of Europe, Czech Republic,"
                    } motto={"she adds Eastern European rationality to the administration of the practice."} />
                </div>
            </div>
        )
    }

}