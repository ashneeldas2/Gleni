import React, { Component } from 'react';
import { Steps } from 'antd';

// Components
import Responses from './Review/Responses';
import Resume from './Review/Resume';
import Finalize from './Review/Finalize';

export class Review extends Component {
  // Default scoring values
  state = {
    currentStep: 'responses',
    evaluation: {
      responses: {
        notes: '',
        rating: null,
      },
      resume: {
        notes: '',
        rating: null,
      },
      finalize: {
        decision: 'Decision',
      },
    },
  };

  handleEvaluationChange = (step, scoringSection, newValue) => {
    const updatedEvaluation = this.state.evaluation;

    // Update with new valuation
    updatedEvaluation[step][scoringSection] = newValue;
    this.setState({ evaluation: updatedEvaluation });
  };

  handleChangeDecision = (decision) => {
    const updatedEvaluation = this.state.evaluation;

    updatedEvaluation.finalize.decision = decision;
    this.setState({ evaluation: updatedEvaluation });
  };

  // TBD: Improve operation, efficiency and maintability of this function
  handleFinishStep = (step) => {
    // Identify the next step to move to with switch statements
    let nextStep;

    switch (step) {
      case 'responses':
        nextStep = 'resume';
        break;
      case 'resume':
        nextStep = 'finalize';
        break;
      case 'finalize':
        break;
    }

    if (nextStep !== undefined) this.setState({ currentStep: nextStep });
  };

  render() {
    const { Step } = Steps;

    const { evaluation } = this.state;
    const { responses, resume } = evaluation;

    const stepsList = [
      {
        id: 'responses',
        title: 'Responses',
        component: (
          <Responses
            responsesScoring={responses}
            onEvaluationChange={this.handleEvaluationChange}
            onFinishStep={this.handleFinishStep}
          />
        ),
      },
      {
        id: 'resume',
        title: 'Resume',
        component: (
          <Resume
            resumeScoring={resume}
            onEvaluationChange={this.handleEvaluationChange}
            onFinishStep={this.handleFinishStep}
          />
        ),
      },
      {
        id: 'finalize',
        title: 'Finalize',
        component: (
          <Finalize
            // Need entire evaluation
            evaluation={evaluation}
            onEvaluationChange={this.handleEvaluationChange}
            onChangeDecision={this.handleChangeDecision}
            onFinishStep={this.handleFinishStep}
          />
        ),
      },
    ];

    const currentStepIndex = stepsList.findIndex(
      (step) => step.id === this.state.currentStep
    );
    const currentStepComponent = stepsList[currentStepIndex].component;

    return (
      <div style={{ marginTop: '8px', padding: '16px' }}>
        <Steps current={currentStepIndex}>
          {stepsList.map((step, i) => (
            <Step title={step.title} key={i}></Step>
          ))}
        </Steps>
        {currentStepComponent}
      </div>
    );
  }
}

export default Review;
