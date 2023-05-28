import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({video}) => {
  
  
  return (
    <>
    <div className="flex justify-center m-10  items-center ">
      <div className=" max-w-sm rounded overflow-hidden shadow-lg">
        <div className=" mt pb-9/16">
          <ReactPlayer
            url={video.submission.mediaUrl}
            playing={true}           
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{video.submission.title}</div>
          <p className="text-gray-700 text-base">{video.submission.description}</p>
        </div>
      </div>
    </div>
    
    </>
    
  )
}

export default VideoPlayer
