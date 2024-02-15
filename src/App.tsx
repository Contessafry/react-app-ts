import { useEffect, useState } from "react";
import "./App.css";
import getProducts from "./services/productApi";
import Card from "./component/card";
function App() {
  const [products, setProducts] = useState<null | object[]>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts(); // Assumi che getProducts sia una funzione asincrona
      setProducts(response);
    };

    fetchProducts();
  }, []);

  if (!products) return <>404</>;
  else
    return (
      <>
        <nav></nav>
        {products.map((product: any) => (
          <Card product={product} />
        ))}
      </>
    );
}

export default App;
