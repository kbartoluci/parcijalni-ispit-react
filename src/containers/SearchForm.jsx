import { useState } from "react";
import { SearchForm as Component } from "../components/SearchForm";

export function SearchForm(props) {
  const [state, setState] = useState({});

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(state);
  };

  return <Component onSubmit={handleSubmit} onChange={handleChange} />;
}
