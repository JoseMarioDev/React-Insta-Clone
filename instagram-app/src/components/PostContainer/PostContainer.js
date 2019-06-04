import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  return props.postcontainer.map(post => (
    <div>
      <h3>{post.username}</h3>
      <h3>{post.likes}</h3>
      <h3>{post.timestamp}</h3>
      <img src={post.thumbnailUrl} alt='' />
      <img src={post.imageUrl} alt='' />
      {post.comments.map(comment => (
        <CommentSection commentsection={comment} />
      ))}
      <input type='text' placeholder='Add a comment...' />
    </div>
  ));
};

PostContainer.propTypes = {
  username: PropTypes.string,
  likes: PropTypes.number,
  thumbnailUrl: PropTypes.string,
};

export default PostContainer;
