import { useEffect, useState } from "react";
import { GitHubUser as Component } from "../components/GitHubUser";

export function GitHubUser(props) {
  const [userInfo, setUserInfo] = useState(null);
  const [userRepositories, setUserRepositories] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (props.username !== null && props.username !== undefined) {
      fetch(`https://api.github.com/users/${props.username}`)
        .then((response) => response.json())
        .then((json) => {
          setUserInfo({
            avatar_url: json.avatar_url,
            name: json.name,
            location: json.location,
            bio: json.bio,
          });

          fetch(`https://api.github.com/users/${props.username}/repos`)
            .then((response) => response.json())
            .then((json) => setUserRepositories(json))
            .catch((error) => setError(error));
        })
        .catch((error) => setError(error));
    }
  }, [props]);

  if (error !== null) {
    return <div>Error</div>;
  }

  if (userInfo === null) {
    return <div></div>;
  }

  return (
    <div>
      {userInfo !== null && userRepositories !== null && (
        <Component
          avatar_url={userInfo.avatar_url}
          name={userInfo.name}
          location={userInfo.location}
          bio={userInfo.bio}
          userRepositories={userRepositories}
        />
      )}
    </div>
  );
}
