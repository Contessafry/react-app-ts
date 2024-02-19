import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import getProducts from "./services/productApi";
import Card from "./component/card";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

function App() {
  const [products, setProducts] = useState<null | object[]>(null);
  const [cart, setCart] = useState<string[]>([]);
  const [isCart, setIsCart] = useState(false);

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
    <ThemeProvider theme={theme}>
      <nav>
        <Button
          variant="outlined"
          startIcon={<AddShoppingCartIcon />}
          onClick={() => setIsCart(!isCart)}
          style={{ height: "60px", width: "auto", minWidth: "60px" }}
        >
          <span style={{ marginRight: "8px" }}>CARRELLO</span>

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
