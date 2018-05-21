import React from 'react';
import ReactDOM from 'react-dom';
import ReactAudioPlayer from 'react-audio-player';
import './TrackDetail.css';
import base from '../../base';
import Clouds from '../../assets/video/clouds.mp4';
import { Link } from 'react-router-dom';


class TrackDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            tracks: {}
        }
    }
    render(){
        const trackId = this.props.match.params.pid;
        const myTrack = this.state.tracks[trackId];
        
        if (myTrack) {
            this.trackName = myTrack.name;
            this.trackLyricsBy = myTrack.lyricsBy;
            this.trackMusicBy = myTrack.musicBy;
            this.trackLyrics = myTrack.lyrics;
            this.trackTrack = require(`../../assets/audio/${myTrack.track}`);
        }

        return (
            <div className='wrapper'>
                <div className='song-video-div'>
                    <video src={Clouds} autoPlay loop playsInline />
                </div>
                <div className='song'>
                <div className='player'>
                    <audio controls>
                        <source src={this.trackTrack}/>
                    </audio>
                </div>
                    <h2 className='title'>{this.trackName}</h2>
                    <h3 className='author'>{this.trackLyricsBy}/{this.trackMusicBy}</h3>
                    <div className='lyrics'>{this.trackLyrics}</div>
                    <div>  <Link to={'/listen'}><button>Back</button></Link></div>
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

export default TrackDetail;