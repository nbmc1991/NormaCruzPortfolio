import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from "react-mdl"
import ncresume from "../ncresume1.png";


class Resume extends Component {
    render (){
        return (
            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
            <CardTitle style={{color: '#ff', height: '176px', background:{ncresume} }}>Welcome</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
        )
    }
}

export default Resume;
