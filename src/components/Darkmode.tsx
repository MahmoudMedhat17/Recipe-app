import { useEffect, useState } from "react";

const Darkmode = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    const docWindow = document.documentElement;
    if (theme === "dark") {
      docWindow.classList.add("dark");
    } else {
      docWindow.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? (
        <img src="/lightMode.png" className="w-12 cursor-pointer" />
      ) : (
        <img src="/darkMode.png" className="w-12 cursor-pointer" />
      )}
    </button>
  );
};

export default Darkmode;
