import Link from "next/link";
import Head from "next/head";
export default function dog() {
  <Head>
    <title>Home</title>
    <meta name="keywords" content="portfolio"></meta>
  </Head>;
  return (
    <div>
      bruv what you doin, please just go to{" "}
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}
