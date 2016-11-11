import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './list';
import {fetchGames} from '../actions/actions';

class App extends Component {
  componentWillMount(){
    this.props.dispatch(fetchGames());
  }
  render() {
    return (
      <div>
        <div className='logo-container'>
        <img className='logo' src='http://www.oneaccountproducts.com/images/MLB.png' />
        </div>
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