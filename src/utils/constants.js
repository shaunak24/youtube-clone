const GOOGLE_API_KEY = 'AIzaSyDTuj4LO8B3OECTw30VOD1AmL1XcGMkI8o';

export const YOUTUBE_POPULAR_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_SUGGESTIONS_API =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';
