"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    // Log 404 events for monitoring — integrate with analytics if needed
    console.warn("[SEO 404]", window.location.pathname);
  }, []);

  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        color: "#111",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "6rem", fontWeight: 900, lineHeight: 1, margin: 0 }}>
        404
      </h1>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "1rem" }}>
        Page Not Found
      </h2>
      <p style={{ color: "#555", maxWidth: "400px", marginTop: "0.75rem", lineHeight: 1.6 }}>
        The page you're looking for doesn't exist. Head back to explore the
        official portfolio of <strong>Mohan Prasath</strong>, Full Stack Developer.
      </p>
      <Link
        href="/"
        style={{
          marginTop: "2rem",
          padding: "0.75rem 2rem",
          background: "#111",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 700,
          borderRadius: "0.375rem",
          fontSize: "1rem",
        }}
      >
        ← Back to Mohan Prasath Portfolio
      </Link>
    </main>
  );
}
