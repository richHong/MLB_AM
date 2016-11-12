import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { toggleModal } from '../actions/actions';
import _ from 'underscore';

class DetailModal extends Component {
  _toggle(){
    this.props.dispatch(toggleModal());
  }
  render(){
    let {away_team_city, away_team_name, home_team_city, home_team_name, venue, location} = this.props.game;
    return(
      <div>
        <Modal show={this.props.showModal} onHide={e => this._toggle()} bsSize='small' >
          <Modal.Header bsClass='detail-modal'>
            <Modal.Title>{`${away_team_city} ${away_team_name}`} <br/> {`${home_team_city} ${home_team_name}`}</Modal.Title>
            <hr/>
          </Modal.Header>
          <Modal.Body bsClass='detail-modal'>
            <h3>Venue</h3>
            <p>{`${venue}`}</p>
            <br/>
            <h3>Location</h3>
            <p>{`${location}`}</p>
            <hr />
            <h3>Score Board</h3>
            <table className='score-board'>
              <thead className='score-board'>
               <tr>
                <th className='score-board'>Inning</th>
                <th className='score-board'>Away</th> 
                <th className='score-board'>Home</th>
              </tr>
              </thead>
            <tbody className='score-board'>
              {this.props.game.linescore ? this.props.game.linescore.inning.map((inning,i) => {
                return (
                  <tr key={i}>
                    <td className='score-board'>{i+1}</td>
                    {_.map(inning, (score, key) => {
                      return <td className='score-board' key={key}>{score}</td>
                    })}
                  </tr>
                );
              }) : null}
              </tbody>
            </table>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    showModal: state.showModal
  }
}
export default connect(mapStateToProps)(DetailModal);