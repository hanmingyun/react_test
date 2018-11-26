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
      var data = ["GrahamCampbell","fabpot","weierophinney","rkh","josh"];
      this.setState({ users: data });
  }
  

  render() {
    let rows = []
    let users = this.state.users
    users.forEach((row, index) => {
      rows.push(
        <div className="user-tab" key={`user-${index}`}>
          <Link 
            to={{
              pathname: `/about/${row}`,
              state: { prev: true },
            }}
            className="nav__link"
          >
            {row}
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
          <div className="top5">Top 5 Github Users</div>
          <div className="description">Tap the username to see more information</div>
          {rows}
          <div className="clearfix"></div>
        </div>
      </Page>
    );
  }
}