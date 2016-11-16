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

export class App extends Component {
  componentWillMount() {
    this.props.fetchInitGames();
  }
  render() {
    const {games, index, showSpinner, date, showModal} = this.props;
    return (
      <div>
        <Logo />
        {games.length ? <DetailModal game={games[index]} showModal={showModal}/> : <NoGames showSpinner={showSpinner}/>}
        {showSpinner ? <Spinner /> : null}
        <List games={games} index={index}/>
        <Calendar date={date}/>
      </div>
    )
  }
}
function mapStateToProps({games, index, showSpinner, date, showModal}) {
  return {games, index, showSpinner, date, showModal}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchInitGames}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);