import Backend from "@/components/home/Backend";
import Frontend from "@/components/home/Frontend";
import Link from "next/link";
import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.header}>Developing code is hard.</h2>

        <blockquote className={styles.quote}>
          <p>
            Don&apos;t waste your time hard coding response types. Instead,
            write code that makes sense in the context of your application. Use
            your endpoints, your data, and your logic; Let us handle the{" "}
            <Link href={"/docs"}>
              <a className={styles.callout}>REST</a>
            </Link>
            .
          </p>
        </blockquote>
      </section>
    </>
  );
}
