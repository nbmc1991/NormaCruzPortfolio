import React, { Component } from "react";
import {BrowserRouter,Route,Switch, Link} from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from "./components/Main";
import Particles from 'react-particles-js';


import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
// import Particles from "react-particles-js";
import Navbar from './components/Navbar';
import AboutMe from "./components/AboutMe";
// import Header from "./components/Header";
// import DevCards from './components/pages/DevCards';



class App extends Component {
 render (){
 return (
  <div className="demo-big-content">
    
  <Layout>
    <Navbar />
      {/* <Header  title="NC" scroll>
      <Navigation        
      >
      <Link to="/">Home</Link>
      <Link to="/aboutme">About Me</Link>
      <Link to="/projects">Portfolio</Link>
      <Link to="/resume">Resume</Link>
      </Navigation>
      </Header>
      <Drawer title="NC">
      <Navigation>
      <a href="/">Home</a>
      <a href="/aboutme">About Me</a>
      <a href="/projects">Portfolio</a>
      <a href="/resume">Resume</a>
      </Navigation>
      </Drawer> */}
      <Content>
      <div className="page-content" />
      <Main />

      </Content>
      
      
    </Layout>

    </div>
  
 
);
}

  }
 ;
export default App;
