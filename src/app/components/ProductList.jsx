import Link from "next/link";

function ProductList({ product }) {
  return (
    <div className="max-w-[400px] md:max-w-[280px] lg:max-w-[300px] bg-base-100 shadow-xl rounded-lg py-5">
      <figure>
        <img
          className="w-full h-[200px] object-cover rounded-md"
          src={product.thumbnail}
          alt={product.title}
        />
      </figure>
      <div className="p-6">
        <h2 className="font-semibold text-xl mb-2">{product.title}</h2>
        <p className="mb-2 text-lg font-medium line-clamp-2">{product.description}</p>
        <p className="font-semibold mb-2">
          Price:
          <span className="font-medium">
            ${product.price.toLocaleString("en-Us")}
          </span>
        </p>
        <Link href={`/product/${product.id}`} className="btn btn-primary">Read more</Link>
        <div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
