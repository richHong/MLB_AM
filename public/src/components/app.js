import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './list';
import Logo from './logo';
import Calendar from './calendar';
import {fetchGames} from '../actions/actions';
import DetailModal from './modal';

class App extends Component {
  componentWillMount(){
    this.props.dispatch(fetchGames());
  }
  render() {
    return (
      <div>
        {this.props.games.length ? <DetailModal game={this.props.games[this.props.index]}/> : null}
        <Logo />
        {this.props.games.length ? null : <div className='no-games'>No Games Available</div>}
        <List games={this.props.games} />
        <Calendar />
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    games: state.games,
    index: state.index
  }
}
export default connect(mapStateToProps)(App);