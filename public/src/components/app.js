import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './list';
import Logo from './logo';
import Calendar from './calendar';
import {fetchGames} from '../actions/actions';

class App extends Component {
  componentWillMount(){
    this.props.dispatch(fetchGames());
  }
  render() {
    return (
      <div>
        <Logo />
        <List games={this.props.games} />
        <Calendar />
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    games: state.games
  }
}
export default connect(mapStateToProps)(App);