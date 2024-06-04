import React from 'react';

const Bookshelf = ({ books }) => (
  <div>
    <h2>My Bookshelf</h2>
    <div className="bookshelf">
      {books.map(book => (
        <div key={book.key} className="book-card">
          <h3>{book.title}</h3>
          <p>{book.author_name?.join(', ')}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Bookshelf;
