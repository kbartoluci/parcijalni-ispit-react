import { SearchForm } from "./containers/SearchForm";
import { GitHubUser } from "./containers/GitHubUser";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState(null);

  const handleSearch = (data) => {
    setUsername({ username: data.username });
  };


  return (
    <div className="App">
      {username === null && <SearchForm onSearch={handleSearch} />}
      <GitHubUser {...username} />
    </div>
  );
}

export default App;
