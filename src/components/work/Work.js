import React, { Component } from 'react';
import './work.css';
import react from '../../images/html.png';
import rinaldi from '../../images/rinaldi-logo.png';
import solr from '../../images/solr-logo.png';
import diseno from '../../images/santana-logo.png';
import rinaldiSet from '../../images/rinaldi-set.png'
import solarSet from '../../images/solr-set.PNG';
import disenoSet from '../../images/diseno-set.PNG';

export default class Work extends Component {
    render() {
      const row = {
       position:"relative",
   
      };
      const col = {
        visibility: "visible",
        animationDelay: "500ms",
        animationName: "fadeInUp",
         
        left: "0%",
         top: "0px",

      }


        return (
            <section class="main-banner black ">
              
              <h1 className="start custom-main-color center-align " data-aos="zoom-in" data-aos-duration="3000">
                    Recent Work 
                </h1>

<div class="alime-portfolio-area section-padding-80 clearfix">
      <div class="container-fluid">
        <div class="row" >
          <div class="col-12">
          
            <div class="alime-projects-menu">
              <div class="portfolio-menu text-center">
              
              </div>
            </div>
          </div>
        </div>

        <div class="row alime-portfolio"  style={row}  data-aos="zoom-in" data-aos-duration="3000">

<div class="col m4 s12 single_gallery_item restaurantes mb-30 wow fadeInUp" data-wow-delay="500ms" style={col} >
<div class="single-portfolio-content">
  <img src={rinaldi} alt="Comida-escena-buffalowings-rinaldimolina">
  </img><div class="hover-content">
    <a href={rinaldiSet} class="portfolio-img">+</a>
  </div>
</div>  
</div>

<div class="col m4 s12 single_gallery_item restaurantes mb-30 wow fadeInUp" data-wow-delay="500ms" style={col} >
<div class="single-portfolio-content">
  <img src={solr} alt="Comida-escena-buffalowings-rinaldimolina">
  </img><div class="hover-content">
    <a href={solarSet} class="portfolio-img">+</a>
  </div>
</div>  
</div>
<div class="col m4 s12 single_gallery_item restaurantes mb-30 wow fadeInUp" data-wow-delay="500ms" style={col} >
<div class="single-portfolio-content">
  <img src={diseno} alt="Comida-escena-buffalowings-rinaldimolina">
  </img><div class="hover-content">
    <a href={disenoSet} class="portfolio-img">+</a>
  </div>
</div>  
</div>
</div>




</div>
 
    </div>
            </section>
        )
    }
}
