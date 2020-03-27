import React, { Component } from 'react';

// Import antd
import { Form, Input, Button, Divider, Rate } from 'antd';

const data = {
    resume: "https://drive.google.com/file/d/1hmV29kInLSPJNGbnniRpmHvRxvSSgsQP/preview"
}

export class Resume extends Component {

    onFinish = (values) => {
        // Do something with the values
        // console.log(values)

        this.props.onFinishStep('Resume');
    }

    render() {
        return (
            <div style={{ marginTop: '16px' }}>
                <iframe src={ data.resume } width="100%" height="580"></iframe>
                <Divider />

            <Form
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
                    />
                </Form.Item>
                <Form.Item
                    label="Rating"
                    name="rating"
                    rules={[{ required: true, message: 'Ratings are required' }]}
                >
                    <Rate />
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
