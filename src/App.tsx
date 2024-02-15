import { useEffect, useState } from "react";
import "./App.css";
import getProducts from "./services/productApi";
function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(getProducts());
  }, []);
  if (!products) return <>404</>;
  return (
    <>
      <nav></nav>
    </>
  );
}

export default App;
