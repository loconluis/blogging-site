import { useState, useContext, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import ThemeContext from "../context/Theme";

export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [disable, setDisable] = useState(false);
  const contextType = useContext(ThemeContext);

  useEffect(() => {
    const changeIcon = () => {
      setIsDarkMode(contextType == "dark" ? true : false);
    };
    changeIcon();
  }, [contextType]);

  const toggleDarkMode = () => {
    setDisable(true);
    setIsDarkMode(!isDarkMode);
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const switchToTheme = currentTheme == "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", switchToTheme);
    localStorage.setItem("currentThemeSelected", switchToTheme);
    setTimeout(() => {
      setDisable(false);
    }, 600);
  };

  return (
    <button disabled={disable} className="content-toggle">
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={30}
      />
    </button>
  );
}
