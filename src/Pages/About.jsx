import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

// Rerender
// 1) state
// 2) props
// 3) Parent rerender

const About = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);

  function handleClick() {
    setCount(count + 1);
  }

  function handleChangeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  function handleOpenSidebar() {
    setOpen(!open);
  }

  console.log(theme);

  return (
    <div className={theme}>
      <Header />
      About
      <Footer />
      <button onClick={handleOpenSidebar}>Toggle SideBar</button>
      <button onClick={handleChangeTheme}>Change Theme</button>
      <button onClick={handleClick}>Click to add one</button>
      {count}
      {open && <aside>SideBar</aside>}
    </div>
  );
};

export default About;
