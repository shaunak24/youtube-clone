import React from 'react';
import millify from 'millify';

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg rounded-lg">
      <img
        src={thumbnails?.medium?.url}
        alt="video-thumbnail"
        className="rounded-lg"
      />
      <ul>
        <li className="py-2 font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{millify(statistics.viewCount)} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
