"use client";
import { useState } from "react";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@mui/material";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [url, setUrl] = useState("");

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle("dark-theme", !isDarkTheme);
    document.body.classList.toggle("light-theme", isDarkTheme);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("URL Submitted:", url);
  };

  return (
    <main className={styles.main}>
      <div className={styles.navButtons}>
        <SignedOut>
          <Link href="/sign-in" passHref>
            <Button className={styles.navButton}>
              LOGIN
            </Button>
          </Link>
          <Link href="/sign-up" passHref>
            <Button className={styles.navButton} >
              SIGN UP
            </Button>
          </Link>
        </SignedOut>
      </div>
      
      <div className={styles.themeToggle}>
        <label className={styles.switch}>
          <input type="checkbox" checked={isDarkTheme} onChange={handleThemeToggle} />
          <span className={styles.slider}></span>
        </label>
        <span className={styles.toggleText}>{isDarkTheme ? "Dark Mode" : "Light Mode"}</span>
      </div>

      <div className={styles.content}>
        <h1>Welcome to Web Scraper ✰</h1>
        <p>Enter a URL to scrape data from a webpage and see the results!</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
            className={styles.input}
          />
          <button
            type="submit"
            className={`${styles.submitButton} ${isDarkTheme ? styles.darkButton : styles.lightButton}`}
          >
            Scrape
          </button>
        </form>
      </div>
    </main>
  );
}


