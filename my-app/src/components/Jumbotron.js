import React from 'react'
import {Jumbotron as Jumbo, Container} from "react-bootstrap"
import styled from "styled-components"
import Thisimage from "../images/puppies.jpg"


const Styles = styled.div
`
.jumbo{
    background: url(${Thisimage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ffffff;
    height: 50vh;
    position: relative;
    z-index: -2;
}
.overlayer{
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
}
`


export const Jumbotron =()=> 
   (
       <Styles>
           <Jumbo fluid className="jumbo">
               <div className="overlayer"></div>
               <Container>
                   <h1>Welcome, you're here!</h1>
                   <p>Look at this site</p>
               </Container>

           </Jumbo>

       </Styles>
    )

