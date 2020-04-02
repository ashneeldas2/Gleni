import React, { Component } from 'react';

// Import antd
import { Form, Input, Button, Divider, Rate } from 'antd';

const data = {
    resume: "https://drive.google.com/file/d/1hmV29kInLSPJNGbnniRpmHvRxvSSgsQP/preview"
}

export class Resume extends Component {

    formRef = React.createRef();
    
    componentDidMount() {
        const { notes, rating } = this.props.resumeScoring;

        this.formRef.current.setFieldsValue({
            notes, rating
        })
    }

    onNotesChange = (newNotesValue) => {
        this.props.onEvaluationChange('resume', 'notes', newNotesValue);
    }

    onRatingChange = (newRatingValue) => {
        this.props.onEvaluationChange('resume', 'rating', newRatingValue);
    }

    onFinish = (values) => {
        // Do something with the values
        // console.log(values)

        this.props.onFinishStep('resume');
    }

    render() {
        return (
            <div style={{ marginTop: '16px' }}>
                <iframe src={ data.resume } width="100%" height="580"></iframe>
                <Divider />

            <Form
                ref={this.formRef}
                name="responsesReview"
                onFinish={this.onFinish}
            >
                <Form.Item
                    label="Notes"
                    name="notes"
                    rules={[{ required: true, message: 'Review notes are required' }]}
                >
                    <Input
                        placeholder="Thoughts on resume"
                        onChange={e => this.onNotesChange(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    label="Rating"
                    name="rating"
                    rules={[{ required: true, message: 'Ratings are required' }]}
                >
                    <Rate 
                        onChange={this.onRatingChange}
                    />
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit">
                    Review Evaluation
                </Button>
                </Form.Item>
            </Form>
            </div>
        )
    }
}

export default Resume
