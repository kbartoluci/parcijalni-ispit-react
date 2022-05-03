import { Button } from "./Button";
import { Input } from "./Input";

export function SearchForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <Input
        type="text"
        name="username"
        placeholder="GitHub Username:"
        onChange={props.onChange}
      />
      <Button type="submit">GO!</Button>
    </form>
  );
}
