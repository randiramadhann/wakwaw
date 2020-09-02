import React from "react";
import Head from "next/head";

import Login from "../pages/login";

export default function Home() {
  return (
    <div className="homepage">
      <Head>
        <title>ZENIA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="maincontent">
        <h1>Hi there!</h1>
      </main>
    </div>
  );
}
