import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import base from '../../base';


class Track extends React.Component {


    render(){
        const {details} = this.props;
        return (
            <div className="track">
                <div className="box">
                    <div className='title' >{details.name}</div>
                </div>
                <div className="box">
                    <div className='author'>{details.lyricsBy}/{details.musicBy}</div>
                </div>
                <div className="box" >
                    <Link to={`/listen/${this.props.index}`}><button>listen</button></Link>
                </div>
            </div>
        )
    }
}

export default Track;