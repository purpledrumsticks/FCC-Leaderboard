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
    this.setState({
      showAllTime: true
    })
  }
  last30() {
    this.setState({
      showAllTime: false
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Free Code Camp Leaderboard</h1>
        <table className="theTable">
          <thead className="titles">
            <tr>
              <th>#</th>
              <th>Camper Name</th>
              <th className="toggle" onClick={this.last30.bind(this)}>Points in past 30 days</th>
              <th className="toggle" onClick={this.allTime.bind(this)}>All time points</th>
            </tr>
          </thead>
          {this.state.showAllTime ? <AlltimeUsers /> : <RecentUsers />}
      </table>
      </div>
    );
  }
}


export default App;
