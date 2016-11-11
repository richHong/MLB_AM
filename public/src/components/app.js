import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './list';

class App extends Component {
  componentWillMount(){

  }
  render() {
    return (
      <div>
        <List />
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    example: state.example
  }
}
export default connect(mapStateToProps)(App);