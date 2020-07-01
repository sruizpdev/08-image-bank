import React from 'react';
const Error = ({ message }) => {
  return (
    <p className="text-center my-3 p-4 text-white alert alert-danger">
      {message}
    </p>
  );
};

export default Error;
