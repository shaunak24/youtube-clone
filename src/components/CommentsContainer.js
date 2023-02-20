import React from 'react';
import { commentsData } from '../resources/mockCommentsData';
import CommentsList from './CommentsList';

const CommentsContainer = () => {
  return (
    <div className="m-3 p-2">
      <h1 className="font-bold text-2xl">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
