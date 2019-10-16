import React, { Component } from "react";
import Book from "../components/Book";
import Search from "../components/Search";

class BookList extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
      .then(resp => resp.json())
      .then(books => this.setState({ books }))
  }

  books = () => {
    return this.state.books.map(bookObj => <li><Book key={bookObj.id} book={bookObj} /></li>)
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <ul>{this.books()}</ul>
      </div>
    );
  }
};

export default BookList;
