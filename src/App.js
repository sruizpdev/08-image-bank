import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import ListImages from './components/ListImages';

function App() {
  const [search, saveSearch] = useState('');
  const [images, saveImages] = useState([]);

  useEffect(() => {
    const getDataApi = async () => {
      if (search === '') return;
      const imagesPerPage = 30;
      const key = '17287647-230710d0f9688fc39ce3964de';
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}`;
      const response = await fetch(url);
      const result = await response.json();
      saveImages(result.hits);
    };
    getDataApi();
  }, [search]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Images search</p>
        <Form saveSearch={saveSearch} />
      </div>
      <div className="row justify-content-center">
        <ListImages images={images} />
      </div>
    </div>
  );
}

export default App;
