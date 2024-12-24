import { createContext } from "hono/jsx";

const MyContext = createContext<[number, (arg: number | ((value: number) => number)) => void]>([0, () => {}]);

export default MyContext;
