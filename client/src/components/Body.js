import React, { Component } from 'react';

export class Body extends Component {
    render() {
        return (
            <div className="container-fluid pt-2">
                <div className="card">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Application</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Scores</a>
                    </li>
                    </ul>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                < div className = "card-footer"
                style = {{width: '100%', height: '100%', backgroundColor: '#32DE8A', color: 'white'}}> Review Resume </div>
                </div>
            </div>
        )
    }
}

export default Body
