import React from 'react';
import './AddArtistForm.css';
class AddArtistForm extends React.Component {
    createArtist(e) {
        e.preventDefault();
        const artist = {
            name: this.name.value,
            instrument: this.instrument.value,
            bio: this.bio.value,
            photo: this.photo.value,
        }
        this.props.addArtist(artist);
        this.AddArtistForm.reset()
    }

    render(){
        return (
            <div>
                <form ref={ input => this.AddArtistForm = input } onSubmit={e => this.createArtist(e)}>
                    <input ref={ input => this.name = input } type="text" placeholder="Artist Name" />
                    <input ref={ input => this.instrument = input } type="text" placeholder="Artist Instrument" />
                    <input ref={ input => this.bio = input } type="text" placeholder="Artist bio" />
                    <input ref={ input => this.photo = input } type="text" placeholder="Artist photo" />
                    <button type="submit">Add Artist</button>
                </form>
                <button onClick={this.props.loadSamples}>Load Data</button>
            </div>
        )
    }
}

export default AddArtistForm;