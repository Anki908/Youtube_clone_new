import React, { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Utils/AppSlice'
import { YOUTUBE_SEARCH_API } from '../Utils/Constant';
import { cacheResult } from '../Utils/SearchSlice';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();
    const [searchQuery , setSearchQuery] = useState("");
    const [suggestions , setSuggestions] = useState([]);
    const [showSuggestions , setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);
    const navigate = useNavigate();
    useEffect(() => {

        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery])
            }
            else{
                const getResult = async () => {
                    // console.log(searchQuery);
                    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
                    const json = await data.json();
                    setSuggestions(json[1]);
            
                    dispatch(
                        cacheResult({
                            [searchQuery] : json[1],
                        })
                    )
                };
                getResult();
            }
        } , 200)

        return () =>{
            clearTimeout(timer);
        };

    } , [searchQuery , dispatch , searchCache])

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    // const getResult = async () => {
    //     // console.log(searchQuery);
    //     const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    //     const json = await data.json();
    //     setSuggestions(json[1]);

    //     dispatch(
    //         cacheResult({
    //             [searchQuery] : json[1],
    //         })
    //     )
    // };

    const handleSuggestions = (event) => {
        setSearchQuery(event.target.innerText);
        setShowSuggestions(false);
        navigate('/results?search_query=' + encodeURI(event.target.innerText));
    }

  return (
    <div className='grid grid-flow-col p-1 shadow-lg bg-white fixed w-full h-16'>
      <div className='flex col-span-1'>
        <img onClick={() => toggleMenuHandler()} className='h-8 m-3 cursor-pointer' alt="Icon" src = "https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"/>
        <a href = "/">
           <img alt = "imhai" className='h-14 cursor-pointer' src = "https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png"/>
        </a>
      </div>
      <div className='col-span-10 px-60'>
        <div className='flex'>
            <input  
            className = "my-4 md-2 px-2 border border-gray-400 w-3/4 rounded-l-full h-8"
            type = "text"
            placeholder='Search'
            value = {searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            />
            <button className='mt-4 border border-gray-400 rounded-r-full px-4 bg-gray-100 h-[32px]'
            >
            <img alt = "image1" className = "w-4 h-4 " src = "https://cdn-icons-png.flaticon.com/512/482/482631.png"/>
            </button>
            <div className='ml-4 mt-3 bg-gray-200 h-10 w-10 rounded-full'>
                <img  alt = "image2" className='h-6 w-6 mt-2 ml-2' src = "https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png"/>
            </div>
        </div>
        { showSuggestions && suggestions.length > 0 && (
            <div className='flex flex-wrap fixed bg-white py-2 px-2 w-[26rem] shadow-lg rounded-lg border border-gray-100'>
                <ul>
                    {suggestions?.map((s , index) => (
                        <li
                        key = {index}
                        className='w-[25rem] flex py-0 px-2 m-1  hover:bg-gray-100 cursor-pointer'
                        onMouseDown={(e) => handleSuggestions(e)}
                        >{s}</li>
                    ))}
                </ul>
            </div>  
        )} 
      </div>
      <div className=' h-10 w-10 mt-3 rounded-full hover:bg-gray-200'>
            <img alt = "image3" className='h-5 w-6 ml-2 mt-[10px]' src = "https://static-00.iconduck.com/assets.00/video-plus-icon-512x358-fpbzlocu.png"/>
      </div>
      <div className=' h-10 w-10 mt-3 rounded-full hover hover:bg-gray-200'>
            <img alt = "image4" className='h-8 w-8  mt-1 ml-1 ' src = "https://static.vecteezy.com/system/resources/previews/010/366/220/non_2x/bell-icon-transparent-notification-free-png.png"/>
      </div>
      <div className=' p-2'>
        <img  className='h-8 mt-2' alt = "user" src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"/>
      </div>
    </div>
  )
}

export default Header
