import React, { Component } from 'react'

export class Head extends Component {
    render() {
        return (
            <div style={headStyle}>
                <svg height = "50%"
                viewBox = "0 0 263 95"
                fill = "none">
                    <path d = "M76.7195 44.3H35.2195V55.8H61.6195C58.1195 64.6 50.1195 69.8 40.6195 69.8C27.4195 69.8 17.2195 59 17.2195 45.9C17.2195 32.7 27.4195 22.3 40.7195 22.3C44.6195 22.3 48.1195 23.1 51.2195 24.7C54.3195 26.2 57.0195 28.5 59.3195 31.6H74.1195V10.6H62.9195V17.2C56.4195 11.6 49.0195 8.7 40.4195 8.7C30.5195 8.7 20.5195 13.1 13.6195 20.3C6.91953 27.4 3.51953 36.4 3.51953 46.1C3.51953 66.7 20.0195 83.4 40.6195 83.4C50.4195 83.4 59.9195 79.2 65.4195 71V82H76.7195V44.3ZM100.847 10.6H81.7469V22H88.6469V70.6H81.2469V82H107.747V70.6H100.847V10.6ZM151.427 66.3C148.427 70.7 143.827 72.7 138.527 72.7C130.927 72.7 124.127 67.3 122.527 59.9H165.727L166.127 55.6C166.127 48 163.927 41.2 158.627 35.6C153.427 30.3 146.027 27 138.627 27C122.727 27 110.827 39.7 110.827 55.5C110.827 71.2 123.327 83.4 138.927 83.4C150.027 83.4 159.927 76.5 164.127 66.3H151.427ZM122.427 50.5C123.927 43.5 130.827 37.9 138.027 37.9C145.927 37.9 152.727 42.8 154.827 50.5H122.427ZM176.135 70.6H169.235V82H195.235V70.6H188.335V55.1C188.335 51.5 188.335 46.9 190.635 43.9C192.835 40.9 196.635 39.4 200.335 39.4C203.935 39.4 207.535 40.8 209.735 43.7C211.835 46.6 211.835 50 211.835 53.3V70.6H204.935V82H230.935V70.6H224.035V49.7C224.035 43.6 223.935 38.9 219.535 34C215.635 29.8 209.935 27.4 204.135 27.4C197.535 27.4 191.535 30.3 188.335 36.2V28.6H169.235V40H176.135V70.6Z" fill = "#2F2F2F" />
                    <path d = "M252.6 28.6H233.5V40H240.4V70.6H233.4V82H259.5V70.6H252.6V28.6ZM252.6 10.6H240.4V23.5H252.6V10.6Z" fill = "#32DE8A" />
                </svg>
            </div>
        )
    }
}

const headStyle = {
    width: '100%',
    height: '62px',
    backgroundColor: '#FFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export default Head