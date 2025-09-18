"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'system'>('system');

  useEffect(() => {
    setMounted(true);
    // Initialize current theme based on stored preference
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' || 'system';
    setCurrentTheme(storedTheme);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Update current theme when theme changes
      if (theme === 'system') {
        setCurrentTheme('system');
      } else if (theme === 'light' || theme === 'dark') {
        setCurrentTheme(theme);
      }
    }
  }, [theme, mounted]);

  const cycleTheme = () => {
    const themes = ['system', 'light', 'dark'] as const;
    const currentIndex = themes.indexOf(currentTheme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];

    setCurrentTheme(nextTheme);
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  if (!mounted) {
    return (
      <div className="w-8 h-8" />
    );
  }

  const getIcon = () => {
    if (currentTheme === 'system') {
      return <Monitor className="w-4 h-4" />;
    }
    return currentTheme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />;
  };

  const getThemeLabel = () => {
    if (currentTheme === 'system') {
      return 'System';
    }
    return currentTheme === 'dark' ? 'Dark' : 'Light';
  };

  return (
    <button
      onClick={cycleTheme}
      className="relative inline-flex items-center justify-center w-8 h-8 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      title={`Theme: ${getThemeLabel()} (Click to cycle)`}
    >
      <span className="sr-only">Toggle theme (Current: {getThemeLabel()})</span>
      {getIcon()}
    </button>
  );
}