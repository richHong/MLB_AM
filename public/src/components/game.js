import React, { Component } from 'react';

class Game extends Component {
  _imgError(image) {
    image.onerror = '';
    image.src = 'http://vignette3.wikia.nocookie.net/logopedia/images/e/ec/MLB.png';
    return true;
  }
  render(){
    let pic; 
    this.props.game.video_thumbnails ? pic = this.props.game.video_thumbnails.thumbnail[0].content : pic = 'http://vignette3.wikia.nocookie.net/logopedia/images/e/ec/MLB.png';
    return(
      <div className='game'>
        <img className='thumbnail' src={pic} onError={err => this._imgError(this.img)} ref={img => this.img = img} />
      </div>
    );
  }
}
export default Game;