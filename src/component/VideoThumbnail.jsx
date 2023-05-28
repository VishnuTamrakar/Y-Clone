import React from 'react';
import { Link } from 'react-router-dom';

const VideoThumbnail = ({ video,onVideoClick }) => {
  
  return (
    <div className='flex'>
      
      <div className="bg-white rounded-lg shadow-md m-4 p-1 " >
      <Link
            key={video.postId}
            to={`video/${video.postId}`}
            onClick={onVideoClick(video)}
            
          >
      <img src={video.submission.thumbnail} alt={video.submission.title} className=" w-80 h-70 rounded-lg p-1 object-cover" />
      </Link>
       <div>
        <h3 className="text-lg font-bold">{video.submission.title}</h3>
        <p className="text-sm">descrip</p>
       </div>
      </div>
      
    </div>
  );
};

export default VideoThumbnail;
