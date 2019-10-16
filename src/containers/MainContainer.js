import React, { Component } from "react";
import BookList from "./BookList";
import Bookshelf from "./Bookshelf";

class MainContainer extends Component {
  state = {
    books : [],
    showBooks : [],
    shelfBooks : []
  }

  addBook = (book) => {
    if (!this.state.shelfBooks.includes(book)) {
        const newShelfBooks = [...this.state.shelfBooks, book];
        this.setState({ shelfBooks : newShelfBooks });
    }
  }

  removeBook = (book) => {
    const newShelfBooks = this.state.shelfBooks.filter(bookObj => bookObj !== book);
    this.setState({ shelfBooks : newShelfBooks });
  }

  searchBook = (searchTerm) => {
    const newShowBooks = this.state.books.filter(book => book.title.toUpperCase().includes(searchTerm.toUpperCase()));
    this.setState({ showBooks : newShowBooks })
  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
      .then(resp => resp.json())
      .then(books => this.setState({ books : books, showBooks : books }))
  }
  
  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.showBooks} clickHandler={this.addBook} search={this.searchBook}/>
        <Bookshelf books={this.state.shelfBooks} clickHandler={this.removeBook}/>
      </div>
    );
  }
}

export default MainContainer;
