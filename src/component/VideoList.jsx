import React from "react";
import VideoThumbnail from "./VideoThumbnail";

const VideoList = ({ videos, handleNext, handlePrev, onVideoClick }) => {
  return (
    <>
      <div className=" bg-white flex flex-col">
       
        <div style={{maxWidth:"80%"}} className="flex flex-wrap  mx-auto" >
        {videos.map((video) => (          
            <VideoThumbnail onVideoClick={onVideoClick} video={video} />
          
        ))}
        </div>
        <div className="flex justify-between font-bold text-lg p-10 ">
          <div
            className=" p-8 rounded-lg bg-red-200 bottom-1 cursor-pointer"
            onClick={handlePrev}
          >
            Prev
          </div>
          <div
            className="p-8 rounded-lg bg-red-200 bottom-1 cursor-pointer"
            onClick={handleNext}
          >
            next
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoList;
