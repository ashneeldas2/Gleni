import React, { Component } from 'react';
import './Review.css';
import Response from './Response';
import Resume from './Resume'

export class Review extends Component {

    state = {currentStage: 'responses'};

    ifActive = (stage) => {
        let responses = {true: 'active', false: ''};
        return responses[this.state.currentStage === stage];
    }

    changeStage = (stage) => {
        this.setState({currentStage: stage})
    }

    render() {
        const { currentStage } = this.state;
        const stagesDictionary = {
            responses: {
                component: <Response />,
                submitText: 'Next Stage (Resume)',
                nextStage: 'resume'
            },
            resume: {
                component: <Resume />,
                submitText: 'Next Stage (Scores)',
                nextStage: 'scores'
            },
            scores: {
                submitText: 'Submit Scores',
                // TO BE CHANGED
                nextStage: 'responses'
            }
        }

        const currentStageInfo = stagesDictionary[currentStage];
        const { component, submitText, nextStage } = currentStageInfo;

        return (
            <div className="card">
                <div className="card-header light">
                    <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className={`nav-link ${this.ifActive('responses')}`} onClick={() => this.changeStage('responses')}>Karen Philips</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${this.ifActive('resume')}`} onClick={() => this.changeStage('resume')}>Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${this.ifActive('scores')}`} onClick={() => this.changeStage('scores')}>Scores</a>
                    </li>
                    </ul>
                </div>
                { component }
                    <input className="notes" type="text" placeholder="Notes" />
                    <div className="card-footer footer" onClick={() => this.changeStage(nextStage)}> { submitText } </div>
                </div>
        )
    }
}

export default Review
