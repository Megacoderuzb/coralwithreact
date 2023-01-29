import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";

const MoreInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className=" container">
      <Header />
      <div className=" d-flex flex-wrap align-items-center gap-3 justify-content-center">
        {product && (
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "",
              }}
            >
              <img
                key={crypto.randomUUID()}
                width={300}
                height={300}
                src={product.image}
                alt="rasm"
              />

              <div>
                <h3>{`${product.title}`}</h3>
                <h3>{`Category: ${product.category}`}</h3>
              </div>
            </div>
            <h3>{`${product.description}`}</h3>
            <div>
              <h4>{`Rating:⭐ ${product?.rating?.rate}`}</h4>
              <h4>{`Price:💲 ${product.price}`}</h4>
            </div>
            {/* <h3>{product}</h3> */}
          </div>
        )}

        {!product && <h1>Product not found!</h1>}
      </div>
    </div>
  );
};

export default MoreInfo;
