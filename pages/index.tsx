import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/header";

const Index = () => (
  <div>
    <Head>
      <title>kristoffer petersen</title>

    </Head>
    <Header/>
    <Link href="/portfolio">
      <a>portfoilo</a>
    </Link>
  </div>
);

export default Index;
