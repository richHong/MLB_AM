import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeDate, updateGames } from '../actions/actions';
import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

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
    return moment(this.props.date).add(days,'days');
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
    return moment(date).format('L');
  }
  _updateGameDay(){
    this.props.dispatch(updateGames(this._formatDate(this.props.date)));
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