import React from "react";
import Link from "next/link";
export default function NotFound() {
  return (
    <>
      <div className="not-found">sorry bruv u on wrong page</div>
      <h2>
        {" "}
        Please go back <Link href="/">Home</Link>
      </h2>
    </>
  );
}
