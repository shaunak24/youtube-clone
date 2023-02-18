import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { YOUTUBE_POPULAR_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVidoes();
  }, []);

  const getVidoes = async () => {
    const data = await fetch(YOUTUBE_POPULAR_VIDEOS_API);
    const json = await data.json();
    setVideos(json?.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((info) => (
        <Link key={info.id} to={`/watch?v=${info.id}`}>
          <VideoCard info={info} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
