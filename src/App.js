import React, { Component } from 'react';
import './App.css';
//import RecentUsers from './RecentUsers';
//import AlltimeUsers from './AlltimeUsers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showAllTime, showRecent } from './actions';
import Users from './Users';

class App extends Component {
  constructor(props) {
    super(props);

    this.last30 = this.last30.bind(this);
    this.allTime =this.allTime.bind(this);
  }

  componentDidMount() {
    this.props.showRecent()
  }

  allTime() {
    this.props.showAllTime()
  }

  last30() {
    this.props.showRecent()
  }

  render() {
    return (
      <div className="App">
        <h1>Leaderboard</h1>
        <table className="theTable">
          <thead className="titles">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th className="toggle" onClick={this.last30}>Points in past 30 days</th>
              <th className="toggle" onClick={this.allTime}>All time points</th>
            </tr>
          </thead>
        <Users users={this.props.board}/>
      </table>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showAllTime, showRecent }, dispatch);
}

function mapStateToProps(state) {
  return {board: state};
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
