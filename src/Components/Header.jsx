import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [count, setCount] = useState(0);
  // function handleIncrease() {
  //   setCount(count + 1);
  // }

  useEffect(() => {
    async function fetchData() {
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        // .then((json) => setItems(json))
        // .catch(console.error("Close console"));
    }
    fetchData();
  }, []);

  //
  //
  // useEffect(async function () {
  //   await fetch(`https://fakestoreapi.com/products`)
  //     .then((res) => res.json())
  //     .then((json) => setItems(json))
  //     .catch(console.error("Close console"));
  // }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Coral</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            fontSize: "20px",
          }}
        >
          <Link style={{ textDecoration: "none", color: "#333" }} to={"/"}>
            Home
          </Link>
          <Link style={{ textDecoration: "none", color: "#333" }} to={"/about"}>
            About
          </Link>
        </div>
        {/* <div>
          <button onClick={handleIncrease}>+</button>
          {count}
          <button onClick={handleDecrease}>-</button>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
