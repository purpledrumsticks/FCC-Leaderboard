import React, { Component } from 'react';
import './App.css';

class Users extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tbody className="user">
        {this.props.users.map((user, i) => {
          return (
            <tr className="userTable" key={i + 1}>
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



export default Users;
