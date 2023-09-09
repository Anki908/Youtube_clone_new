import React from 'react'
import { formatCompactNumber } from '../Utils/helper';

const RelatedCard = ({info}) => {
    // const {snippet , statistics} = info;
    // const {channelTitle , title , thumbnails} = snippet;
    var videoTitle = info?.snippet?.title;
    if(videoTitle?.length > 35) videoTitle = videoTitle.substring(0,35);

  return (
    <div className=' flex w-auto h-24 ml-3'>
        <img alt = "Thumb" className='rounded-lg w-40 h-24 mt-2' src = {info?.snippet?.thumbnails.medium.url}/>
        <ul className='m-2'>
            <li className='font-bold  text-l'><p>{videoTitle}....</p></li>
            <li className='text-sm'>{info?.snippet?.channelTitle}</li>
            <li className='text-sm'>{info?.statistics?.viewCount ? formatCompactNumber(info?.statistics?.viewCount) : 0} views</li>
        </ul>
    </div>
  )
}

export default RelatedCard
