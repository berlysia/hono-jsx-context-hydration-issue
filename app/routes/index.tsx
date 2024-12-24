import { css } from "hono/css";
import { createRoute } from "honox/factory";
import Counter from "../islands/counter";
import Provider from "../islands/provider";
import Donut from "../islands/donut";

function App() {
  return (
    <Provider>
      <Donut>
        <Counter />
      </Donut>
    </Provider>
  );
}

export default createRoute((c) => {
  const name = c.req.query("name") ?? "Hono";
  return c.render(<App />, { title: name });
});
