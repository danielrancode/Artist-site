import React from 'react';
import { Link } from 'react-router-dom';
import base from '../../base';


class Artist extends React.Component {

    render() {
        const {details} = this.props;
        return (
                <li>
                    <div className='artist-list-item'>
                        <img src={require(`../../assets/img/${details.photo}`)}/>
                        <ul>
                            <li className="name"><Link to={`/about/${this.props.index}`}>{details.name}</Link></li>
                            <li className="credit">{details.instrument}</li>
                            <button onClick={() => { this.props.removeArtist(this.props.index) } }>x</button>
                        </ul>
                    </div>
                </li>
                )
            }
        }    

export default Artist;