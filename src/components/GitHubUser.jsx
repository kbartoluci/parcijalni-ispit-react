import { Button } from "./Button";

export function GitHubUser(props) {
  const listItems = props.userRepositories.map((repo) => <li key={repo.id}>{repo.name}</li>);

  return (
    <div>
      <img src={props.avatar_url} />
      <div>{props.name}</div>
      <div>BIO: {props.bio}</div>
      <div>LOCATION: {props.location}</div>
      <div>REPOSITORIES:</div>
      <ul>{listItems}</ul>
      <Button onClick={props.onReset}>Reset</Button>
    </div>
  );
}
