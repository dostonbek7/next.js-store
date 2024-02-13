import ProductList from "./components/ProductList";

async function getData() {
  const req = await fetch("https://dummyjson.com/products");
  const data = await req.json();

  return data;
}

export default async function Home() {
  const { products } = await getData();
  return (
    <div className="max-container">
      <h1 className="mb-7 text-2xl font-bold text-center">Products List</h1>
      {products && (
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10">
          {products.map((product) => {
            return <ProductList key={product.id} product={product} />;
          })}
        </ul>
      )}
    </div>
  );
}
