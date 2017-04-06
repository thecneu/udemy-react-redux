import React, { Component } from 'react'
import debounce from 'lodash/debounce'
import YTSearch from './api'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

class App extends Component {
  state = { videos: [] }

  componentDidMount() {
    this.search()
  }

  videoSearch = debounce(term => this.search(term), 420)

  search(term = 'surfbards') {
    console.log(term)
    YTSearch(term)
      .then((videos) => this.setState({videos, selected: videos[0]}))
  }

  onItemClick = (index) => this.setState({selected: this.state.videos[index]})

  render() {
    return (
      <main className="container">
        <SearchBar search={this.videoSearch} />
        <VideoDetail video={this.state.selected} />
        <VideoList videos={this.state.videos} onItemClick={this.onItemClick} />
      </main>
    )
  }
}

export default App
