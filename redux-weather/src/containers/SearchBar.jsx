import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../actions'

class SearchBar extends Component {
  state = { term: '' }

  onInputChange = (e) => {
    this.setState({term: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.term === '') {
      return
    }

    this.props.fetchWeather(this.state.term)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="input-group">
        <input
          className="form-control"
          placeholder="Get a five-day forecast in your favorite city"
          value={this.state.term}
          onChange={this.onInputChange}
        />

        <div className="input-group-btn">
          <button className="btn btn-default" type="submit" onSubmit={this.onSubmit}>Submit</button>
        </div>
      </form>
    )
  }
}

export default connect(null, { fetchWeather })(SearchBar)
