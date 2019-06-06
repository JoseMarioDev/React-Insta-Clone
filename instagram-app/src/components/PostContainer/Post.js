import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  font-size: 11px;
  max-width: 660px;
`;

const PostContainer = styled.div`
  display: inline-block;
  max-width: 440px;
  border: 1px solid blue;
  margin: 10px 0;
`;

const Header = styled.div`
  padding: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 35px;
  margin-right: 5px;
`;

const Img = styled.img`
  width: 100%;

  border-radius: 50%;
`;

const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const MainImg = styled.img`
  width: 100%;
`;

export class Post extends Component {
  state = {
    isLiked: false,
    likes: 0,
  };

  componentDidMount() {
    this.setState({
      likes: this.props.post.likes,
    });
  }

  toggleLike = () => {
    const addLike = this.state.isLiked
      ? this.state.likes - 1
      : this.state.likes + 1;
    this.setState({
      isLiked: !this.state.isLiked,
      likes: addLike,
    });
  };
  render() {
    const { post } = this.props;
    return (
      <Container>
        <PostContainer>
          <Header>
            <HeaderLeft>
              <ImgContainer>
                <Img src={post.thumbnailUrl} alt='thumbnail' />
              </ImgContainer>
              <h3>{post.username}</h3>
            </HeaderLeft>
            <i className='fas fa-ellipsis-h' />
          </Header>

          <MainImg src={post.imageUrl} alt={post.id} />

          {/* <ImagesBottom> */}
          <div className='imagesLeft'>
            {this.state.isLiked ? (
              <i onClick={this.toggleLike} className='fas fa-heart' />
            ) : (
              <i onClick={this.toggleLike} className='far fa-heart' />
            )}
            <i className='far fa-comment' />
            <i className='far fa-share-square' />
          </div>

          <div className='imagesRight'>
            <i className='far fa-bookmark' />
          </div>
          {/* </ImagesBottom> */}

          <section className='likebar'>{this.state.likes} likes</section>

          <CommentSection comments={post.comments} timestamp={post.timestamp} />
        </PostContainer>
      </Container>
    );
  }
}

export default Post;
