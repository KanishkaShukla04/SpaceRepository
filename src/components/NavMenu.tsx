"use client";
import React from "react";

const items = ["About", "Work", "Projects", "Blog", "Talks", "Contact", "Resume"];

export default function NavMenu() {
  return (
    <nav style={{ position: "absolute", left: 20, top: 60, zIndex: 6 }} aria-label="Primary">
      <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "white" }}>
        {items.map((it, i) => (
          <li key={it} style={{ marginBottom: 12, opacity: 0.9 }}>
            <a href="#" style={{ color: "white", textDecoration: "none", display: "flex", gap: 8, alignItems: "center" }}>
              <strong style={{ minWidth: 36, display: "inline-block" }}>{String(i + 1).padStart(2, "0")}</strong>
              <span>{it}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
