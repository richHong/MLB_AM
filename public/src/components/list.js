import React, 
       { Component }         from 'react';
import { connect }           from 'react-redux';
import { bindActionCreators} from 'redux';
import $                     from 'jquery';
import Game                  from './game';
import Focus                 from './focus';
import { changeIndex, 
         toggleModal }       from '../actions/actions';

export class List extends Component {
  componentWillMount() {
    $(document).on('keydown', event => {
      const key = event.keyCode;
      if (key === 13 || key === 37 || key === 39){
        this._handleKeyDown(key);
      }
    });
  }
  componentWillUnmount() {
    $(document).off('keydown');
  }
  _handleKeyDown(code) {
    let newIndex;
    if (code === 39) {        // Right Arrow Key
      newIndex = this.props.index + 1;
      if (newIndex <= this.props.games.length - 1) {
        this.props.changeIndex(newIndex);
      }
    } else if (code === 37) { // Left Arrow Key
      newIndex = this.props.index - 1;
      if (newIndex >= 0) {
        this.props.changeIndex(newIndex);
      }
    } else if (code === 13) { // Enter Key
      this.props.toggleModal();
    }
  }
  _handleClick(index) {
    this.props.changeIndex(index);
  }
  _renderGame(game,index) {
    return index === this.props.index ? <Focus game={game} key={index} _toggleModal={this.props.toggleModal.bind(this)}/> : <Game _handleClick={this._handleClick.bind(this)} index={index} game={game} key={index} />;
  }
  render() {
    return (
      <div className='list' id='list'>
        {this.props.games.map((game,i) => {
          return this._renderGame(game,i)
        })}
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeIndex, toggleModal}, dispatch)
}
export default connect(null, mapDispatchToProps)(List);
