import { Header } from "../components/header";
// @ts-ignore
import c from "./portfolio.css";
import "./main.css";

// @ts-ignore
import * as t from "./test.mdx";
// @ts-ignore
import * as g from "./post2.mdx";

function Post(p: { doc: any; meta: { date: any; author: any; title: any } }) {
  return (
    <article>
      <h2 className={c.title}>{p.meta.title}</h2>
      <div className={c.date}>
        {p.meta.date} by {p.meta.author}
      </div>
      <div className={c.content}>
        <p.doc />
      </div>
    </article>
  );
}

function Index() {
  return (
    <div>
      <Header title={"portfolio"} />
      <div className={c.portfolio}>
        <Post doc={g.default} meta={g.meta} />
        <Post doc={t.default} meta={t.meta} />
      </div>
    </div>
  );
}
export default Index;
