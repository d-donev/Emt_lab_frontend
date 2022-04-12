import React from "react";
import { useNavigate } from "react-router-dom";

const EditBook = (props) => {
  const navigate = useNavigate();

  const [formData, updateFormData] = React.useState({
    name: "",
    category: "NOVEL",
    author: 1,
    availableCopies: 0,
  });

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const name = formData.name !== "" ? formData.name : props.currentBook.name;
    const category =
      formData.category !== "NOVEL"
        ? formData.category
        : props.currentBook.category;
    const author =
      formData.author !== 1 ? formData.author : props.currentBook.author.id;
    const availableCopies =
      formData.availableCopies !== 0
        ? formData.availableCopies
        : props.currentBook.availableCopies;
    props.onEditBook(
      props.currentBook.id,
      name,
      category,
      author,
      availableCopies
    );
    navigate("/books");
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-5">
          <form onSubmit={onFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Book name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder={props.currentBook.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select
                name="category"
                className="form-control"
                onChange={handleChange}
              >
                {props.categories.map((term) => {
                  if (
                    props.currentBook.category !== undefined &&
                    props.currentBook.category === term.id
                  )
                    return (
                      <option
                        selected={props.currentBook.category}
                        value={term}
                      >
                        {term}
                      </option>
                    );
                  else return <option value={term}>{term}</option>;
                })}
              </select>
            </div>
            <div className="form-group">
              <label>Author</label>
              <select
                name="author"
                className="form-control"
                onChange={handleChange}
              >
                {props.authors.map((term) => {
                  if (
                    props.currentBook.author !== undefined &&
                    props.currentBook.author.id === term.id
                  )
                    return (
                      <option
                        selected={props.currentBook.author.id}
                        value={term.id}
                      >
                        {term.name}
                      </option>
                    );
                  else return <option value={term.id}>{term.name}</option>;
                })}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="availableCopies">Available Copies</label>
              <input
                type="text"
                className="form-control"
                id="availableCopies"
                name="availableCopies"
                placeholder={props.currentBook.availableCopies}
                onChange={handleChange}
              />
            </div>

            <button id="submit" type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
