import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/header";
// @ts-ignore
import t from "./main.css";
const Index = () => (
  <div>
    <Head>
      <title>kristoffer petersen</title>
    </Head>
    <Header />
    <Link href="/portfolio">
      <a>
        <div className={t.card}>portfoilo</div>
      </a>
    </Link>
    <Link href="https://hatch.now.sh">
      <a>
        <div className={t.card}>hatch</div>
      </a>
    </Link>
  </div>
);

export default Index;
