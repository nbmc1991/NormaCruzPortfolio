import React, { Component } from 'react';
import Typed from "react-typed";



class LandingPage extends Component {
    render (){
        return (
              
            <div className="header-wraper">
            <div className="main-info">
                <h1>Norma Cruz</h1>
                <Typed 
                className="typed-text"
                strings={["Full Stack Web Development", "Web Designer", "Social Media Designer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="/aboutme" className="btn-main-offer">ABOUT ME</a>
            </div>
        </div>
        )
    }
}

export default LandingPage;