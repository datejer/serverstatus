import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import SEO from "../components/SEO";
import styles from "../styles/Home.module.css";

import Icon from "../public/favicon.png";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleThemeChange = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className={styles.container}>
      <SEO />

      <main className={styles.main}>
        <div className={styles.top}>
          <Image src={Icon} alt="Icon" width={100} height={100} placeholder="blur" />
          <div className={styles.headings}>
            <h1 className={styles.title}>Minecraft Server Status</h1>
            <p className={styles.description}>
              Minecraft Server Status API - get all the information about a server!
            </p>
          </div>
        </div>

        <section className={styles.section}>
          <p className={styles.about}>
            Get all the information about a Minecraft server (status & query) in the form of JSON.
            Every response returns the same consistent object structure (unless it&apos;s an error).
            If a value is missing or could not be fetched it returns{" "}
            <code className={styles.inlineCode}>null</code>.
          </p>
          <p className={styles.about}>
            If you are an administrator we recommend enabling query on the server, by setting{" "}
            <code className={styles.inlineCode}>enable-query</code> to{" "}
            <code className={styles.inlineCode}>true</code> in your{" "}
            <code className={styles.inlineCode}>server.properties</code> file. This way you can get
            the most information possible.
          </p>
          <p className={styles.about}>
            {" "}
            All requests are cached using{" "}
            <a href="https://web.dev/stale-while-revalidate/">stale-while-revalidate</a> on the{" "}
            <a href="https://vercel.com/docs/concepts/functions/edge-caching">Edge</a> for 1 minute
            (!).
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Java</h2>
          <div style={{ display: "grid" }}>
            <code className={styles.code}>curl https://server.mojan.ga/api/{`\<address\>`}</code>
          </div>
          <br />
          <Link href={"/api/server.dogcraft.net"}>
            <a className={styles.example}>Example response</a>
          </Link>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Bedrock</h2>
          <div style={{ display: "grid" }}>
            <code className={styles.code}>
              curl https://server.mojan.ga/api/bedrock/{`\<address\>`}
            </code>
          </div>
          <br />
          <Link href={"/api/bedrock/fr.hivebedrock.network"}>
            <a className={styles.example}>Example response</a>
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        {mounted ? (
          <button
            aria-pressed={theme === "dark"}
            className={styles.themeSwitch}
            onClick={handleThemeChange}
          >
            <span aria-hidden="true">{theme === "dark" ? "🌞" : "🌙"}</span>
            <span data-visually-hidden>
              {theme === "dark" ? "Dark theme enabled" : "White theme enabled"}
            </span>
          </button>
        ) : (
          <button className={styles.themeSwitch}>🌞</button>
        )}
        <a href="https://github.com/datejer" target="_blank" rel="noopener noreferrer">
          Made by <span className={styles.name}>ejer</span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
