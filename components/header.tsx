// @ts-ignore
import c from "./header.css";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Head from "next-server/head";
export function Header({ title = "kristoffer petersen" }) {
  return (
    <div className={c.header}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Link href="/">
        <a aria-label="go home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 796.2 395.1"
            height={32}
          >
            <g id="XMLID_209_">
              <path
                id="XMLID_81_"
                d="M261,0.1h123l0.5-0.1c-1.1,75.1-32.3,143.5-84.8,189.6c53.5,46.9,89.6,117.2,89.6,193.9c0,1,0,7.6,0,11.6
		H261.3c0-4-0.3-9.7-0.3-10.4c0-70.5-59-129.1-129.5-129.1c-1.2,0-1.6-1.5-5.6-1.4v140.9H0V0.1h126v124.5c4,0,3.2,0,3.9,0
		c0.6,0,2,0,2.6,0s1.6,0.6,2.1,0.6c69.7-0.9,126.2-56.1,126.2-125.1H261z"
              />
            </g>
            <g id="XMLID_210_">
              <path
                id="XMLID_79_"
                d="M539.2,128.7c69.7,0,128.2-62.6,129.2-128.6h127.9c-1.7,135-117.1,254-257.1,254l-5.8-0.4l0,141.4H406V0.1
		h127.2l0.1,128.7L539.2,128.7z"
              />
            </g>
          </svg>
        </a>
      </Link>
      <div className={c.name}>{title}</div>
      <div className={c.content}>
        <div className={c.icon}>
          <a href={"https://github.com/krizzmp"} aria-label="my github">
            <FaGithub>github</FaGithub>
          </a>
        </div>
        <div className={c.icon}>
          <a href={"https://twitter.com/krizzmp"} aria-label="my twitter">
            <FaTwitter>twitter</FaTwitter>
          </a>
        </div>
      </div>
    </div>
  );
}
