import React, 
       { Component }  from 'react';
import $              from 'jquery';
import scrollIntoView from 'scroll-into-view';
import { imgError, 
         replaceImg } from '../helpers/imgError';

export default class Focus extends Component {
  componentDidMount() {
    $('.bounce').hide().slideToggle('fast');
    scrollIntoView(document.getElementById('focus'));
  }
  render() {
    const {away_team_city, 
           away_team_name, 
           home_team_city, 
           home_team_name, 
           venue, 
           location, 
           video_thumbnail} = this.props.game;
    return (
      <div id='focus' className='focus-game' onClick={e => this.props._toggleModal()}>
        <div className='top-box'>
          <span>{away_team_city} @</span>
          <br/>
          <span>{home_team_city}</span>
        </div>
        <img className='focus-thumbnail bounce' 
             src={video_thumbnail || replaceImg} 
             onError={err => imgError(this.img)} 
             ref={img => this.img = img}/>
        <div className='bottom-box'>
          <span>{venue}</span>
          <br/>
          <span>{location}</span>
        </div>
      </div>
    );
  }
}