import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from "react-mdl"


class Resume extends Component {
    render (){
        return (
            <div>
            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
            <CardTitle style={{color: '#ff', height: '65vh', background: 'url(https://github.com/nbmc1991/NormaCruzPortfolio/blob/master/ncportfolio/src/ncresume1.png?raw=true) center / cover'}}></CardTitle>
            <CardText>
                
            </CardText>
            <CardActions border>
                <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
            <CardTitle style={{color: '#ff', height: '65vh', background: 'url(https://github.com/nbmc1991/NormaCruzPortfolio/blob/master/ncportfolio/src/ncresume2.png?raw=true) center / cover'}}></CardTitle>
            <CardText>
                
            </CardText>
            <CardActions border>
                <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
        </div>

     
        
        )
    }
}

export default Resume;
