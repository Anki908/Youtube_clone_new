import { useState , useEffect } from "react";
import { useDispatch } from "react-redux";
import { openMenu } from "../Utils/AppSlice";
import { useSearchParams , Link } from "react-router-dom";
import { YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API } from "../Utils/Constant";
import SearchCard from "./SearchCard";

const SearchResultContainer = () => {

    const [searchParams] = useSearchParams();
    const [searchedVideos, setSearchedVideos] = useState([]);

    let searchQuery = searchParams.get('search_query');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(openMenu());
        const getSearchedVideosList = async () => {
            const data = await fetch(YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API + searchQuery );
            const searchedVideosJson = await data.json();
            setSearchedVideos(searchedVideosJson?.items);
        }
        getSearchedVideosList();
    }, [searchQuery , dispatch]);

    // const getSearchedVideosList = async () => {
    //     const data = await fetch(YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API + searchQuery );
    //     const searchedVideosJson = await data.json();
    //     setSearchedVideos(searchedVideosJson?.items);
    // }

    return (
        <div className=''>
            {searchedVideos.map((video) => (
                <Link key = {video?.id?.videoId} to = {'/watch?v=' + video?.id?.videoId}> <SearchCard  info = {video}/></Link>
            ))}
        </div>
    )
}

export default SearchResultContainer;

