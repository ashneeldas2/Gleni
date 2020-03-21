import React, { Component } from 'react';
import Nav from './Nav';

export class Body extends Component {
    render() {
        return (
            <div style={bodyStyle}>
                <Nav />
            </div>
        )
    }
}

const bodyStyle = {
    padding: '20px 30px'
}

export default Body
