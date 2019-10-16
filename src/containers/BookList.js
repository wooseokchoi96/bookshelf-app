import React from "react";
import Book from "../components/Book";
import Search from "../components/Search";

const BookList = props => {
  
  const books = () => {
    return props.books.map(bookObj => <li key={bookObj.id}><Book key={bookObj.id} book={bookObj} clickHandler={props.clickHandler}/></li>)
  };

  return (
    <div className="book-list">
      <h1>Book List</h1>
      <Search search={props.search}/>
      <ul>{books()}</ul>
    </div>
  );

};

export default BookList;
