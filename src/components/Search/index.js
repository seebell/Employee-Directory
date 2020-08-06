  
import React from "react";
import "./style.css";

function Search(props) {
  return (
    <form className="search">
      <div className="form-group">
        <h4>Search:</h4>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="Employees"
          type="text"
          className="form-control"
          placeholder="Please enter an employee name to search"
          id="index"
        />
        <br></br>
        <button type="submit" onClick={(e) => {
          e.preventDefault()
          props.findEmployee()}} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;