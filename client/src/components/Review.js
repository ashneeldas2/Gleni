import React, { Component } from 'react';
import { Steps } from 'antd';

// Components
import Responses from './Review/Responses';

export class Review extends Component {

    state = { currentStep: 'Responses' };

    handleFinishStep = (stage) => {

        let nextStep;

        switch (stage) {
            case 'Responses':
                nextStep = 'Resume';
                break;
            case 'Resume':
                nextStep = 'Review';
                break;
            case 'Review':
                break;
        }

        if (nextStep !== undefined) this.setState({currentStep: nextStep})
    }

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
                <Responses onFinishStep={this.handleFinishStep} />
            </div>
        )
    }
}

export default Review
