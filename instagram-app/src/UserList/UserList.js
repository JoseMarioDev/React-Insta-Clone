import React from 'react';
import PropTypes from 'prop-types';
import PostContainer from '../components/PostContainer/PostContainer';

const UserList = props => {
  return props.userlist.map(post => <PostContainer postcontainer={post} />);
};

UserList.propTypes = {};

export default UserList;
