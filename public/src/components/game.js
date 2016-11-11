import React, { Component } from 'react';

class Game extends Component {
  render(){
    return(
      <div className='game'>
        <img src={this.props.game.video_thumbnails.thumbnail[0].content} />
      </div>
    );
  }
}
export default Game;