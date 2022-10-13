import PropTypes from 'prop-types';

import React from "react";

export const GifItem = ({ url, title }) => {
  return (
    <>
      <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
    </>
  );
};

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
