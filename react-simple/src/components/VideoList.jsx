import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = ({videos, onItemClick}) => (
  <ul className="col-md-4 list-group">
    {videos.map((video, index) => <VideoListItem key={video.id.videoId} video={video} onItemClick={() => onItemClick(index)} />)}
  </ul>
)

export default VideoList