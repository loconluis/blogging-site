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
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' || 'system';
    setCurrentTheme(storedTheme);
  }, []);

  useEffect(() => {
    if (mounted) {
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
      <div className="w-9 h-9" />
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
      className="relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#e8e4df] dark:border-[#2a2a2a] text-[#4a4a4a] dark:text-[#a0a0a0] hover:border-[#1d4ed8] hover:text-[#1d4ed8] dark:hover:border-[#60a5fa] dark:hover:text-[#60a5fa] transition-all duration-300 hover:bg-[#1d4ed8]/5 focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]/30"
      title={`Theme: ${getThemeLabel()} (Click to cycle)`}
    >
      <span className="sr-only">Toggle theme (Current: {getThemeLabel()})</span>
      {getIcon()}
    </button>
  );
}