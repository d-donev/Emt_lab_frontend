import React from "react";
import { Link } from "react-router-dom";

const BookTerm = (props) => {
  return (
    <tr>
      <td>{props.term.name}</td>
      <td>{props.term.category}</td>
      <td>{props.term.author.name}</td>
      <td>{props.term.author.country.name}</td>
      <td>{props.term.availableCopies}</td>
      <td>
        <Link
          className={"btn btn-info pr-2"}
          onClick={() => props.getBook(props.term.id)}
          to={`/books/edit/${props.term.id}`}
        >
          Edit
        </Link>
        <Link
          className={"btn btn-danger pl-3"}
          onClick={() => props.onDelete(props.term.id)}
          to={"/books"}
        >
          Delete
        </Link>
        <button
          className="btn btn-warning"
          onClick={() => props.onMark(props.term.id)}
          disabled={props.term.availableCopies === 0}
        >
          Mark as taken
        </button>
      </td>
    </tr>
  );
};

export default BookTerm;
