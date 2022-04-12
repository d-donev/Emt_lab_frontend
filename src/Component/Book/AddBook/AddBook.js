import React from "react";
import { useNavigate } from "react-router-dom";

const ProductAdd = (props) => {
  const navigate = useNavigate();

  const [formData, updateFromData] = React.useState({
    name: "",
    category: "NOVEL",
    author: 1,
    availableCopies: 0,
  });

  const handleChange = (e) => {
    updateFromData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const name = formData.name;
    const category = formData.category;
    const author = formData.author;
    const availableCopies = formData.availableCopies;

    props.onProductAdd(name, category, author, availableCopies);
    navigate("/books");
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-5">
          <form onSubmit={onFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Product name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                placeholder="Enter product name"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="availableCopies">Quantity</label>
              <input
                type="text"
                className="form-control"
                id="availableCopies"
                name="availableCopies"
                placeholder="availableCopies"
                required
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
                {props.categories.map((term, key) => (
                  <option key={key} value={term}>
                    {term}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Authors</label>
              <select
                name="author"
                className="form-control"
                onChange={handleChange}
              >
                {props.authors.map((term, key) => (
                  <option key={key} value={term.id}>
                    {term.name}
                  </option>
                ))}
              </select>
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

export default ProductAdd;
