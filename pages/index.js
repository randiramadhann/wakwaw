import React from "react";
import Head from "next/head";
import Dashboard from "./dashboard";
import Login from "../pages/login";
import {withAuth} from "../utils/withAuth"

function Home() {
  return (
    <>
      <Head>
        <title>ZENIA ADMIN</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Dashboard />
    </>
  );
}
export default withAuth(Home)