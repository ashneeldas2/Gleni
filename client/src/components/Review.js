import React, { Component } from 'react';
import { Steps } from 'antd';

// Components
import Responses from './Review/Responses';

export class Review extends Component {

    state = { currentStep: 'Responses' };

    render() {
        const { Step } = Steps;

        const stepsList = [
            {
                title: 'Responses'
            },
            {
                title: 'Resume'
            },
            {
                title: 'Review'
            }
        ];

        const currentStepIndex = stepsList.findIndex((step) => step.title === this.state.currentStep);

        return (
            <div style={{ marginTop: '8px', padding: '16px' }}>
                <Steps current={currentStepIndex}>
                    { stepsList.map((step, i) => <Step title={step.title} key={i}></Step>) }
                </Steps>
                <Responses />
            </div>
        )
    }
}

export default Review
