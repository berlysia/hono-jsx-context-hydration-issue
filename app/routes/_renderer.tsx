import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";
import ManifestResolver from "../ManifestResolver";

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <ManifestResolver type="script" src="/app/client.ts" async />
        <Style />
      </head>
      <body>
        <aside>
          <a
            href="https://github.com/berlysia/hono-jsx-context-hydration-issue"
            target="_blank"
          >
            source code
          </a>
        </aside>
        <div>{children}</div>
      </body>
    </html>
  );
});
