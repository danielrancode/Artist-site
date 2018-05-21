import React from 'react';
import Track from '../Track/Track';
import TrackDetail from '../TrackDetail/TrackDetail';
import './Tracks.css';
import base from '../../base';

// **** IMPORT DATA
import tracksObject from '../../assets/data/tracks-object'
import Clouds from '../../assets/video/clouds.mp4'

// **** Tracks component
class Tracks extends React.Component {
  constructor() {
    super();
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.state = {
      tracks: {}
     }
    }

    removeTrack(key){
      const currentTracks = {...this.state.tracks};
      delete currentTracks[key];
      this.setState({ tracks: currentTracks });
      console.log(currentTracks)
    }
    
    addTrack(newTrack){
      newTrack.track = '05 The Bells.wav';
      const currentTracks = {...this.state.tracks}
      const timestamp = Date.now()
      currentTracks[`track-${timestamp}-${newTrack.name}`] = newTrack
      this.setState({ tracks: currentTracks })
    }

    loadSamples(){
      this.setState({
        tracks: tracksObject
      })
    }

    render(){
      return (
        <div className='wrapper'>
          <div className='video-div'>
              <video src={Clouds} autoPlay loop playsInline />
          </div>
          <div className='tracks'>
            <ul>
                {
                  Object.keys(this.state.tracks).map( key =>
                    <div>
                      <Track  
                        key={key}
                        index={key} 
                        details={this.state.tracks[key]}
                        // removeTrack={this.removeTrack}
                      />
                    </div>
                  )
                }
            </ul>
          </div>
        </div>
      )
    }

    componentWillMount(){
      this.tracksRef = base.syncState('tracks', {
        context: this,
        state: 'tracks'
      })
    }
  
    componentWillUmount(){
      base.removeBinding(this.tracksRef)
    }  
}

export default Tracks;