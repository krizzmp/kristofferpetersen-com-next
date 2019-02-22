import Head from "next/head";
import { Header } from "../components/header";
// @ts-ignore
import c from "./portfolio.css";
import "./main.css";
// @ts-ignore
import Document from "./test.mdx";
const Index = () => (
  <div>
    <Head>
      <title>portfolio - kristoffer petersen</title>
    </Head>
    <Header />
    <div className={c.portfolio}>
      <h1>portfolio</h1>
      <article>
        <h2 className={c.title}>Considerations</h2>
        <div className={c.date}>Feb 19, 2019 by Kristoffer Petersen</div>
        <div className={c.content}>
          <Document />
        </div>
      </article>
    </div>
  </div>
);
export default Index;
