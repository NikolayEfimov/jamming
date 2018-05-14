import React, { Component } from 'react';
import './Playlist.css'
import TrackList from './../TrackList/TrackList';

class Playlist extends Component {
  render() {
    return (
      <div class="Playlist">
        <input value="New Playlist"/>
        <TrackList/>
        <a class="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
