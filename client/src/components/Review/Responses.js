import React, { Component } from 'react';

// Import antd
import { List, Form, Input, Button, Divider, Rate } from 'antd';

const data = [
  {
    question: 'Timestamp',
    response: '9/11/2019 1:18:38'
  },
  {
    question: 'Email Address',
    response: 'sw754@cornell.edu'
  },
  {
    question: 'First Name',
    response: 'Scott'
  },
  {
    question: 'Last Name',
    response: 'Wang'
  },
  {
    question: 'What is your expected graduation date?',
    response: 'May 2022'
  },
  {
    question: 'Have you applied before?',
    response: 'No'
  },
  {
    question: 'Have you taken any of our courses before? And if so, which ones? ',
    response: 'Both'
  },
  {
    question: 'Why do you want to be a part of Cornell Design & Tech Initiative?',
    response: 'I want to further grow my skills in software development (full-stack, mobile) by taking part of a team effort in developing and shipping full-scale projects from start to finish (or by jumping in!). As a maker, I also love undertaking cool projects that can help other students\' (and people) lives just a little better.'
  },
  {
    question: 'Which one of our projects is most interesting to you and why?',
    response: 'Samwise. It rethinks the problem of taking notes in terms of something much more applicable for students, combining checklists with a calendar.'
  },
  {
    question: 'Given the proper resources, what\'s one potential project idea you would like to see implemented by the team?',
    response: '1. An AR-enabled (not necessarily visually), location-based app that allows students to leave behind digital ""graffiti"" on any location in the Cornell campus (and potentially the world!). People can leave behind notes, messages, or bulletin info. There can be an opportunity for mini-games and scavenger hunts. I had experience implementing a similar idea in an Android App using MIT Scratch 2. 2. A student-reported app that tracks the status of dining halls (long lines, special food has run out, etc.).'
  },
  {
    question: 'Which role(s) are you interested in applying for? Pick up to two.',
    response: 'Backend Developer, iOS Developer'
  },
  {
    question: 'Show us what you\'ve done in the past.',
    response: 'https://github.com/ngwattcos'
  },
  {
    question: 'You\'re a developer on a team that\'s implementing a campus-wide event platform. What would you ask your product manager(s), designers, and other developers before starting development?',
    response: '"First, I\'d like to know if I can get involved in the project development! I\'d like to know what kind of tech it targets (mobile? which operating system? web app?) I\'d also like to know how I can help to spread the word and conduct surveys on what students feel about the platform."'
  },
  {
    question: 'Share any additional links that you feel are relevant to your application.',
    response: 'I like cows'
  },
  {
    question: 'Anything else we should know?',
    response: 'As I mentioned, Samwise looks very interesting to me. But it looks unfinished - I\'m very interested in becoming a member of the pod that works on this project. I have Node.js + MongoDB experience from developing a back-end that provides high-throughput (financial transaction) service for users (customers and businesses) and feel these skills would definitely be beneficial to Samwise.'
  }
];

export class Responses extends Component {
    render() {
        return (
            <div>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        title={item.question}
                        description={item.response}
                    />
                </List.Item>
                )}
            />

            <Divider />

            <Form>
                <Form.Item
                    label="Notes"
                    name="notes"
                    rules={[{ required: true, message: 'Review notes are required' }]}
                >
                    <Input
                        placeholder="Thoughts on responses"
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
                    Review Resume
                </Button>
                </Form.Item>
            </Form>
            </div>
        )
    }
}

export default Responses
