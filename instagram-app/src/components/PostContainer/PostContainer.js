import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.scss';

const PostContainer = props => {
  return props.postcontainer.map(post => (
    <section className='container'>
      <div className='post-container'>
        <div className='post-container-top'>
          <div className='imguser'>
            <div className='img-top'>
              <img src={post.thumbnailUrl} alt='' />
            </div>
            <h6>{post.username}</h6>
          </div>
          <i className='fas fa-ellipsis-h' />
        </div>
        <img className='img-mid' src={post.imageUrl} alt='' />
        <div className='icons'>
          <div className='icon-left'>
            <i className='far fa-heart' />
            <i className='far fa-comment' />
            <i className='far fa-share-square' />
          </div>
          <i className='far fa-bookmark' />
        </div>
        <h6>{post.likes} likes </h6>
        {post.comments.map(comment => (
          <CommentSection commentsection={comment} />
        ))}
        <p className='timestamp'>{post.timestamp}</p>
        {props.commentform}
      </div>
    </section>
  ));
};

PostContainer.propTypes = {
  username: PropTypes.string,
  likes: PropTypes.number,
  thumbnailUrl: PropTypes.string,
};

export default PostContainer;
