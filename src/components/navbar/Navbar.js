import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import M from 'materialize-css';
import "@fontsource/lato";
import "./Navbar.css";



    const SmoothScroll = () => {
    return (
        <section>
            <div className="navbar-extended grey darken-4 custom-settings-nav">
                <nav className="grey darken-4 custom-nav ">
                    <div className="container">
                        <div className="nav-wrapper ">
                            <AnchorLink href="" data-target="mobile-demo" className="sidenav-trigger">
                                <i className="material-icons">menu</i></AnchorLink>
                            <ul  className="right hide-on-med-and-down custom-main-color"> 
                            <li><AnchorLink href="/home" className="rubber-effect" > Home </AnchorLink></li>
                            <li  ><AnchorLink href="/search" className="rubber-effect"> Search  </AnchorLink></li>
                            <li  ><AnchorLink href="/skills" className="rubber-effect"> Skills </AnchorLink></li>
                            <li ><AnchorLink href="/adventure" className="rubber-effect"> Adventure </AnchorLink></li>
                            <li  ><AnchorLink href="/gallery" className="rubber-effect"> Gallery  </AnchorLink></li>
                            <li  ><AnchorLink href="/contact" className="rubber-effect"> Contact </AnchorLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
            <ul  id="mobile-demo" className="sidenav">
                    <li><AnchorLink href="#home" >Home</AnchorLink></li>
                    <li><AnchorLink href="#search">Search</AnchorLink></li>
                    <li><AnchorLink href="#skills">Skills</AnchorLink></li>
                    <li><AnchorLink href="#adventure">Adventures</AnchorLink></li>
                    <li><AnchorLink href="#gallery">Gallery</AnchorLink></li>
                    <li><AnchorLink href="#contact">Contact</AnchorLink></li>
    </ul>
        </section>
    )
}

export default class Navbar extends Component {
    render() {
        return ( <div>
            <SmoothScroll/>
            </div>
        )
    }
}