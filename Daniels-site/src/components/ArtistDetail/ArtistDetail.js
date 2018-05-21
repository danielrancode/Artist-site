import React from 'react';
import ReactDOM from 'react-dom';
import './ArtistDetail.css';
import { Link } from 'react-router-dom';
import base from '../../base';


class ArtistDetail extends React.Component {
    constructor() {
    super();
    this.state = {
        artists: {}
            }
        }

    render(){
        const artistId = this.props.match.params.pid;
        const myArtist = this.state.artists[artistId];

        if (myArtist) {
            this.artistName = myArtist.name;
            this.artistInstrument = myArtist.instrument;
            this.artistBio = myArtist.bio;
            this.artistPhoto = require(`../../assets/img/${myArtist.photo}`);
        }

        return (
            <div className='my-artist'>
                <img src={this.artistPhoto} />
                <ul >
                    <li className='name'>{this.artistName} ({this.artistInstrument})</li>
                    <li className='bio'>{this.artistBio}</li>
                    <li>  <Link to={'/about'}><button>Back</button></Link></li>
                </ul>
            </div>
        )
    }

    componentWillMount(){
        this.artistsRef = base.syncState('artists', {
          context: this,
          state: 'artists'
        })
      }
    
      componentWillUmount(){
        base.removeBinding(this.artistsRef)
      }  
}

export default ArtistDetail;