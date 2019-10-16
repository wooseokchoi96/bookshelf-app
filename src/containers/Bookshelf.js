import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  const books = () => {
    return props.books.map(bookObj => <li key={bookObj.id}><Book key={bookObj.id} book={bookObj} clickHandler={props.clickHandler}/></li>)
  };

  return (
    <div className="book-list">
      <h1>Book Shelf</h1>
      <ul>{books()}</ul>
    </div>
  );

};

export default Bookshelf;
