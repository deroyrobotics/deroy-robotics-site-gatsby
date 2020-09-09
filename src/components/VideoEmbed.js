import React from "react"

const VideoEmbed = ({ width = '100%', height = '100%', src, }) => {

  return (
    <div className="border">
      <iframe 
        width={width}
        height={height}
        title="video"
        src={`https://www.youtube.com/embed/${src}`}
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default VideoEmbed