import ProductInfo from "./ProductInfo";

async function getData(id) {
  const req = await fetch(`https://dummyjson.com/products/` + id);
  const data = await req.json();
  return data;
}

async function SinglePage({ params }) {
  const prod = await getData(params.id);
  return <ProductInfo prod={prod} />;
}
export default SinglePage;
