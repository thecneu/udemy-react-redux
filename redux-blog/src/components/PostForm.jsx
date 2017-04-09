import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newPost } from '../actions'

class PostForm extends Component {
  state = {
    title: '',
    content: ''
  }

  onSubmit = (e) => {
    let errors = 0
    e.preventDefault()
    Object.keys(this.state).forEach(field => {
      if (this.state[field] === '') {
        errors++
      }
    })

    if (errors > 0) {
      console.warn('Not filled out')
      return
    }

    this.props.newPost(this.state)
    this.setState({
      title: '',
      content: ''
    })
    this.props.router.push('/posts')
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Title" value={this.state.title} onChange={e => this.onChange('title', e.target.value)} />
        </div>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Content" value={this.state.content} onChange={e => this.onChange('content', e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default connect(null, { newPost })(PostForm)
