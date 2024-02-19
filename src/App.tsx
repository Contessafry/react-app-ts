import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import getProducts from "./services/productApi";
import Card from "./component/card";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./component/UIComponents";
import { calculateTotalPrice, addToCart } from "./cartUtils";
function App() {
  const [products, setProducts] = useState<null | object[]>(null);
  const [cart, setCart] = useState<string[]>([]);
  const [isCart, setIsCart] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts(); // Assumi che getProducts sia una funzione asincrona
      setProducts(response);
    };

    fetchProducts();
  }, []);
  function onClickBtn(id: string) {
    setCart(addToCart(id, cart));
  }

  useEffect(() => {
    const productsArray = products || [];
    if (productsArray.length > 0) {
      setTotalPrice(calculateTotalPrice(cart, productsArray, isCart));
    }
  }, [isCart, cart, products]);

  if (!products) return <h1>Loading..</h1>;

  //Cambiare la visualizzazione tra home e carrello
  const toggleView = () => {
    setIsHome(!isHome);
    setIsCart(!isCart);
  };

  return (
    <ThemeProvider theme={theme}>
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          style={{
            height: "60px",
            width: "auto",
            minWidth: "60px",
          }}
          variant="outlined"
          startIcon={<AddShoppingCartIcon />}
          onClick={toggleView}
        >
          <span style={{ marginRight: "8px" }}>
            {isHome ? "CARRELLO" : "HOME"}
            {isCart && <span>(${totalPrice.toFixed(2)})</span>}
          </span>

          {cart.length}
        </Button>
      </nav>

      {isCart
        ? products
            .filter((product: any) => cart.includes(product.id))
            .map((product: any) => (
              <Card product={product} onClick={onClickBtn} />
            ))
        : products.map((product: any) => (
            <Card product={product} onClick={onClickBtn} />
          ))}
    </ThemeProvider>
  );
}

export default App;
