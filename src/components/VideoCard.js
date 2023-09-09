import React from 'react'
import { formatCompactNumber } from '../Utils/helper';

function VideoCard({info}) {

    const {snippet , statistics} = info;
    const {channelTitle , title , thumbnails} = snippet;


  return (
    <div className='m-2 overflow-hidden w-72'>
        <img alt = "Thumb" className='rounded-lg w-auto hover:rounded-sm' src = {thumbnails.medium.url}/>
        <ul className='flex'>
          <img alt = "thumbnail" className='w-8 h-8 rounded-full mt-4 mr-2' src = {thumbnails.default.url}/>
          <div>
            <li className='font-bold py-2'>{title}</li>
            <li >{channelTitle}</li>
            <li >{statistics?.viewCount ? formatCompactNumber(statistics?.viewCount) : 0} views</li>
          </div>
        </ul>
    </div>
  )
}

export default VideoCard
