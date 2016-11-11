import React, { Component } from 'react';
import { connect } from 'react-redux';

class Calendar extends Component {
  _formatDate(date){
    const local = new Date(date);
    local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
  }
  render(){
    return(
      <div className='calendar-container container'>
        <input type='date' defaultValue={this._formatDate(this.props.date)}/>
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