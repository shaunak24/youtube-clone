import React from 'react';

const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Movies</li>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Movies</li>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;
