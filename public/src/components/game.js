import React, { Component } from 'react';
const replaceImg = '../../assets/replace.png';

class Game extends Component {
  _imgError(image) {
    image.onerror = '';
    image.src = replaceImg;
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