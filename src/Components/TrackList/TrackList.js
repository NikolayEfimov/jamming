import React, { Component } from 'react';
import './TrackList.css';
import Track from './../Track/Track';

class TrackList extends Component {

  render() {
    const trackList = this.props.tracks.map((track) =>
      <Track key = {track.id}
       track = {track}
       onAdd = {this.props.onAdd}
       onRemove = {this.props.onRemove}
       isRemoval = {this.props.isRemoval}/>
    );

    return (
      <div className="TrackList">{trackList}</div>
    );
  }
}

export default TrackList;
