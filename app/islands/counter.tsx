import { useContext, useEffect, useId, useReducer, useState } from "hono/jsx";
import MyContext from "../context";
import ViewOnly from "./viewonly";

export default function Counter() {
  const [contextCount, setContextCount] = useContext(MyContext);
  const [count, setCount] = useState(0);
  const [, rerender] = useReducer((c) => c + 1, 0);
  const id = useId();
  console.log({ id, count, contextCount });

  return (
    <div>
      <h2>Counter</h2>
      <p>
        context {contextCount}{" "}
        <button type="button" onClick={() => setContextCount((c) => c + 1)}>
          +
        </button>
      </p>
      <p>
        state {count}{" "}
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          +
        </button>
      </p>

      <button onClick={() => rerender(null)}>rerender</button>
    </div>
  );
}
