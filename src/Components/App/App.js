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
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults searchResults = {this.state.searchResults}/>
            <Playlist playlistName = {this.state.playlistName} playlistTracks = {this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
