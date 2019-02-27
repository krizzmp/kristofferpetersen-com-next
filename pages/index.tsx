import Link from "next/link";
import { Header } from "../components/header";
// @ts-ignore
import t from "./main.css";
function Grid({ children }: any) {
  return (
    <div
      className={t.grid}
    >
      {children}
    </div>
  );
}
const Index = () => (
  <div>

    <Header />

    <Grid maxWidth={700} gutter={32} columnCout={3}>
      <div className={t.t}>
        <h2>
          <Link href="/portfolio">
            <a>
              <div>Portfoilo</div>
            </a>
          </Link>
        </h2>
        <p>
          Check out my blog about considerations i make about event sourcing and
          functional programming in the context of a school project.
        </p>
      </div>
      <div className={t.t}>
        <h2>
          <Link href="https://hatch.now.sh">
            <a>
              <div>Hatch</div>
            </a>
          </Link>
        </h2>
        <p>
          Hatch is a collaborative diagramming tool that i created in my spare
          time.
        </p>
      </div>
    </Grid>
  </div>
);

export default Index;
