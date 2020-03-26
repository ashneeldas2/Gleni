import React, { Component } from 'react';
import './Review.css';
import Responses from './Responses';
import Resume from './Resume';
import Scores from './Scores'

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
                component: <Responses />,
                displayNotes: true,
                submitText: 'Next Stage (Resume)',
                nextStage: 'resume'
            },
            resume: {
                component: <Resume />,
                displayNotes: true,
                submitText: 'Next Stage (Scores)',
                nextStage: 'scores'
            },
            scores: {
                component: <Scores />,
                submitText: 'Submit Scores',
                displayNotes: false,
                // TO BE CHANGED
                nextStage: 'responses'
            }
        }

        // Extract all information of current stage for building component
        const currentStageInfo = stagesDictionary[currentStage];
        const { component, submitText, nextStage, displayNotes } = currentStageInfo;

        // Conditional notes section for stages needing final notes
        const notesComponent = displayNotes ? <input className="notes" type="text" placeholder="Notes" /> : '';

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
                    { notesComponent }
                    <div className="card-footer footer" onClick={() => this.changeStage(nextStage)}> { submitText } </div>
                </div>
        )
    }
}

export default Review
