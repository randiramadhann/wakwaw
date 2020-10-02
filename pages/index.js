import React from "react";
import Head from "next/head";
import Dashboard from "./dashboard";
import Login from "../pages/login";

export default function Home() {
  return (
    <div className="homepage">
      <Head>
        <title>ZENIA</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Dashboard />
    </div>
  );
}
