export const YOUTUBE_VIDEOS_API = 
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
 "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const SINGLE_VIDEO_API = 
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="

export const RELATED_VIDEO_API = 
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=11&regionCode=IN&key=" + process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=`;