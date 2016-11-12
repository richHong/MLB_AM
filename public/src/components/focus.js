import React, { Component } from 'react';
import $ from 'jquery';
const replaceImg = '../../assets/replace.png';

class Focus extends Component {
  componentDidMount(){
    $('#top').hide().slideToggle('fast');
    $('#bottom').hide().slideToggle('fast');
    const focus = document.getElementById('focus');
    focus.scrollIntoView({block:'end', behavior:'smooth'});
  }
  _imgError(image) {
    image.onerror = '';
    image.src = replaceImg;
    return true;
  }
  render () {
    const {away_team_city, away_team_name, home_team_city, home_team_name, venue, location, video_thumbnail} = this.props.game;
    return (
      <div id='focus' className='focus-game game'>
        <div id='top' className='top-box box'>
          <span>{`${away_team_city} ${away_team_name}`}</span>
          <br/>
          <span>{`${home_team_city} ${home_team_name}`}</span>
        </div>
        <img className='focus-thumbnail thumbnail' src={video_thumbnail || replaceImg} onError={err => this._imgError(this.img)} ref={img => this.img = img}/>
        <div id='bottom' className='bottom-box box'>
          <span>{`${venue}`}</span>
          <br/>
          <span>{`${location}`}</span>
        </div>
      </div>
    );
  }
}
export default Focus;