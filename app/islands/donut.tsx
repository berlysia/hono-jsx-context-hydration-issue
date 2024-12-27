import { PropsWithChildren, useContext, useId, useState } from "hono/jsx";
import MyContext from "../context";

export default function Donut({ children }: PropsWithChildren) {
  const id = useId();
  const [contextCount, setContextCount] = useContext(MyContext);
  const [count, setCount] = useState(0);
  console.log({ id, count, contextCount });
  return (
    <div>
      <h2>Donut</h2>
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
      <div style={{ marginInlineStart: "2em" }}>{children}</div>
    </div>
  );
}
