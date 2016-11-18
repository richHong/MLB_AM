import React, 
       { Component }         from 'react';
import { Modal, Button }     from 'react-bootstrap';
import { toggleModal }       from '../actions/actions';
import { bindActionCreators} from 'redux';
import { connect }           from 'react-redux';
import _                     from 'underscore';

export class DetailModal extends Component {
  render() {
    const { away_team_city, 
            away_team_name, 
            home_team_city, 
            home_team_name, 
            venue, location, 
            video_thumbnail,
            linescore, 
            time_date, 
            time_zone,
            away_name_abbrev,
            home_name_abbrev } = this.props.game;
    const {toggleModal, showModal} = this.props;
    let awayScore = 0, homeScore = 0;
    return(
      <div>
        <Modal show={showModal} onHide={e => toggleModal()} bsSize='small'>
          <Modal.Header bsClass='detail-modal'>
            <Modal.Title>
              <div className='floater-right'>
                <div className={away_name_abbrev+' sprite'}></div>
                <div className='mod-title'>{away_team_name}</div>
              </div>
              <div className='floater-left'> 
                <div className={home_name_abbrev+' sprite'}></div>
                <div className='mod-title'>{home_team_name}</div>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body bsClass='detail-modal'>
           
            <div>
              <br/>
              <div>{venue}</div>
              <div>{location}</div>
              <div>{`${time_date.slice(5,10)}/${time_date.slice(0,4)}`}</div>
              <br/>
            </div>

            <table className='score-board'>
              <thead>
               <tr>
                <th><b>Inning</b></th>
                <th><b>{home_team_name}</b></th>
                <th><b>{away_team_name}</b></th> 
              </tr>
              </thead>
            <tbody>
              {linescore ? linescore.inning.map((inning,i) => {
                return (
                  <tr key={i}>
                    <td>{i+1}</td>
                    {_.map(inning, (score, key) => {
                      if (key === 'away'){awayScore += +score}
                      else if (key === 'home'){homeScore += +score}
                      return <td key={key}>{score}</td>
                    })}
                  </tr>
                );
              }) : null}
                <tr>
                  <th><b>Final</b></th>
                  <td><b>{homeScore}</b></td>
                  <td><b>{awayScore}</b></td>
                </tr>
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={e => toggleModal()}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({toggleModal}, dispatch)
}
export default connect(null, mapDispatchToProps)(DetailModal);