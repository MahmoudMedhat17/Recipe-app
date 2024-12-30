import { useEffect, useState } from "react";

const Darkmode = () => {
  // A state that has an anonymous function that gets saved data from localStorage and save it to a var named savedTheme and return that var "dark" and if not then return "light"
  const [theme, setTheme] = useState(() => {
    // Set the key of the localStorage to "theme"
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    // Here we initialize the var docWindow with the document to change the color of the whole document
    const docWindow = document.documentElement;
    // Condition if theme state = "dark" ? then add to the document class "dark" : remove from the document class "dark"
    if (theme === "dark") {
      docWindow.classList.add("dark");
    } else {
      docWindow.classList.remove("dark");
    }

    // We set to the localStorage whatever in the theme state using the "theme" key we intialized when get the data in the localStorage
    localStorage.setItem("theme", theme);
  // Render whenever theme state changes
  }, [theme]); 

  // Fucntion to toggle the theme state between "dark" and "light" using the setTheme state
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
