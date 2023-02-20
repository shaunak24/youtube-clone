import React from 'react';
import Comment from './Comment';

const CommentsList = ({ comments }) => {
  return comments.map((comment, i) => (
    <div key={i}>
      <Comment data={comment} />
      {comment?.replies?.length > 0 && (
        <div className="border border-l-black ml-5 pl-5">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

export default CommentsList;
