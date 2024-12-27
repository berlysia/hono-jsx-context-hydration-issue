import { PropsWithChildren, useId, useState } from "hono/jsx";
import MyContext from "../context";

export default function Provider({ children }: PropsWithChildren) {
  const [contextCount, setContextCount] = useState(0);
  const id = useId();
  console.log({ id, contextCount });
  return (
    <MyContext.Provider value={[contextCount, setContextCount]}>
      <div>
        <p>
          context {contextCount}{" "}
          <button type="button" onClick={() => setContextCount((c) => c + 1)}>
            +
          </button>
        </p>

        <div style={{ marginInlineStart: "2em" }}>{children}</div>
      </div>
    </MyContext.Provider>
  );
}
