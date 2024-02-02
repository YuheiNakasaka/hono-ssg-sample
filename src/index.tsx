import { Hono } from "hono";
import type { FC } from "hono/jsx";
import { css, Style } from "hono/css";

const app = new Hono();

const Layout: FC = (props) => {
  return (
    <html>
      <Style />
      <body>{props.children}</body>
    </html>
  );
};

const Top: FC<{ messages: string[] }> = (props: { messages: string[] }) => {
  const headerClass = css`
    color: green;
  `;
  return (
    <Layout>
      <h1 class={headerClass}>Hello Hono!!</h1>
      <ul>
        {props.messages.map((message) => {
          return <li>{message}!!</li>;
        })}
      </ul>
    </Layout>
  );
};

app.get("/", (c) => {
  const messages = ["Good Morning", "Good Evening", "Good Night", "Good Bye!!!"];
  return c.render(<Top messages={messages} />);
});

app.get('/hello', (c) => {
  return c.render(<div>Hello</div>);
});

app.get('/random', (c) => {
  return c.render(<div>{Math.random()}</div>);
});

export default app;
