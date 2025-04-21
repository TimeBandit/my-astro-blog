import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Toggle } from "./ui/toggle";

type Theme = "light" | "dark" | null;

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(null);

  useEffect(() => {
    console.log("ThemeToggle mounted");
    const storedTheme = sessionStorage.getItem("theme") as Theme;
    setTheme(storedTheme || "light");
  }, []);

  useEffect(() => {
    if (theme) {
      sessionStorage.setItem("theme", theme);
    }

    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme || "light");
  }, [theme]);

  return (
    <Toggle
      pressed={theme === "dark"}
      onPressedChange={() =>
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
      }
      className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-brutalist-white dark:bg-brutalist-black border-2 border-brutalist-black dark:border-brutalist-white p-0 hover:bg-brutalist-pink transition-colors duration-200"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-brutalist-white" />
      ) : (
        <Moon size={18} className="text-brutalist-black" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
