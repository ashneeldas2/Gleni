import React, { Component } from 'react';
import './Review.css';
import Response from './Response';
import Resume from './Resume'

export class Review extends Component {

    state = {stage: 'responses'}

    ifActive = (stage) => {
        let responses = {true: 'active', false: ''};
        return responses[this.state.stage === stage];
    }

    changeStage = (stage) => {
        this.setState({stage})
    }

    render() {

        const { stage } = this.state;
        const bodyComponentsDictionary = {
            'responses': <Response />,
            'resume': <Resume />
        }

        const cardBody = bodyComponentsDictionary[stage];

        return (
            <div className="card">
                <div className="card-header light">
                    <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className={`nav-link ${this.ifActive('responses')}`} onClick={() => this.changeStage('responses')}>[Applicant Name]</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${this.ifActive('resume')}`} onClick={() => this.changeStage('resume')}>Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${this.ifActive('scores')}`} onClick={() => this.changeStage('scores')}>Scores</a>
                    </li>
                    </ul>
                </div>
                { cardBody }
                    <input className="notes" type="text" placeholder="Notes" />
                    <div className="card-footer footer"> Review Resume </div>
                </div>
        )
    }
}

export default Review
