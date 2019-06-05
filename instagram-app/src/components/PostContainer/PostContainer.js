import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.scss';

class PostContainer extends React.Component {
  render() {
    return (
      <div className='post-container'>
        {this.props.filteredPosts.length === 0
          ? this.props.data.map(post => {
              return (
                <>
                  <header>
                    <img src={post.thumbnailUrl} alt='thumbnail' />
                    <h3>{post.username}</h3>
                  </header>

                  <img src={post.imageUrl} alt={post.id} />

                  <section className='likebar'>{post.likes} likes</section>

                  <CommentSection
                    comments={post.comments}
                    timestamp={post.timestamp}
                  />
                </>
              );
            })
          : this.props.filteredPosts.map(post => {
              return (
                <>
                  <header>
                    <img src={post.thumbnailUrl} alt='thumbnail' />
                    <h3>{post.username}</h3>
                  </header>

                  <img src={post.imageUrl} alt={post.id} />

                  <section className='likebar'>{post.likes} likes</section>

                  <CommentSection
                    comments={post.comments}
                    timestamp={post.timestamp}
                  />
                </>
              );
            })}
      </div>
    );
  }
}

PostContainer.propTypes = {
  username: PropTypes.string,
  likes: PropTypes.number,
  thumbnailUrl: PropTypes.string,
};

export default PostContainer;

{
  /* <i className='fas fa-ellipsis-h' />


<div className='icons'>
  <div className='icon-left'>
    <i className='far fa-heart' />
    <i className='far fa-comment' />
    <i className='far fa-share-square' />
  </div>
  <i className='far fa-bookmark' />
</div>; */
}
