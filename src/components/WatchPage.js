import React from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/AppSlice';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveComment from './LiveComment';
import { SINGLE_VIDEO_API } from '../Utils/Constant';
// import {GOOGLE_API_KEY} from '../Utils/Constant';
import { useState } from 'react';
import Recom from './Recom';
import { formatCompactNumber } from '../Utils/helper';

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");

    const [videodetail , setVideoDetail] = useState([]);

    // const getDetail = async () => {
    //   const data = await fetch(SINGLE_VIDEO_API + videoId + "&key=" + GOOGLE_API_KEY);
    //   const json = await data.json();
    //   setVideoDetail(json.items);
    // }

    useEffect(() => {
      const getDetail = async () => {
        const data = await fetch(SINGLE_VIDEO_API + videoId + "&key=" + process.env.REACT_APP_GOOGLE_API_KEY);
        const json = await data.json();
        setVideoDetail(json.items);
      }
      getDetail()
    } , [videoId])


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu())
    }, [dispatch])


  return (
    <>
    <div className='w-full'>
    <div className='px-5 py-4 flex w-full'>
      <div className='m-2'>
        <iframe
              width="850" height="425" 
              src={"https://www.youtube.com/embed/" + videoId} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
        </iframe>
        <div className='w-[850]'>
          <h1 className='font-bold text-2xl mt-2'>{videodetail[0]?.snippet?.title}</h1>
        </div>
        <div className='flex'>
          <div className='flex m-2 mt-2'>
           <img  className = "h-8 m-2 rounded-full mt-2" alt = "user" src = "https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-business-men-icon-png-image_925963.jpg"/>
           <div className='mt-1'>
               <h1 className='ml-2 font-bold text-l'>{videodetail[0]?.snippet?.channelTitle}</h1>
               <h1 className='ml-2 text-sm'>3.45M Subscriber</h1>
           </div>
           <button className='ml-6 bg-black text-white w-24 rounded-full h-10 mt-2'>Subscribe</button>
          </div>
          <div className='bg-slate-200 m-2 p-2 rounded-full flex justify-evenly w-36 ml-[150px] h-10 mt-4 '>
            <button className='flex ml-1'>
              <img alt = "Like" className = "w-8 h-6 "src = "https://www.freepnglogos.com/uploads/like-png/like-icon-line-iconset-iconsmind-35.png"/>
            </button>
            <button className=' ml-1 p-1 border border-r-black text-sm'>{videodetail[0]?.statistics?.likeCount ? formatCompactNumber(videodetail[0]?.statistics?.likeCount) : 0}</button>
            <button className=' w-10 ml-2'><img alt = "likecount" className='w-6 h-5' src = "https://cdn-icons-png.flaticon.com/512/126/126504.png"/></button>
          </div>
          <div className='p-2 m-2 rounded-full bg-slate-200 h-10 mt-4'>
            <button className='bg-slate-200 text-l  font-medium flex justify-between'>
              <img alt = "Share" className= "w-5 h-5 mr-1 text-sm "src = "https://cdn-icons-png.flaticon.com/512/6469/6469436.png"/>
                Share
              </button>
          </div>
          <div className='p-2 m-2 rounded-full bg-slate-200 h-10 mt-4 text-sm'>
            <button className='bg-slate-200 text-l  font-medium flex justify-between'>
              <img  alt = "Download"className= "w-5 h-5 mr-1 "src = "https://cdn-icons-png.flaticon.com/512/60/60656.png"/>
                Download
              </button>
          </div>
        </div>
        <div className='flex'>
          <div className='bg-slate-200  p-2 w-[850px] h-[155px] overflow-hidden rounded-md'>
            <h1 className='font-bold'>{(videodetail[0]?.statistics?.viewCount)/100}K views</h1>
            <h1 className=''>{videodetail[0]?.snippet?.description}</h1>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='pl-1 w-full rounded-md'>
            <h1 className='pl-2 font-bold border border-black rounded-t-md'>Live Chat</h1>
        </div>
        <LiveComment />
      </div>
    </div>
    <div className=' font-bold text-xl ml-[895px]'>
      Recommended Videos
    </div>
    <div className='flex'>
      <div className='w-[850px] ml-3'>
            <CommentsContainer />
      </div>
      <div className='ml-11 w-[390px]'>
        <Recom />
      </div>
    </div>
    </div>
    </>
  )
}

export default WatchPage
