import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    bookshelf: []
  };

  addToShelf = book => {
    let bookshelf = this.state.bookshelf.includes(book)
      ? this.state.bookshelf
      : [...this.state.bookshelf, book];
    this.setState({
      bookshelf: bookshelf
    });
  };
  removeFromShelf = bookObj => {
    let bookshelf = this.state.bookshelf.filter(book => book.id !== bookObj.id);
    this.setState({
      bookshelf: bookshelf
    });
  };

  render() {
    return (
      <div className="book-container">
        <BookList
          addToShelf={this.addToShelf}
          searchTerm={this.state.searchTerm}
          filterBooks={this.filterBooks}
        />
        <Bookshelf
          books={this.state.bookshelf}
          removeFromShelf={this.removeFromShelf}
        />
      </div>
    );
  }
}

export default App;
