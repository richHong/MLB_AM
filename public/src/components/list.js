import React, { Component } from 'react';
import Game from './game';
import Focus from './focus';
import $ from 'jquery';

class List extends Component {
  constructor(){
    super();
    this.state={
      focusIndex: 0
    };
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
      newIndex = ++this.state.focusIndex;
      if (newIndex > this.props.games.length - 1) {
        newIndex = this.props.games.length - 1;
      }
      this.setState({focusIndex: newIndex});
    } else if (code === 37) {
      newIndex = --this.state.focusIndex;
      if (newIndex < 0) {
        newIndex = 0;
      }
      this.setState({focusIndex: newIndex});
    }
  }
  _renderGame(game,index){
    if (index === this.state.focusIndex) {
      return <Focus game={game} key={index} />
    } else {
      return <Game game={game} key={index} />
    }
  }
  render(){
    console.log(this.props.games)
    return(
      <div className='list'>
        {this.props.games.map((game,i) => {
          return this._renderGame(game,i)
        })}
      </div>  
    );
  }
}
export default List;