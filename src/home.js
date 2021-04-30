import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'

export default function Home() {
    return(
      <Container style={{maxHeight: 550, overflow: "scroll"}} className="text-center">
        <br/>
        <Card >
            <h1>We love Circles</h1>
            <hr/>
            <h2>We're going to spread the Cicles to everyone<br/>
            everyone deserves the Cirles. </h2>
            <br/>
            <Button as={Link} to="/app">Circles</Button>
        </Card>
        <br/>
        <br/>
        <h3>
        Having trouble with CIrcles: 
        Learn About cirCles. 
        </h3>
        <Button as={Link} to="/help">learn </Button>
        <br/>
        <b>
        Circles, Circles cricles, cricles, cirecl ,circles, clricesl , circles, clrices, cirlcles, circes, 
        Circles, Circles cricles, cricles, cirecl ,circles, clricesl , circles, clrices, cirlcles, circes, 
        Circles, Circles cricles, cricles, cirecl ,circles, clricesl , circles, clrices, cirlcles, circes, 
        Circles, Circles cricles, cricles, cirecl ,circles, clricesl , circles, clrices, cirlcles, circes, 
        Circles, Circles cricles, cricles, cirecl ,circles, clricesl , circles, clrices, cirlcles, circes,
        Circles, Circles cricles, cricles, cirecl ,circles, clricesl , circles, clrices, cirlcles, circes, 
        Circles, Circles cricles, cricles, cirecl ,circles, clricesl , circles, clrices, cirlcles, circes, 
        Circles, Circles cricles, cricles, cirecl ,circles, clricesl , circles, clrices, cirlcles, circes, 
        Circles, Circles cricles, cricles, cirecl ,circles, clricesl , circles, clrices, cirlcles, circes, 
        Circles, Circles cricles, cricles, cirecl ,circles, clricesl , circles, clrices, cirlcles, circes,
        Circles, Circles cricles, cricles, cirecl ,circles, clricesl , circles, clrices, cirlcles, circes, 
        Circles, Circles cricles, cricles, cirecl ,circles, clricesl , circles, clrices, cirlcles, circes, 
        Circles, Circles cricles, cricles, cirecl ,circles, clricesl , circles, clrices, cirlcles, circes, 
        Circles, Circles cricles, cricles, cirecl ,circles, clricesl , circles, clrices, cirlcles, circes, 
        Circles, Circles cricles, cricles, cirecl ,circles, clricesl , circles, clrices, cirlcles, circes,
        </b> 
      </Container>
  
  
    )
  }