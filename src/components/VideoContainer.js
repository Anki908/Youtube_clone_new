import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../Utils/Constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoContainer = () => {

    const [videos , setVideos] = useState([]);
    useEffect(() => {
        getVideos();
    } , [])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        // console.log(json.items);
        setVideos(json.items);
    }

  return (videos.length === 0)? <Shimmer/> : (
    <div className='flex flex-wrap flex-row m-4 p-1 justify-center'>
        {videos.map((video) => (
           <Link key = {video.id} to = {"/watch?v=" + video.id}> <VideoCard info = {video} /></Link>
        ))}
    </div>
  )
}

export default VideoContainer
