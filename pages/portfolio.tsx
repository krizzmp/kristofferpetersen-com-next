import Head from "next/head";
import { Header } from "../components/header";
// @ts-ignore
import s from "./portfolio.css";
// @ts-ignore
import s2 from "./portfolio_kindle.css";
// @ts-ignore
import s3 from "./portfolio_kindle2.css";
import "./main.css";
// @ts-ignore
import Document, { meta } from "./test.mdx";
import { useState } from "react";
const { date, author, title } = meta;

function Index() {
  let [c, setTheme] = useState(s3);
  return (
    <div>
      <Head>
        <title>portfolio - kristoffer petersen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header title={"portfolio"} />
      <button onClick={() => setTheme(s)}>medium</button>
      <button onClick={() => setTheme(s2)}>kindle</button>
      <button onClick={() => setTheme(s3)}>iBooks</button>
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
