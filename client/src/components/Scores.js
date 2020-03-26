import React, { Component } from 'react';
import Rating from 'react-rating';

export class Scores extends Component {
    render() {
        return (
            <div className="card-body">
                <h5 className="card-title">Respones</h5>
                <p className="card-text mb-1">Overall great application, but has lacking interest in community impact. Could be better with more information highlighting social impact projects.</p>
                <Rating />
                <h5 className="card-title">Resume</h5>
                <p className="card-text mb-1">Great resume that demonstrates fit with the backend developer role. Particularly liked previous experience at Google.</p>
                <Rating />
                <h5 className="card-title">Final Recommendation</h5>
                <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>
            </div>
        )
    }
}

export default Scores
