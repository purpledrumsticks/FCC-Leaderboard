import React, { Component } from 'react';
import './App.css';
const $ = require('jquery');

class AlltimeUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }
  componentDidMount() {
      let url = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
      $.getJSON(url, response => {
        this.setState({users: response})
      })
  }
  render() {
    return (
      <div className="App">
        <h1>Leaderboard</h1>
        {this.state.users.map((user, i) => {
          return (
            <div className='listItem' key={user.username}>
              <div className='rank'>{i + 1}</div>
              <div className='user'>
                <img src={user.img} alt="user"/>
                <p>{user.username}</p>
              </div>
              <div className="recentScore">
                {user.recent}
              </div>
              <div className="alltimeScore">
                {user.alltime}
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}


export default AlltimeUsers;
