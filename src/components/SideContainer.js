import React from 'react'
import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

const SideContainer = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    if(!isMenuOpen) return null;

  return (
    <div className='shadow-lg p-2'>
      <ul className='w-36 m-3'>
        <div className='flex hover:bg-gray-200 rounded-md p-1 w-full'>
          <img alt = "Home" className = "h-6 w-6" src = "https://cdn-icons-png.flaticon.com/512/25/25694.png"/>
          <Link to="/" ><li className='ml-2'>Home</li></Link>
        </div>
        <div className='flex hover:bg-gray-200 rounded-md p-1 mt-2'>
          <img alt = "shorts" className = "h-6 w-6" src = "https://cdn.pixabay.com/photo/2021/05/05/12/16/shorts-png-6230962_960_720.png"/>
          <Link to="/" ><li className='ml-2'>Shorts</li></Link>
        </div>
        <div className='flex hover:bg-gray-200 rounded-md p-1 mt-2'>
          <img  alt = "Subs" className = "h-6 w-6" src = "https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png"/>
          <Link to="/" ><li className='ml-2'>Subsciptions</li></Link>
        </div>
      </ul>
      <ul className='w-36 mt-6 m-3'>
        <div className='flex hover:bg-gray-200 rounded-md p-1 w-full'>
          <img alt = "Library" className = "h-6 w-6" src = "https://static.vecteezy.com/system/resources/previews/011/994/022/original/simple-video-library-icon-sign-design-free-png.png"/>
          <Link to="/" ><li className='ml-2'>Library</li></Link>
        </div>
        <div className='flex hover:bg-gray-200 rounded-md p-1 w-full mt-2'>
          <img alt = "History" className = "h-6 w-6" src = "https://cdn-icons-png.flaticon.com/512/2961/2961948.png"/>
          <Link to="/" ><li className='ml-2'>History</li></Link>
        </div>
        <div className='flex hover:bg-gray-200 rounded-md p-1 w-full mt-2'>
          <img alt = "Videos" className = "h-6 w-6" src = "https://static.thenounproject.com/png/1813969-200.png"/>
          <Link to="/" ><li className='ml-2'>Your Videos</li></Link>
        </div>
        <div className='flex hover:bg-gray-200 rounded-md p-1 w-full mt-2'>
          <img alt = "Watch" className = "h-6 w-6" src = "https://static.thenounproject.com/png/3389503-200.png"/>
          <Link to="/" ><li className='ml-2'>Watch Later</li></Link>
        </div>
        <div className='flex hover:bg-gray-200 rounded-md p-1 w-full mt-2'>
          <img alt = "Liked" className = "h-6 w-6" src = "https://cdn-icons-png.flaticon.com/512/126/126473.png"/>
          <Link to="/" ><li className='ml-2'>Liked Videos</li></Link>
        </div>
      </ul>
      <h1 className='font-bold pt-5 mt-4 m-3' >Explore</h1>
      <ul className='w-36 m-3'>
        <div className='flex hover:bg-gray-200 rounded-md p-1 w-full'>
          <img alt = "Trending" className = "h-6 w-6" src = "https://cdn-icons-png.flaticon.com/512/1710/1710130.png"/>
          <Link to="/" ><li className='ml-2'>Trending</li></Link>
        </div>
        <div className='flex hover:bg-gray-200 rounded-md p-1 w-full mt-2'>
          <img alt = "Shopping" className = "h-6 w-6" src = "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"/>
          <Link to="/" ><li className='ml-2'>Shopping</li></Link>
        </div>
        <div className='flex hover:bg-gray-200 rounded-md p-1 w-full mt-2'>
          <img alt = "Music" className = "h-6 w-6" src = "https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-music-notes-icon-png-image_925660.jpg"/>
          <Link to="/" ><li className='ml-2'>Music</li></Link>
        </div>
        <div className='flex hover:bg-gray-200 rounded-md p-1 w-full mt-2'>
          <img alt = "Movies" className = "h-6 w-6" src = "https://www.vhv.rs/dpng/d/489-4890918_movie-icon-vector-png-transparent-png.png"/>
          <Link to="/" ><li className='ml-2'>Movies</li></Link>
        </div>
      </ul>
    </div>
  )
}

export default SideContainer
