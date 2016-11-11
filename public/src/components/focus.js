import React, { Component } from 'react';
import $ from 'jquery';

class Focus extends Component {
  componentDidMount(){
    const focus = document.getElementById('focus');
    focus.scrollIntoView({block:'end', behavior:'smooth'});
    $('#top').hide().slideToggle('fast');
    $('#bottom').hide().slideToggle('fast');
  }
  render () {
    let {away_team_city, away_team_name, home_team_city, home_team_name, venue, location} = this.props.game;
    return (
      <div id='focus' className='focus-game game'>
        <div id='top' className='top-box box'>
          <span>{`${away_team_city} ${away_team_name}`}</span>
          <br/>
          <span>{`${home_team_city} ${home_team_name}`}</span>
        </div>
        <img className='focus-thumbnail' src={this.props.game.video_thumbnails.thumbnail[0].content} />
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