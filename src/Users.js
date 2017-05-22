import React, { Component } from 'react';
import './App.css';

const Users = ({users}) =>
    <tbody className="user">
      {users.map((user, i) =>
          <tr className="userTable" key={i + 1}>
            <th>{i + 1}</th>
            <th><img src={user.img}  alt="user"/>{user.username}</th>
            <th className="points">{user.recent}</th>
            <th className="points">{user.alltime}</th>
          </tr>
      )}
    </tbody>

export default Users;
