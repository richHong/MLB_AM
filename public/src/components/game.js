import React, 
       { Component }  from 'react';
import { imgError, 
         replaceImg } from '../helpers/imgError';

export default class Game extends Component {
  render() {
    const {video_thumbnail} = this.props.game;
    return (
      <div className='game'>
        <img className='thumbnail' 
             src={video_thumbnail || replaceImg} 
             onError={err => imgError(this.img)} 
             ref={img => this.img = img} />
      </div>
    );
  }
}