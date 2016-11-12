import React, { Component } from 'react';
const replaceImg = 'http://vignette3.wikia.nocookie.net/logopedia/images/e/ec/MLB.png';
class Game extends Component {
  _imgError(image) {
    image.onerror = '';
    image.src = replaceImg
    return true;
  }
  render(){
    return(
      <div className='game'>
        <img className='thumbnail' src={this.props.game.video_thumbnail || replaceImg} onError={err => this._imgError(this.img)} ref={img => this.img = img} />
      </div>
    );
  }
}
export default Game;