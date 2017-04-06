import React from 'react'

const VideoDetail = ({video}) => {
  if (!video) return null

  const { title, description } = video.snippet
  const { videoId } = video.id

  return (
    <section className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
          <iframe src={`https://youtube.com/embed/${videoId}`} frameBorder="0" className="embed-responsive-item"></iframe>
      </div>
      <div className="details">
          <h3>{title}</h3>
          <p>{description}</p>
      </div>
    </section>
  )
}

export default VideoDetail