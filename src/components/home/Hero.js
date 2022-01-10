import Link from "next/link";
import styles from "@/styles/Hero.module.css";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

export default function Hero() {
  const httpRef = useRef();

  const handleMouseMove = (e) => {
    // get the mouse position and the distance from the ref
    const { clientX, clientY } = e;
    const { current } = httpRef;
    // the location of the ref on the page
    const { x, y } = current.getBoundingClientRect();
    // euclidean distance from the mouse to the ref
    const distance = Math.sqrt(
      Math.pow(clientX - x, 2) + Math.pow(clientY - y, 2),
    );

    // change the color of the text from white to lime green based on the distance to the ref
    // starting at a distance of 300 from the ref the color will change to lime green
    // and then back to white at a distance of 500px from the ref

    const luminosity = (distance / 300) * 100;
    const color = `hsl(81, 100%, ${luminosity < 55 ? 55 : luminosity}%)`;
    current.style.color = color;
  };

  return (
    <section className={styles.container} onMouseMove={handleMouseMove}>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          Develop better code, faster with an API to help you test any{" "}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status'
            className={styles.http}
            ref={httpRef}
          >
            HTTP
          </a>{" "}
          response you need.
        </h1>
        <blockquote className={styles.about}>
          A utility first API that helps you write better code without changing
          the way you work. All the HTTP response status codes available from
          one convenient API.
        </blockquote>
        <Link href='/docs'>
          <a className={styles.callToAction}>
            Let&apos;s get started
            <FaArrowRight />{" "}
          </a>
        </Link>
      </div>
    </section>
  );
}
