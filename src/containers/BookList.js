import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    fetch("http://localhost:3005/books")
      .then(resp => resp.json())
      .then(books => this.setState({ books: books }));
  }

  submitHandler = book => {
    console.log(book);
    this.setState({ books: [book, ...this.state.books] });
  };

  render() {
    let booksList = this.state.books.map(book => (
      <li key={book.title}>
        <Book book={book} clickHandler={this.props.addToShelf} />
      </li>
    ));

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form submitHandler={this.submitHandler} />
        <ul>{booksList}</ul>
      </div>
    );
  }
}

export default BookList;
