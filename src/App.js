import React, { useState, useEffect } from 'react';
import Form from './components/Form';
function App() {
  const [search, saveSearch] = useState('');

  useEffect(() => {
    const getDataApi = async () => {
      if (search === '') return;
      const imagesPerPage = 30;
      const key = '17287647-230710d0f9688fc39ce3964de';
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}`;
      const response = await fetch(url);
      const result = await response.json();
      saveSearch(result.hits);
      console.log(result.hits);
    };
    getDataApi();
  }, [search]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Images search</p>
        <Form saveSearch={saveSearch} />
      </div>
    </div>
  );
}

export default App;
