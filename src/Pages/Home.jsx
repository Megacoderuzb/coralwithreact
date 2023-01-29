import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "../Components/Product";

const Home = () => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${count}`)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, [count]);

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
        <div>
          <button onClick={handleIncrease}>+</button>
          {count}
          <button onClick={handleDecrease}>-</button>
        </div>
      </div>
      <input
        style={{
          width: "100%",
          height: "40px",
          borderRadius: "10px",
          marginTop: "1rem",
          marginBottom: "2rem",
        }}
        type="text"
        placeholder="Search ..."
        onChange={handleInputChange}
        value={inputValue}
      />
      {/* <h1>{inputValue}</h1> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "0.4rem",
        }}
      >
        {items.length === 0 ? (
          <div>Loading</div>
        ) : (
          items.map((item) => <Product product={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default Home;
