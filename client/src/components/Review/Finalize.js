import React, { Component } from 'react';

// Import AntD
import { Typography, Form, Rate, Menu, Dropdown, Button} from 'antd';
const { Title, Text, Paragraph } = Typography;

export class Finalize extends Component {
    
    formRef = React.createRef();
    
    componentDidMount() {
        const { responses, resume } = this.props.evaluation;

        this.formRef.current.setFieldsValue({
            responsesNotes: responses.notes,
            responsesRating: responses.rating,
            resumeNotes: resume.notes,
            resumeRating: resume.rating
        })
    }

    render() {
        const decisionMenu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer">
                  No
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer">
                  Maybe
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer">
                  Yes
                </a>
              </Menu.Item>
            </Menu>
          );

        const { responses, resume } = this.props.evaluation;

        return (
            <div style={{marginTop: '16px'}}>
                <style type="text/css">
                {`
                    .ant-form-item {
                        margin-bottom: 8px;
                    }
                `}
                </style>
                <Title level={3}>Review Scores</Title>
                <Text>You can edit notes and ratings</Text>

                <Form
                    ref={this.formRef}
                    name="finalize"
                    onFinish={this.onFinish}
                    style={{marginTop: '16px'}}
                >
                    <Title level={4}>Responses</Title>
                    <Form.Item
                        label="Notes"
                        name="responsesNotes"
                        rules={[{ required: true, message: 'Review notes are required' }]}
                    >
                        <Paragraph copyable style={{ marginBottom: '0' }}>{ responses.notes }</Paragraph>
                    </Form.Item>
                    <Form.Item
                        label="Rating"
                        name="responsesRating"
                        rules={[{ required: true, message: 'Ratings are required' }]}
                    >
                        <Rate />
                    </Form.Item>
                    <Title level={4}>Resume</Title>
                    <Form.Item
                        label="Notes"
                        name="resumeNotes"
                        rules={[{ required: true, message: 'Review notes are required' }]}
                    >
                        <Paragraph copyable style={{ marginBottom: '0' }}>{ resume.notes }</Paragraph>
                    </Form.Item>
                    <Form.Item
                        label="Rating"
                        name="resumeRating"
                        rules={[{ required: true, message: 'Ratings are required' }]}
                    >
                        <Rate />
                    </Form.Item>
                    <Title level={4}>Final Decision</Title>
                    <Form.Item
                        label="Should we give this applicant an interview?"
                        name="finalDecision"
                        rules={[{ required: true, message: 'Final decision is required' }]}
                    >
                    <Dropdown overlay={decisionMenu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <Button>Decision</Button>
                        </a>
                    </Dropdown>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Review Resume
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default Finalize
