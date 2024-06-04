import React from 'react';
import Bookshelf from '../components/Bookshelf';

const BookshelfPage = ({ books }) => (
  <div>
    <Bookshelf books={books} />
  </div>
);

export default BookshelfPage;
