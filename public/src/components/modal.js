import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { toggleModal } from '../actions/actions';
import _ from 'underscore';

class DetailModal extends Component {
  close(){
    this.props.dispatch(toggleModal());
  }
  render(){
    let {away_team_city, away_team_name, home_team_city, home_team_name, venue, location} = this.props.game;
    return(
      <div className='detail-modal'>
        <Modal show={this.props.showModal} onHide={e => this.close()} bsSize='small'>
          <Modal.Header closeButton>
            <Modal.Title>{`${away_team_city} ${away_team_name}`} <br/> {`${home_team_city} ${home_team_name}`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>Venue:</h3>
            <p>{`${venue}`}</p>
            <br/>
            <h3>Location:</h3>
            <p>{`${location}`}</p>
            <hr />
            <h3>Score Board:</h3>
            <table>
              <thead>
               <tr>
                <th>INNING_</th>
                <th>AWAY_</th> 
                <th>_HOME</th>
              </tr>
              </thead>
            <tbody>
              {this.props.game.linescore.inning.map((inning,i) => {
                return (
                  <tr key={i}>
                    <td>___{i+1}____</td>
                    {_.map(inning, (score, key) => {
                      return <td key={key}>___{score}___</td>
                    })}
                  </tr>
                );
              })}
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