import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import { TailSpin } from 'react-loader-spinner';
import './style.css'

const BookSearch = ({ onAddToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length > 2) {
      setLoading(true);
      fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => response.json())
        .then(data => {
          setBooks(data.docs);
          setLoading(false);
        })
        .catch(error => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div className='book-search-page'>
      <input 
        type="text" 
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for books..." 
      />
      <div className="book-results">
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
            <TailSpin
              height="50"
              width="50"
              color="#3498db"
              ariaLabel="loading"
            />
          </div>
        ) : (
          books.map(book => (
            <BookCard key={book.key} book={book} onAddToBookshelf={onAddToBookshelf} />
          ))
        )}
      </div>
    </div>
  );
};

export default BookSearch;
