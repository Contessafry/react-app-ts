import { useEffect, useState } from "react";
import "./App.css";
import getProducts from "./services/productApi";
import Card from "./component/card";

function App() {
  const [products, setProducts] = useState<null | object[]>(null);
  const [cart, setCart] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts(); // Assumi che getProducts sia una funzione asincrona
      setProducts(response);
    };

    fetchProducts();
  }, []);
  function onClickBtn(id: string) {
    setCart([...cart, id]);
  }

  if (!products) return <h1>404</h1>;

  return (
    <>
      <nav>
        {" "}
        <button style={{ height: "40px", width: "40px" }}>{cart.length}</button>
      </nav>
      {products.map((product: any) => (
        <Card product={product} onClick={onClickBtn} />
      ))}
    </>
  );
}

export default App;
