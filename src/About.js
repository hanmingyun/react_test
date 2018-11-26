import React, { Component } from 'react';
import Page from './Page';
import Link from 'react-router-dom/Link';

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id
    var that = this;
    var url = `https://api.github.com/users/${id}`
  
    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      that.setState({ user: data });
    });
  }

  render() {
    let user = this.state.user
    return (
      <Page color="#000000" background="#FFFFFF">
        <div className="header">
          <Link 
            to={{
              pathname: '/',
              state: { prev: false },
            }} 
            className="nav__link"
          >&lt; Back</Link>
          <div className="title">Person</div>
        </div>
        <div className="wrapper">
          <div className="left">
            <img src={user.avatar_url} width="30" className="avatar"/>
          </div>
          <div className="left info">
            <div className="name">{user.name ? user.name : 'Unknown'}</div>
            <div className="location">{user.location ? user.location : 'Unknown'}</div>
          </div>
          <div className="clearfix"></div>
        </div>
      </Page>
    );
  }
}