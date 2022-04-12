import axios from "../Custom-axios/axios";

const libraryService = {
  fetchAuthors: () => {
    return axios.get("/authors");
  },
  fetchCategories: () => {
    return axios.get("/categories");
  },
  fetchBooks: () => {
    return axios.get("/books");
  },
  addBook: (name, category, authorId, availableCopies) => {
    console.log(name);
    console.log(category);
    console.log(authorId);
    console.log(availableCopies);

    return axios.post("/add", {
      name: name,
      category: category,
      authorId: authorId,
      availableCopies: availableCopies,
    });
  },

  editBook: (id, name, category, authorId, availableCopies) => {
    return axios.put(`/edit/${id}`, {
      name: name,
      category: category,
      authorId: authorId,
      availableCopies: availableCopies,
    });
  },

  getBook: (id) => {
    return axios.get(`/${id}`);
  },

  deleteBook: (id) => {
    return axios.delete(`/delete/${id}`);
  },
  markBook: (id) => {
    return axios.put(`/mark/${id}`);
  },
};

export default libraryService;
