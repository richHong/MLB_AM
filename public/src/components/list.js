import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from './game';
import Focus from './focus';
import $ from 'jquery';
import { changeIndex } from '../actions/actions';

class List extends Component {
  constructor(){
    super();
  }
  componentWillMount () {
    $(document).on('keydown', event => {
      this._handleKeyDown(event.keyCode);
    });
  }
  componentWillUnmount () {
    $(document).off('keydown', event => {
      this._handleKeyDown(event.keyCode);
    });
  }
  _handleKeyDown(code) {
    let newIndex;
    if (code === 39) {
      newIndex = this.props.index + 1;
      if (newIndex > this.props.games.length - 1) {
        newIndex = this.props.games.length - 1;
      }
      this.props.dispatch(changeIndex(newIndex));
    } else if (code === 37) {
      newIndex = this.props.index - 1;
      if (newIndex < 0) {
        newIndex = 0;
      }
      this.props.dispatch(changeIndex(newIndex));
    }
  }
  _renderGame(game,index){
    if (index === this.props.index) {
      return <Focus game={game} key={index} />
    } else {
      return <Game game={game} key={index} />
    }
  }
  render(){
    console.log(this.props)
    return(
      <div className='list'>
        {this.props.games.map((game,i) => {
          return this._renderGame(game,i)
        })}
      </div>  
    );
  }
}
function mapStateToProps(state){
  return {
    index: state.index
  }
}
export default connect(mapStateToProps)(List);