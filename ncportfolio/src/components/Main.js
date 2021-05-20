import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './LandingPage';
import AboutMe from "./AboutMe";
import Resume from "./resume";
import Projects from "./Projects";

const Main = () => (

    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route  path="/resume" component={Resume} />
        <Route  path="/projects" component={Projects} />
        

    </Switch>
)

export default Main;
