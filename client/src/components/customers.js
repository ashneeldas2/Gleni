import React, { Component } from 'react';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }

  render() {
    return (
      <div>
        <ul style={customersContainer}>
        {this.state.customers.map(customer => 
          <li key={customer.id} style={listStyle}>{customer.firstName} {customer.lastName}</li>
        )}
        </ul>
      </div>
    );
  }
}

const customersContainer = {
  padding: '0',
  listStyle: 'none',
  width: '30%',
  margin: 'auto'
}

const listStyle = {
  fontSize: '1.2rem',
  lineHeight: '2rem',
  borderBottom: '1px dotted #777'
}

export default Customers;
