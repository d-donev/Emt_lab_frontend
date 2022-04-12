import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import libraryService from "../Repository/libraryRepository";
import Books from "./Book/ListBooks/ListBook";
import AddBook from "../Component/Book/AddBook/AddBook";
import EditBook from "./Book/EditBook/EditBook";
import Category from "../Component/Category/Category";
import Header from "./Header/Header";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      categories: [],
      books: [],
      currentBook: {},
    };
  }

  render() {
    return (
      <Router>
        <main>
          <Header />
          <Routes>
            <Route
              path={"/books/edit/:id"}
              element={
                <EditBook
                  authors={this.state.authors}
                  categories={this.state.categories}
                  currentBook={this.state.currentBook}
                  onEditBook={this.editBook}
                />
              }
            />

            <Route
              path={"/books/add"}
              element={
                <AddBook
                  onProductAdd={this.addBook}
                  authors={this.state.authors}
                  categories={this.state.categories}
                />
              }
            />
            <Route
              path={"/books"}
              element={
                <Books
                  books={this.state.books}
                  getBook={this.getBook}
                  onDelete={this.delete}
                  onMark={this.mark}
                />
              }
            />
            <Route
              path={"/categories"}
              element={<Category categories={this.state.categories} />}
            />
            <Route
              path={"/*"}
              element={
                <Books
                  books={this.state.books}
                  getBook={this.getBook}
                  onDelete={this.delete}
                  onMark={this.mark}
                />
              }
            />
          </Routes>
        </main>
      </Router>
    );
  }

  componentDidMount() {
    this.loadAuthors();
    this.loadCategories();
    this.loadBooks();
  }

  loadAuthors = () => {
    libraryService.fetchAuthors().then((data) => {
      this.setState({
        authors: data.data,
      });
    });
  };

  loadCategories = () => {
    libraryService.fetchCategories().then((data) => {
      this.setState({
        categories: data.data,
      });
    });
  };

  loadBooks = () => {
    libraryService.fetchBooks().then((data) => {
      this.setState({
        books: data.data,
      });
    });
  };

  addBook = (name, category, authorId, availableCopies) => {
    libraryService
      .addBook(name, category, authorId, availableCopies)
      .then(() => this.loadBooks());
  };

  editBook = (id, name, category, authorId, availableCopies) => {
    libraryService
      .editBook(id, name, category, authorId, availableCopies)
      .then(() => this.loadBooks());
  };

  getBook = (id) => {
    libraryService.getBook(id).then((data) => {
      this.setState({
        currentBook: data.data,
      });
    });
  };

  delete = (id) => {
    libraryService.deleteBook(id).then(() => {
      this.loadBooks();
    });
  };

  mark = (id) => {
    libraryService.markBook(id).then(() => {
      this.loadBooks();
    });
  };
}

export default App;
