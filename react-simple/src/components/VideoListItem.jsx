import React from 'react'

const VideoListItem = ({video: {snippet}, onItemClick}) => (
  <li className="list-group-item" onClick={onItemClick}>
    <div className="video-list-media">
      <div className="media-left">
        <img src={snippet.thumbnails.default.url} alt="" className="media-object" />
      </div>

      <div className="media-body">
        <div className="media-heading">{snippet.title}</div>
      </div>
    </div>
  </li>
)

export default VideoListItem