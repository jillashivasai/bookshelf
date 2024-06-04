import React, { useState } from 'react';
import BookSearch from '../components/BookSearch';

const HomePage = ({ onAddToBookshelf }) => (
  <div>
    <h2>Search book by name :</h2>
    <BookSearch onAddToBookshelf={onAddToBookshelf} />
  </div>
);

export default HomePage;
