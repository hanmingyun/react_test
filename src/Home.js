import React, { Component } from 'react';
import Page from './Page';
import Link from 'react-router-dom/Link';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    var that = this;
    var url = 'https://api.github.com/users'
  
    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      // console.log(data);
      that.setState({ users: data });
    });
  }
  

  render() {
    let rows = []
    let users = this.state.users
    console.log(users)

    users.forEach((row, index) => {
      rows.push(
        <div className="user-tab" key={`user-${index}`}>
          <Link 
            to={{
              pathname: `/about/${row.id}`,
              state: { prev: true },
            }}
            className="nav__link"
          >
            {row.login}
          </Link>
        </div>
      )
    })
    return (
      <Page color="#000000" background="#FFFFFF">
        <div className="header">
          <div className="title">Home</div>
        </div>

        <div className="wrapper">
          {rows}
          <div className="clearfix"></div>
        </div>
      </Page>
    );
  }
}