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
    let {away_team_city, away_team_name, home_team_city, home_team_name, venue, location, video_thumbnail} = this.props.game;
    return(
      <div>
        <Modal show={this.props.showModal} onHide={e => this._toggle()} bsSize='small' >
          <Modal.Header bsClass='detail-modal'>
            <Modal.Title>{`${away_team_city} ${away_team_name}`} <br/> {`${home_team_city} ${home_team_name}`}</Modal.Title>
            <hr/>
          </Modal.Header>
          <Modal.Body bsClass='detail-modal'>
            <img className='modal-pic' src={video_thumbnail}/>
            <hr />
            <p>{`${venue}`}</p>
            <br />
            <p>{`${location}`}</p>
            <hr />
            <table className='score-board'>
              <thead>
               <tr>
                <th>Inning</th>
                <th>Away</th> 
                <th>Home</th>
              </tr>
              </thead>
            <tbody>
              {this.props.game.linescore ? this.props.game.linescore.inning.map((inning,i) => {
                return (
                  <tr key={i}>
                    <td>{i+1}</td>
                    {_.map(inning, (score, key) => {
                      return <td key={key}>{score}</td>
                    })}
                  </tr>
                );
              }) : null}
              </tbody>
            </table>
            <br />
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