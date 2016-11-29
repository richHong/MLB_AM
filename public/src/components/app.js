import React, 
       { Component }         from 'react';
import { bindActionCreators} from 'redux';
import { connect }           from 'react-redux';
import { fetchInitGames }    from '../thunks/thunks';
import List                  from './list';
import Logo                  from './logo';
import NoGames               from './noGames';
import Spinner               from './spinner';
import Calendar              from './calendar';
import DetailModal           from './modal';
import Notifications, 
       {notify}              from 'react-notify-toast';
import { hideWarnToast, 
         hideErrorToast }    from '../actions/actions'; 

export class App extends Component {
  componentWillMount() {
    this.props.fetchInitGames();
  }
  componentDidUpdate() {
    const { warning, error, errMsg } = this.props.toast;
    if(warning) {
      notify.show('Cannot exceed today\'s date', 'warning', 2500);
      this.props.hideWarnToast();
    } else if (error){
      notify.show(errMsg.message, 'error');
      this.props.hideErrorToast();
    }
  }
  render() {
    const {games, index, showSpinner, date, showModal} = this.props;
    return (
      <div className='main-container'>
        <Logo />
        {games.length ? <DetailModal game={games[index]} showModal={showModal}/> : <NoGames showSpinner={showSpinner}/>}
        {showSpinner ? <Spinner /> : null}
        <List games={games} index={index}/>
        <Calendar date={date}/>
        <Notifications />
      </div>
    )
  }
}
function mapStateToProps({games, index, showSpinner, date, showModal, toast}) {
  return {games, index, showSpinner, date, showModal, toast};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchInitGames, hideWarnToast, hideErrorToast }, dispatch);
}
App.propTypes = {
   games:          React.PropTypes.array,
   index:          React.PropTypes.number,
   showSpinner:    React.PropTypes.bool,
   date:           React.PropTypes.object,
   showModal:      React.PropTypes.bool,
   toast:          React.PropTypes.object,
   dispatch:       React.PropTypes.func,
   fetchInitGames: React.PropTypes.func,
   hideWarnToast:  React.PropTypes.func,
   hideErrorToast: React.PropTypes.func
}
export default connect(mapStateToProps, mapDispatchToProps)(App);