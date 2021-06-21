import React, { Component } from 'react';
import circle from '../../images/Ellipse-2.png'
import "./Search.css"
import me from '../../images/yo-memoji.png'

export default class Search extends Component {
    render() {
        return (
            <section className="black main-banner decription">
            <div className="img-container container center-align">
                <img className="rubber-effect" src={circle}/> 
            </div>
            <div className="container">
                <div  data-aos="fade-up"
     data-aos-duration="3000">
                    <p>
                    I describe myself as an outgoing and determinate professional who put his best effort on every project. I consider that never is enough for something, everything always has an improvement to implement. Optimism and dedication are the main qualities of my-self, that’s why in the worst of situations I look for a solution to a problem instead of being complaining of the issue. As John Dewey said “Failure is instructive. The person who really thinks learns quite as much from his failures as from his successes.” It is constructive to learn about the errors; I like to say that every day is a good day to learn something new.
                    </p>
                </div>
            </div>
        
            </section>
            
            
        )
    }
}
