import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ArtistDetail from '../ArtistDetail/ArtistDetail';
import AddArtistForm from '../AddArtistForm/AddArtistForm';
import Artist from '../Artist/Artist';
import './Artists.css';
import base from '../../base';

// **** IMPORT DATA
import artistsObject from '../../assets/data/artists-object'

// **** Artists component
class Artists extends Component {
  constructor() {
    super();
    this.removeArtist = this.removeArtist.bind(this);
    this.addArtist = this.addArtist.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.state = {
      artists: {}
     }
    }

    addArtist(newArtist){
        newArtist.photo = 'anonymus.png';
        const currentArtists = {...this.state.artists}
        const timestamp = Date.now()
        currentArtists[`artist-${timestamp}-${newArtist.name}`] = newArtist
        this.setState({ artists: currentArtists })
    }

    removeArtist(key){
        const artists = {...this.state.artists}
        artists[key] = null
        this.setState({ artists });
      }

    loadSamples(){
        this.setState({
          artists: artistsObject
        })
      }

    render(){
        return (
            <div>
                <div className='wrap'>
                    <div className='artist-list'> 
                        <ul>
                        {
                            Object.keys(this.state.artists).map( key =>
                                <Artist
                                    key={key}
                                    index={key}
                                    details={this.state.artists[key]}
                                    removeArtist={this.removeArtist}/>
                                )
                        }                       
                        </ul> 
                    </div>
                </div>
                    <div className='wrap'>
                        <AddArtistForm
                            addArtist={this.addArtist}
                            loadSamples={this.loadSamples}
                            // updateArtist={this.updateArtist}
                            />
                    </div>
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

export default Artists;