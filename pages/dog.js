import Link from "next/link";

export default function dog() {
  return (
    <div>
      bruv what you doin, please just go to{" "}
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}
