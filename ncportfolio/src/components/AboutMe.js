import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import ncpic from "../ncpic.png";





class AboutMe extends Component {
    render (){
        return (
            <div>
                
            <Grid className='landing-grid'>
                <Cell className='landing-cell' col={4}>
                    <img className="avatar-image"
                        src={ncpic}
                        alt='avatar'
                        className='avatar-image'
                    />
                    </Cell>
                    <Cell className='landing-cell, about-me' col={5}>
                    <div className='banner-text' >
                        <h1>About Me</h1>
                        <hr />
                        <p> Hello World! my name is Norma Cruz. I'm an Full Stack Web Developer and web designer from Orlando, Florida. I love working with people and learning new things.I have experience in classic backend stacks and front-end frameworks including Bootstrap, jQuery, and React. 
                        </p>
                
                    </div>
                    </Cell>
            
            </Grid>

        </div>   
        )
    }
}

export default AboutMe;