import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
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
