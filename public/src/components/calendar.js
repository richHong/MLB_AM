import React, 
       { Component }         from 'react';
import { connect }           from 'react-redux';
import { bindActionCreators} from 'redux';
import { changeDate, 
         updateGames,
         showWarnToast }     from '../actions/actions';
import moment                from 'moment';
import $                     from 'jquery';
import _                     from 'underscore';

export class Calendar extends Component {
  constructor() {
    super();
    this._updateGameDay = _.debounce(this._updateGameDay, 90); // I found 90ms to work the best in terms of responsiveness and limiting requests
    this._updateDate    = _.debounce(this._updateDate, 20);
  }
  componentWillMount() {
    $(document).on('keydown', event => {
      const key = event.keyCode;
      if (key === 38 || key === 40) {
        this._handleKeyDown(key);
      }
    });
  }
  componentWillUnmount() {
    $(document).off('keydown');
  }
  componentDidUpdate(){
    this._updateGameDay();
  }
  _calcDate(days) {
    const newDate  = moment(this.props.date).add(days,'days');
    const timeDiff = newDate - new Date();
    return timeDiff > 0  ? this.props.date : newDate; // Limits date up until today
  }
  _handleKeyDown(code) {
    if (code === 38){        // Up Arrow Key
      this._updateDate(1);
    } else if (code === 40){ // Down Arrow Key
      this._updateDate(-1);
    }
  }
  _formatDate(date) {
    return moment(date).format('L'); //Moment used to format date object to MM/DD/YYYY
  }
  _updateDate(diff) {
    const newDate     = this._calcDate(diff);
    const formNewDate = this._formatDate(newDate);
    const formDate    = this._formatDate(this.props.date);
    formNewDate === formDate ? this.props.showWarnToast() : this.props.changeDate(newDate);
  }
  _updateGameDay() {
    this.props.updateGames(this._formatDate(this.props.date));
  }
  render() {
    return (
      <div className='calendar-container'>
        <div>{this._formatDate(this.props.date)}</div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeDate, updateGames, showWarnToast}, dispatch)
}
export default connect(null, mapDispatchToProps)(Calendar);