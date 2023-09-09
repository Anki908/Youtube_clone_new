import React from 'react'

const SearchCard = ({info}) => {
    const {snippet} = info;
    const {channelTitle , title , thumbnails} = snippet;

    function getRandomInt(max , min) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

  return (
      <div className=' ml-6  m-3 flex w-auto'>
        <img alt = "Thumb" className='rounded-lg w-auto' src = {thumbnails.medium.url}/>
        <ul>
            <li className='font-bold ml-3 pt-2 text-l'>{title}</li>
            <li className='ml-3 text-sm'>{getRandomInt(30 , 700)}k views</li>
            <div className='flex mt-2'>
                <img alt = "Thumb" className='rounded-full w-8 h-8 ml-2 mt-1' src = {thumbnails.default.url}/>
                <li className='ml-2 font-semibold mt-2 text-sm'>{channelTitle}</li>
            </div>
            
            <li className='ml-3 mt-2 text-sm'>{snippet?.description}</li>
        </ul>
    </div>
  )
}

export default SearchCard
