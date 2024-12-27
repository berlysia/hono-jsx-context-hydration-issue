import ssgBuild from "@hono/vite-ssg";
import honox from "honox/vite";
import { defineConfig } from "vite";
import client from "honox/vite/client";

const entry = "./app/server.ts";

const base = process.env.VITE_BASE_PATH ?? "/";
console.log("base", base);

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      base,
      plugins: [client()],
    };
  }
  return {
    build: {
      emptyOutDir: false,
    },
    base,
    plugins: [honox(), ssgBuild({ entry }), client()],
  };
});
