async function getProducts() {
  const response = await fetch("https://mockend.up.railway.app/api/products");
  const data = await response.json();
  console.log(data);
  return data;
}
export default getProducts;
