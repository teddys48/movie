import { useState } from "react";

const ButtonToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("color-theme"));
  const [sidebar, setSidebar] = useState(localStorage.getItem("sidebar"));

  const onButtonClick = () => {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        setTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        setTheme("light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        setTheme("light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        setTheme("dark");
      }
    }

    localStorage.setItem("sidebar", !Boolean(sidebar));
    setSidebar(!Boolean(sidebar));
  };
  return (
    <>
      <button onClick={() => onButtonClick()} className="">
        <i
          className={
            theme == "dark" ? "fa-regular fa-moon" : "fa-regular fa-sun"
          }
        ></i>
      </button>
    </>
  );
};

export default ButtonToggle;
