import React from 'react';
import Tag from './Tag';

const tagNames = [
  'All',
  'Cricket',
  'Computer Science',
  'Technology',
  'Gaming',
  'Songs',
  'Live',
];

const TagList = () => {
  return (
    <div className="flex">
      {tagNames.map((name) => (
        <Tag name={name} key={name.toLowerCase()} />
      ))}
    </div>
  );
};

export default TagList;
