import React, { Component } from 'react';
import './Playlist.css'
import TrackList from './../TrackList/TrackList';

class Playlist extends Component {

  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  render() {
    return (
      <div className="Playlist">
        <input value="New Playlist" onChange = {this.handleNameChange}/>
        <TrackList tracks = {this.props.playlistTracks} onRemove = {this.props.onRemove}/>
        <a className="Playlist-save" onClick = {this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }

  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }
}

export default Playlist;
