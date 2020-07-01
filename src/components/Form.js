import React, { useState } from 'react';
import Error from './Error';
const Form = ({ saveSearch }) => {
  const [word, saveWord] = useState('');
  const [error, saveError] = useState(false);

  const searchImages = (e) => {
    e.preventDefault();
    if (word.trim() === '') {
      saveError(true);
      return;
    }
    saveError(false);
    saveSearch(word);
  };

  return (
    <form onSubmit={searchImages}>
      <div className="row">
        <div className="col-md-8 form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="search image"
            onChange={(e) => saveWord(e.target.value)}
          />
        </div>
        <div className="col-md-4 form-group">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Search"
          />
        </div>
      </div>
      {error ? <Error message="An error has occured" /> : null}
    </form>
  );
};

export default Form;
