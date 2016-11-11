import React, { Component } from 'react';
import Game from './game';
import Focus from './focus';

class List extends Component {
  constructor(){
    super();
    this.state={
      focusIndex: 0
    };
  }
  componentWillMount () {
    document.addEventListener('keydown', event => {
      this._handleKeyDown(event.key);
    });
  }
  componentWillUnmount () {
    document.removeEventListener('keydown', event => {
      this._handleKeyDown(event.key);
    });
  }
  _handleKeyDown(key) {
    let newIndex;
    if (key === 'ArrowRight') {
      newIndex = ++this.state.focusIndex;
      if (newIndex > this.props.games.length - 1) {
        newIndex = this.props.games.length - 1;
      }
      this.setState({focusIndex: newIndex});
    } else if (key === 'ArrowLeft') {
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