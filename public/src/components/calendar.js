import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeDate, updateGames } from '../actions/actions';
import $ from 'jquery';
import _ from 'underscore';

class Calendar extends Component {
  constructor(){
    super();
    this._updateGameDay = _.debounce(this._updateGameDay, 90);
  }
  componentWillMount () {
    $(document).on('keydown', event => {
      this._handleKeyDown(event.keyCode);
    });
  }
  componentWillUnmount () {
    $(document).off('keydown', event => {
      this._handleKeyDown(event.keyCode);
    });
  }
  _updateDate(days){
    const date = new Date(this.props.date);
    date.setDate(date.getDate() + days);
    return date;
  }
  _handleKeyDown(code){
    if (code === 38){
      this.props.dispatch(changeDate(this._updateDate(1)));
      this._updateGameDay();
    } else if (code === 40){
      this.props.dispatch(changeDate(this._updateDate(-1)));
      this._updateGameDay();
    }
  }
  _formatDate(date){
    const local = new Date(date);
    local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    const newDate = local.toJSON().slice(0, 10);
    return `${newDate.slice(5,7)} / ${newDate.slice(8,10)} / ${newDate.slice(0,4)}`;
  }
  _updateGameDay(){
    this.props.dispatch(updateGames(this.props.date));
  }
  render(){
    return(
      <div className='calendar-container container'>
        <h1>{this._formatDate(this.props.date)}</h1>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    date: state.date
  }
}
export default connect(mapStateToProps)(Calendar);