const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
export const BUTTON_LIST = [
  "All",
  "Game",
  "Music",
  "Movie",
  "Live",
  "News",
  "Vlogs",
  "Cooking",
  "Kapil Sharma",
];
export const YOUTUBEVIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${GOOGLE_API_KEY}&maxResults=15`;
export const YTUBE_VIDEO_ID_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}`;
export const YTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
