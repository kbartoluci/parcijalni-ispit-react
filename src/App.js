import { SearchForm } from "./containers/SearchForm";
import { GitHubUser } from "./containers/GitHubUser";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState(null);

  const handleSearch = (data) => {
    setUsername({ username: data.username });
  };

  const handleReset = (data) => {
    setUsername(null);
  };


  return (
    <div className="App">
      {username === null && <SearchForm onSearch={handleSearch} />}
      <GitHubUser {...username} onReset={handleReset}/>
    </div>
  );
}

export default App;
