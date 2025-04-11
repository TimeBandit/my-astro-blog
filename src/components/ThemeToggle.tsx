import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Toggle } from "./ui/toggle";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle
      pressed={theme === "dark"}
      onPressedChange={toggleTheme}
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
