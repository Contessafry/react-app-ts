function Card({ product }: any) {
  const { title, description, image } = product;
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button></button>
    </div>
  );
}
//function addTocart(products: object[]){
//const productToAdd= products.find(product => product.id

export default Card;
