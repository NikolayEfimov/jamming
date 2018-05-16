import React, { Component } from 'react';
import './App.css';
import SearchBar from './../SearchBar/SearchBar';
import Playlist from './../Playlist/Playlist';
import SearchResults from './../SearchResults/SearchResults';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{id: '1', name: 'testName', artist: 'testArtist', album: 'testAlbum' },
      {id: '2', name: 'testName2', artist: 'testArtist2', album: 'testAlbum2' }],

      playlistTracks: [{id: '3', name: 'testName3', artist: 'testArtist3', album: 'testAlbum3' },
      {id: '4', name: 'testName4', artist: 'testArtist4', album: 'testAlbum4' }],

      playlistName: 'testPlaylist'
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
        return;}
    this.setState({
      playlistTracks: this.state.playlistTracks.concat(track)
    })
  }

  removeTrack(trackToDelete) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(function(track) {
        return track !== trackToDelete;
      })
    })
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    })
  }

  savePlaylist() {
    const trackURIs = ['https://testUri1', 'https://testUri2'];
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch = {this.onSearch}/>
          <div className="App-playlist">
            <SearchResults searchResults = {this.state.searchResults} onAdd = {this.addTrack}/>
            <Playlist playlistName = {this.state.playlistName}
             playlistTracks = {this.state.playlistTracks}
             onRemove = {this.removeTrack}
             onNameChange = {this.updatePlaylistName}
             onSave = {this.updatePlaylistName}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
