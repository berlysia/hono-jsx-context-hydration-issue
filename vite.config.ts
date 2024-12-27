import ssgBuild from "@hono/vite-ssg";
import honox from "honox/vite";
import { defineConfig } from "vite";
import client from "honox/vite/client";

const entry = "./app/server.ts";

export default defineConfig(({ mode }) => {
  return {
    build: {
      emptyOutDir: false,
    },
    plugins: [honox(), ssgBuild({ entry }), client()],
  };
});
