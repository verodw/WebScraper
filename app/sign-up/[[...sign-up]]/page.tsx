"use client";
import { SignUp } from "@clerk/nextjs";
import { Button, Container, Typography, Box } from "@mui/material";
import Link from "next/link";
import styles from "./page.module.css";

export default function SignUpPage() {
  return (
    <Container className={styles.container}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="0 20px"
        height="64px"
        borderBottom="1px solid #e0e0e0"
      >
        <Typography variant="h6">
          Web Scraper ✰
        </Typography>
        <Box>
          <Link href="/sign-in" passHref>
            <Button className={styles.navButton}>
              LOGIN
            </Button>
          </Link>
          <Link href="/sign-up" passHref>
            <Button className={styles.navButton}>
              SIGN UP
            </Button>
          </Link>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="calc(100vh - 64px)" 
        padding="20px"
      >
        <Typography variant="h4" className={styles.title}>
          Sign Up
        </Typography>
        <SignUp />
      </Box>
    </Container>
  );
}



