import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = props => {
  // addNewComment(e,index) {

  // }

  return (
    <div>
      <p>
        <strong> {props.commentsection.username} </strong>
        {props.commentsection.text}
      </p>
    </div>
  );
};

CommentSection.propTypes = {
  text: PropTypes.string,
};

export default CommentSection;
