
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoPlayer from "./component/VideoPlayer"
import VideoList from "./component/VideoList";
import { useEffect, useState } from "react";
import Header from "./component/Header";



function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [page, setPage] = useState(0);
  
  const url = `https://internship-service.onrender.com/videos?page=${page}`;
  useEffect(() => {
    const fetchVideos = () => {          
      fetch(url)
      .then(res => res.json()).then(json =>(
         setVideos(json.data.posts))
      ).catch(e => console.log(e))         
    };
    fetchVideos();
    },[url]);

    const handleNext =() =>{
      setPage(page + 1);
      setSelectedVideo(null);
    }
    const handlePrev = ()=>{
      setPage(page - 1);
      setSelectedVideo(null)
    }
    const handleVideoClick = (video) => {
      setSelectedVideo(video);
    };
    
  return (
    <>
    
      <BrowserRouter>       
      <Header/>
      <Routes>
        <Route path="/" element={<VideoList videos={videos} onVideoClick={handleVideoClick} handleNext={handleNext} handlePrev={handlePrev} />} />
        <Route path="/video/:id" element={selectedVideo && <VideoPlayer  videos={videos}  video={selectedVideo} />}/>
      </Routes>   
    </BrowserRouter>
    
    
        
    </>
  );
}

export default App;
