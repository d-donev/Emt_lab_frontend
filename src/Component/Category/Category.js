import React from "react";

const Category = (props) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <ul class="list-group">
          <li class="list-group-item active">Categories</li>
          {props.categories.map((term, key) => {
            return (
              <li class="list-group-item" key={key}>
                {term}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Category;
