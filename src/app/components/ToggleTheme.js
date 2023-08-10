"use client";
import { useEffect } from "react";
import SunIcon from "./icons/SunIcon";

export default function ToggleTheme() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const toggle = () => {
    if (
      localStorage.getItem("theme") === "dark" ||
      document.documentElement.classList.contains("dark")
    ) {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", "dark");
      localStorage.removeItem("theme", "dark");
    } else {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <button onClick={toggle}>
      <SunIcon />
    </button>
  );
}
