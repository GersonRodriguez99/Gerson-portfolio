import React, { Component } from 'react';
import './banner.css';
import banner from '../../images/background-banner-2.png';


export default class Banner extends Component {
    
    render() {
        return (
       
            <section className="main-banner grey darken-4 "  style={{ backgroundImage: `url(${banner})` }}>
       
            <div className="banner-name">
            <div className="container both " >
                <h1 className="start custom-main-color" data-aos="zoom-in">I'm</h1>
                <h1 className="start custom-main-color" data-aos="zoom-in">Gerson</h1>
                <p> Full-stack Developer / WordPress Expetise</p>
            </div>
            </div>            
            </section>
        )
    }
}
