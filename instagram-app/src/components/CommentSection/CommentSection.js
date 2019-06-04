import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = props => {
  return (
    <div>
      <p>{props.commentsection.text}</p>
    </div>
  );
};

CommentSection.propTypes = {
  text: PropTypes.string,
};

export default CommentSection;
