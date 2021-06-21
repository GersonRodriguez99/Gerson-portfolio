import React, { Component } from 'react';
import phplogo from '../../images/logo-php.png';
import html from '../../images/htmllogo.png';
import javascript from '../../images/javascript.png';
import css from '../../images/css.png';
import jquery from '../../images/jquery.png';
import mysql from '../../images/mysql.png';
import react from '../../images/react.png';
import materialize from '../../images/materialize-logo.png';
import boostrap from '../../images/Bootstrap.png';
import node from '../../images/node-js.png';
import photoshop from '../../images/photoshop.png';
import illustrator from '../../images/illustrator.png';
import mybg from '../../images/back.png';
import dots from '../../images/dtoos.png';
import './skills.css';





export default class Skills extends Component {
    render() {
        return (
            <section className="main-banner grey darken-4 skills-section" name="skills"  style={{ backgroundImage: `url(${mybg})` }}> 
            
            <div className="container">
            <h1 className="start custom-main-color center-align "  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                    Skills
                </h1>
{/* first row */}

<p className="skills-paragraph" data-aos="fade-down"> Valuable experience with Mysql, Jquery, CSS, Sass, JavaScript, Node.js, WordPress, React, ASP.net, HTML, bootstrap, Drupal 8, UX Design, Edith Twig templates and WordPress themes, Custom Themes, plugins.</p>
                                <div class="row" data-aos="fade-up"  data-aos-duration="3000">
                    <div class="col s12 m2">
                    <div class="card black rubber-effect custom-card">
                        
                    <div class="card-image valign-wrapper ">
                          <img src={phplogo}/>
                        </div>
                        <div class="card-content white-text center-align">
                        <span class="card-title">PHP</span>
                        </div>
                    </div>
                    </div>
                    <div class="col s12 m2">
                    <div class="card black rubber-effect custom-card">
                    <div class="card-image">
                          <img src={html}/>
                        </div>
                        <div class="card-content white-text center-align">
                        <span class="card-title">HTML</span>
                        </div>
                    </div>
                    
                    </div>
                    <div class="col s12 m2">
                    <div class="card black rubber-effect custom-card">
                    <div class="card-image valign-wrapper ">
                          <img src={javascript}/>
                        </div>
                        <div class="card-content white-text center-align">
                        <span class="card-title">Java Script</span>
                        </div>
                    </div>
                    
                    </div>
                    <div class="col s12 m2">
                    <div class="card black rubber-effect custom-card">
                    <div class="card-image valign-wrapper">
                          <img src={css}/>
                        </div>
                        <div class="card-content white-text center-align">
                        <span class="card-title">CSS</span>
                        </div>
                    </div>
                    
                    </div>
                    <div class="col s12 m2">
                    <div class="card black rubber-effect custom-card">
                    <div class="card-image valign-wrapper">
                          <img src={jquery}/>
                        </div>
                        <div class="card-content white-text center-align">
                        <span class="card-title">Jquery</span>
                        </div>
                    </div>
                    
                    </div>
                    <div class="col s12 m2">
                    <div class="card black rubber-effect custom-card">
                    <div class="card-image valign-wrapper">
                          <img src={mysql}/>
                        </div>
                        <div class="card-content white-text center-align">
                        <span class="card-title">MySQL</span>
                        </div>
                    </div>
                    
                    </div>
                
                </div>
                {/* second row */}
                <div class="row  center-align" data-aos="fade-up"  data-aos-duration="3000">
                <div class="col s12 m2">
                    
                </div>
                <div class="col s12 m2">
                   
                    <div class="card black rubber-effect custom-card">
                    <div class="card-image valign-wrapper">
                          <img src={react}/>
                        </div>
                        <div class="card-content white-text center-align">
                        <span class="card-title">React</span>
                        </div>
                    </div>
                    
                    </div>

                    <div class="col s12 m2">
                   
                   <div class="card black rubber-effect custom-card">
                   <div class="card-image valign-wrapper">
                         <img src={materialize}/>
                       </div>
                       <div class="card-content white-text center-align">
                       <span class="card-title">Materialize</span>
                       </div>
                   </div>
                   
                   </div>
                   
                    <div class="col s12 m2">
                    <div class="card black rubber-effect custom-card">
                    <div class="card-image valign-wrapper">
                          <img src={boostrap}/>
                        </div>
                        <div class="card-content white-text center-align">
                        <span class="card-title">Bootstrap</span>
                        </div>
                    </div>
                    
                    </div>
                    <div class="col s12 m2">
                    <div class="card black rubber-effect custom-card">
                    <div class="card-image valign-wrapper">
                          <img src={node}/>
                        </div>
                        <div class="card-content white-text center-align">
                        <span class="card-title">Node</span>
                        </div>
                    </div>
                    
                    </div>

                    </div>
                      {/* row 3  */}
                      <h4 className="center-align" data-aos="fade-down">Graphic Tools </h4>
                                
            <div class="row  center-align" data-aos="fade-up"  data-aos-duration="3000">
            <div class="col s12 m2"></div>
            <div class="col s12 m2"></div>
            
                    <div class="col s12 m2">
                    <div class="card black rubber-effect custom-card">
                    <div class="card-image valign-wrapper">
                          <img src={photoshop}/>
                        </div>
                        <div class="card-content white-text center-align">
                        <span class="card-title">Photoshop</span>
                        </div>
                    </div>
                    
                    </div>

                    <div class="col s12 m2">
                    <div class="card black rubber-effect custom-card">
                    <div class="card-image valign-wrapper">
                          <img src={illustrator}/>
                        </div>
                        <div class="card-content white-text center-align">
                        <span class="card-title">Illustrator</span>
                        </div>
                    </div>
                    
                    </div>

                    
              </div>


            </div>

          

              
            </section>
        )
    }
}
