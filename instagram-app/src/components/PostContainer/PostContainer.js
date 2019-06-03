import React from 'react';
import PropTypes from 'prop-types';

const PostContainer = props => {
  return (
    <div>
      <h3>{props.postcontainer.username}</h3>
      <h3>{props.postcontainer.likes}</h3>
      <img src={props.postcontainer.thumbnailUrl} alt='image' />
    </div>
  );
};

PostContainer.propTypes = {};

export default PostContainer;
