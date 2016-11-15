import React, 
       { Component }         from 'react';
import { Modal, Button }     from 'react-bootstrap';
import { toggleModal }       from '../actions/actions';
import { bindActionCreators} from 'redux';
import { connect }           from 'react-redux';
import _                     from 'underscore';
import { imgError, 
         replaceImg }        from '../helpers/imgError';

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
            time_zone} = this.props.game;
    const {toggleModal, showModal} = this.props;
    return(
      <div>
        <Modal show={showModal} onHide={e => toggleModal()} bsSize='small' >
          <Modal.Header bsClass='detail-modal'>
            <Modal.Title>
              {`${away_team_city} ${away_team_name}`} 
              <br/> 
              {`${home_team_city} ${home_team_name}`}
            </Modal.Title>
            <hr/>
          </Modal.Header>
          <Modal.Body bsClass='detail-modal'>
          
            <img className='modal-pic' 
                 src={video_thumbnail || replaceImg} 
                 onError={err => imgError(this.img)} 
                 ref={img => this.img = img}/>
            <hr />
            <div>{venue}</div>
            <div>{location}</div>
            <div>{`${time_date.slice(5,10)}/${time_date.slice(0,4)} ${time_date.slice(11)} ${time_zone}`}</div>
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
              {linescore ? linescore.inning.map((inning,i) => {
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
function mapDispatchToProps(dispatch) {
  return bindActionCreators({toggleModal}, dispatch)
}
export default connect(null, mapDispatchToProps)(DetailModal);