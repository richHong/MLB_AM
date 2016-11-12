import React, { Component } from 'react';

class Spinner extends Component {
  render(){
    return(
      <div className='spinner-container container'>
        <img className='spinner'src='../../assets/spinner.gif'/>
      </div>
    );
  }
}
export default Spinner;