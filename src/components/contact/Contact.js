import React, { Component } from 'react';
import upwork from '../../images/upwork.png';
import Github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import './contact.css';

export default class Contact extends Component {
    render() {
        return (
            <section className="main-banner grey darken-4 contact">
                <div className="container">
                  <div className="row  custom-align">
                      <div className="col m6">
                               
              <h1 className="start custom-main-color center-align " data-aos="fade-right" data-aos-duration="3000">
                    Contact <br/> Me!
                </h1>
                      </div>
                      <div className="col m6">
                      <div className="row " data-aos="fade-left"  data-aos-duration="3000" >
                        <div className="col m4 center-align">
                            <a href="https://www.upwork.com/freelancers/~013982c025942c337e/"> <img className="rubber-effect" src={upwork} ></img></a>
                            <p> Upwork </p>
                        </div>
                        <div className="col m4 center-align">
                            <a href="https://github.com/GersonRodriguez99"> <img className="rubber-effect" src={Github} ></img></a>
                            <p> Github </p>
                        </div>
                        <div className="col m4 center-align">
                            <a href="https://www.linkedin.com/in/luis-gerson-rodr%C3%ADguez-s%C3%A1nchez-ba8045125/"> <img className="rubber-effect" src={linkedin} ></img></a>
                            <p> LinkedIn </p>
                        </div>
                    </div>
                      </div>
                      
                      </div>  
                    
                    
                
                </div>
            </section>
        )
    }
}
