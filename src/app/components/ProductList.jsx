"use client";

function ProductList({ product }) {
  console.log(product);
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-full h-[200px] object-cover"
          src={product.thumbnail}
          alt={product.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <p className="font-semibold">Price: <span className="font-medium">${product.price.toLocaleString('en-Us')}</span></p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
