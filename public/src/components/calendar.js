import React, 
       { Component }         from 'react';
import { connect }           from 'react-redux';
import { bindActionCreators} from 'redux';
import { changeDate, 
         updateGames }       from '../actions/actions';
import moment                from 'moment';
import $                     from 'jquery';
import _                     from 'underscore';

class Calendar extends Component {
  constructor() {
    super();
    this._updateGameDay = _.debounce(this._updateGameDay, 90);
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
  _calcDate(days) {
    return moment(this.props.date).add(days,'days');
  }
  _handleKeyDown(code) {
    if (code === 38){
      this._updateDate(1);
      this._updateGameDay();
    } else if (code === 40){
      this._updateDate(-1);
      this._updateGameDay();
    }
  }
  _formatDate(date) {
    return moment(date).format('L');
  }
  _updateDate(diff) {
    this.props.changeDate(this._calcDate(diff));
  }
  _updateGameDay() {
    this.props.updateGames(this._formatDate(this.props.date));
  }
  render() {
    return (
      <div className='calendar-container container'>
        <div>{this._formatDate(this.props.date)}</div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeDate, updateGames}, dispatch)
}
export default connect(null, mapDispatchToProps)(Calendar);