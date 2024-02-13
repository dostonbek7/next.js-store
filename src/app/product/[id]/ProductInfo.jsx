"use client";
import { useDispatch } from "react-redux";
import { addToData } from "@/app/redux/basketSlice";

function ProductInfo({ prod }) {
  const dispatch = useDispatch();
  return (
    <div className="pt-20">
      <div className="max-container">
        <div className="carousel carousel-center p-4 space-x-4 bg-slate-400 rounded-box w-full mb-6">
          {prod.images.map((img) => {
            return (
              <div key={img} className="carousel-item h-full">
                <img src={img} className="rounded-box h-60 object-cover" />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-semibold">{prod.title}</h1>
          <h2 className="text-xl font-medium">{prod.description}</h2>
          <h3 className="text-2xl font-medium flex items-center">
            Brand:
            <button className="btn btn-success ml-3 text-white">
              {prod.brand}
            </button>
          </h3>
          <span className="font-medium text-xl ">Price: ${prod.price}</span>
          <div>
            <button
              onClick={() => dispatch(addToData({ ...prod, amount: 1 }))}
              className="btn btn-success"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
