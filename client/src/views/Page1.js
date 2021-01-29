import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Page1 extends Component {
    state = {  }
    render() { 
        return ( <Jumbotron>
            I'm page 1;
        </Jumbotron> );
    }
}
 
export default Page1;