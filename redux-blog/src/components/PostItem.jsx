import React from 'react'
import { Link } from 'react-router'

const PostItem = ({id, title}) => (
  <div className="list-group-item" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <Link to={`posts/${id}`}>{title}</Link>
    <button className="btn btn-danger">Delete</button>
  </div>
)

export default PostItem
