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
  allTime = () => {
    this.setState = ({
      showAllTime: !this.state.showAllTime
    })
  }
  last30 = () => {
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
          <button className="last30" onClick={this.last30}>Points in past 30 days</button>
          <button className="all" onClick={this.allTime}>All time points</button>
        </div>
        {this.state.showAllTime ? <AlltimeUsers /> : <RecentUsers />}
      </div>
    );
  }
}


export default App;
