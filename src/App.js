import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Homepage';
import BookshelfPage from './pages/BookshelfPage';

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBooks);
  }, []);

  const handleAddToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage onAddToBookshelf={handleAddToBookshelf} />}
        />
        <Route
          path="/bookshelf"
          element={<BookshelfPage books={bookshelf} />}
        />
      </Routes>
      </>
  );
};

export default App;
