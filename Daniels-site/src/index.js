// **** IMPORT MODULES
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';
import './index.css';

// **** IMPORT DATA

// **** IMPORT COMPONENTS
import Home from './components/Home/Home' 
// import App from './App';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Tracks from './components/Tracks/Tracks';
import Track from './components/Track/Track';
import TrackDetail from './components/TrackDetail/TrackDetail';
import Artists from './components/Artists/Artists';
import Artist from './components/Artist/Artist';
import ArtistDetail from './components/ArtistDetail/ArtistDetail';

// **** Main
class Main extends React.Component {
    render() {
        return (
            <div>
                <div className='header'>
                    <Header />
                </div>
                <Router>
                    <div>
                        <Nav className='nav'/>
                        {/* <div className="container"> */}
                        <Route exact={true} path='/' component={Home} />
                        <Route exact={true} path='/listen' component={Tracks} />
                        <Route path='/listen/:pid' component={TrackDetail} />
                        <Route exact={true} path='/about' component={Artists} />
                        <Route path='/about/:pid' component={ArtistDetail} />
                        {/* </div> */}
                    </div>
                </Router>
            </div>

        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));