import React, { Component } from 'react';

class Game extends Component {
  render(){
    let pic; 
    this.props.game.video_thumbnails ? pic = this.props.game.video_thumbnails.thumbnail[0].content : pic = 'http://vignette3.wikia.nocookie.net/logopedia/images/e/ec/MLB.png';
    return(
      <div className='game'>
        <img className='thumbnail' src={pic} />
      </div>
    );
  }
}
export default Game;