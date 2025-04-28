import React from 'react';

const CommentList = ({ comments }) => {
  if (!comments || comments.length === 0) return <p>No comments yet.</p>;

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          {comment.author}: {comment.text}
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
