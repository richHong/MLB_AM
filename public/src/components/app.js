import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './list';
import Logo from './logo';
import {fetchGames} from '../actions/actions';

class App extends Component {
  componentWillMount(){
    this.props.dispatch(fetchGames());
  }
  render() {
    return (
      <div>
        <Logo />
        <List games={this.props.games}/>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    games: state
  }
}
export default connect(mapStateToProps)(App);