import React, { Component } from 'react';
import { Steps } from 'antd';

// Components
import Responses from './Review/Responses';
import Resume from './Review/Resume';
import Finalize from './Review/Finalize';

export class Review extends Component {

    state = { currentStep: 'Responses' };

    handleFinishStep = (step) => {

        // Identify the next step to move to with switch statements
        let nextStep;

        switch (step) {
            case 'Responses':
                nextStep = 'Resume';
                break;
            case 'Resume':
                nextStep = 'Finalize';
                break;
            case 'Finalize':
                break;
        }

        if (nextStep !== undefined) this.setState({currentStep: nextStep})
    }

    render() {
        const { Step } = Steps;

        const stepsList = [
            {
                title: 'Responses',
                component: <Responses onFinishStep={this.handleFinishStep} />
            },
            {
                title: 'Resume',
                component: <Resume onFinishStep={this.handleFinishStep} />
            },
            {
                title: 'Finalize',
                component: <Finalize onFinishStep={this.handleFinishStep} />
            }
        ];

        const currentStepIndex = stepsList.findIndex((step) => step.title === this.state.currentStep);
        const currentStepComponent = stepsList[currentStepIndex].component;

        return (
            <div style={{ marginTop: '8px', padding: '16px' }}>
                <Steps current={currentStepIndex}>
                    { stepsList.map((step, i) => <Step title={step.title} key={i}></Step>) }
                </Steps>
                { currentStepComponent }
            </div>
        )
    }
}

export default Review
