import React from 'react';
import albumCover from '../../assets/img/Poe-F001.jpg'
import './Home.css';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render(){
        return (
            <div className='albumArt'>
                <h1>New Album!</h1>
                <Link to={'/listen'}>
                    <img src={albumCover} />
                </Link>
            </div>
        )
    }
}

export default Home;