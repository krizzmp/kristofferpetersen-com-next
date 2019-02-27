import { Header } from "../components/header";
// @ts-ignore
import c from "./portfolio.css";
import "./main.css";
// @ts-ignore
import Document, { meta } from "./test.mdx";
const { date, author, title } = meta;

function Index() {
  return (
    <div>
      <Header title={"portfolio"} />
      <div className={c.portfolio}>
        <article>
          <h2 className={c.title}>{title}</h2>
          <div className={c.date}>
            {date} by {author}
          </div>
          <div className={c.content}>
            <Document />
          </div>
        </article>
      </div>
    </div>
  );
}
export default Index;
