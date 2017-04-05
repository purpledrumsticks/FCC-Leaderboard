import React, { Component } from 'react';
import './App.css';
import RecentUsers from './RecentUsers'
import AlltimeUsers from './AlltimeUsers'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAllTime: false
    }
  }
  allTime() {
    this.setState = ({
      showAllTime: !this.state.showAllTime
    })
  }
  last30() {
    this.setState = ({
      showAllTime: this.state.showAllTime
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Leaderboard</h1>
        <div className="titles">
          <p>#</p>
          <p>Camper Name</p>
          <button onClick={this.last30.bind(this)}>Points in past 30 days</button>
          <button onClick={this.allTime.bind(this)}>All time points</button>
        </div>
        {this.state.showAllTime ? <AlltimeUsers /> : <RecentUsers />}
      </div>
    );
  }
}


export default App;
