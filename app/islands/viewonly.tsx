import { useContext } from "hono/jsx";
import MyContext from "../context";

export default function ViewOnly() {
  const [state] = useContext(MyContext);

  return (
    <div>
      <p>{state}</p>
    </div>
  );
}
