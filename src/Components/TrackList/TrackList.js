import React, { Component } from 'react';
import './TrackList.css';
import Track from './../Track/Track';

class TrackList extends Component {

  render() {
    console.log(this.props.tracks);
    const trackList = this.props.tracks.map((track) =>
      <Track key = {track.id} track = {track}/>
    );

    return (
      <div className="TrackList">{trackList}</div>
    );
  }
}

export default TrackList;
