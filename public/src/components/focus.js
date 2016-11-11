import React, { Component } from 'react';

class Focus extends Component {
  render () {
    let {away_team_city, away_team_name, home_team_city, home_team_name, venue, location} = this.props.game;
    return (
      <div id='focus' className='focus-game bounce'>
        <div className='top-box'>
          <span>{`${away_team_city} ${away_team_name}`}</span>
          <br/>
          <span>{`${home_team_city} ${home_team_name}`}</span>
        </div>
        <img className='focus-thumbnail' src={this.props.game.video_thumbnails.thumbnail[0].content} />
        <div className='bottom-box'>
        <span>{`${venue}`}</span>
        <br/>
        <span>{`${location}`}</span>
        </div>
      </div>
    );
  }
}
export default Focus;