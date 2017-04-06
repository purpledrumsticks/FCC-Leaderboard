import React, { Component } from 'react';
import './App.css';
const $ = require('jquery');

class RecentUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }
  componentDidMount() {
      let url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
      $.getJSON(url, response => {
        this.setState({users: response})
      })
  }
  render() {
    return (
      <tbody className="user">
        {this.state.users.map((user, i) => {
          return (
            <tr className="userTable" key={user.username}>
              <th>{i + 1}</th>
              <th><img src={user.img}  alt="user"/>{user.username}</th>
              <th className="points">{user.recent}</th>
              <th className="points">{user.alltime}</th>
            </tr>
          )
        })}
      </tbody>
    );
  }
}


export default RecentUsers;
