import Head from "next/head";

import { FaBroadcastTower, FaGithubAlt } from "react-icons/fa";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Relay It</title>
      </Head>
      <Navbar />
      <Hero />
      <div className={styles.content}>test</div>
    </>
  );
}
