import React, { Component } from 'react';
import Review from './Review';

export class Body extends Component {
    render() {
        return (
            <div className="container-fluid mb-3 pt-2" style={{ marginTop: '62px' }}>
                <Review />
            </div>
        )
    }
}

export default Body
