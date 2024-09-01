import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner)}
      style={{
        display: "grid",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        background:
          "url(https://wallpapercave.com/wp/wp2640790.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">HOTEL MANAGER</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/welcome_to_hems"
          >
            View Documentation
          </Link>
        </div>
      </div>
      <p className="hero__subtitle" style={{ color: "orange" }}>
        {/* Note!! Documentation is still on going. More features are available in
        the pdf provided. */}
      </p>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="With HEMS, you’re not just managing rooms; you’re orchestrating experiences. From check-in to check-out, our intuitive platform empowers you to personalize guest interactions, track preferences, and anticipate needs. Welcome to the future of hospitality."
    >
      <HomepageHeader />
    </Layout>
  );
}
