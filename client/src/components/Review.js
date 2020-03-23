import React, { Component } from 'react';
import './Review.css';

export class Review extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header light">
                    <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Scott Wang</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Scores</a>
                    </li>
                    </ul>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                        <h5 className="card-title">Graduation Year</h5>
                        <p className="card-text">May 2022</p>
                        <h5 className="card-title">Have you taken any of our courses before? And if so, which ones?</h5>
                        <p className="card-text">Both</p>
                        <h5 className="card-title">Why do you want to be a part of Cornell Design & Tech Initiative?</h5>
                        <p className="card-text">I want to further grow my skills in software development (full-stack, mobile) by taking part of a team effort in developing and shipping full-scale projects from start to finish (or by jumping in!). As a maker, I also love undertaking cool projects that can help other students' (and people) lives just a little better.</p>
                        <h5 className="card-title">Which one of our projects is most interesting to you and why?</h5>
                        <p className="card-text">Samwise. It rethinks the problem of taking notes in terms of something much more applicable for students, combining checklists with a calendar.</p>
                        <h5 className="card-title">Given the proper resources, what's one potential project idea you would like to see implemented by the team?</h5>
                        <p className="card-text">1. An AR-enabled (not necessarily visually), location-based app that allows students to leave behind digital "graffiti" on any location in the Cornell campus (and potentially the world!). People can leave behind notes, messages, or bulletin info. There can be an opportunity for mini-games and scavenger hunts. I had experience implementing a similar idea in an Android App using MIT Scratch 2. 2. A student-reported app that tracks the status of dining halls (long lines, special food has run out, etc.).</p>
                    </div>
                    <div className="col-md-6">
                        <h5 className="card-title">Which role(s) are you interested in applying for? Pick up to two.</h5>
                        <p className="card-text">Backend Developer, iOS Developer</p>
                        <h5 className="card-title">Show us what you've done in the past.</h5>
                        <p className="card-text">https://github.com/ngwattcos</p>
                        <h5 className="card-title">You're a developer on a team that's implementing a campus-wide event platform. What would you ask your product manager(s), designers, and other developers before starting development?</h5>
                        <p className="card-text">First, I'd like to know if I can get involved in the project development! I'd like to know what kind of tech it targets (mobile? which operating system? web app?) I'd also like to know how I can help to spread the word and conduct surveys on what students feel about the platform.</p>
                        <h5 className="card-title">Anything else we should know?</h5>
                        <p className="card-text">As I mentioned, Samwise looks very interesting to me. But it looks unfinished - I'm very interested in becoming a member of the pod that works on this project. I have Node.js + MongoDB experience from developing a back-end that provides high-throughput (financial transaction) service for users (customers and businesses) and feel these skills would definitely be beneficial to Samwise.</p>
                    </div>
                        </div>
                    </div>
                    <input className="notes" type="text" placeholder="Notes" />
                    <div className="card-footer footer"> Review Resume </div>
                </div>
        )
    }
}

export default Review
