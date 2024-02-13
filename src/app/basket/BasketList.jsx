"use client";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, deleteToData } from "../redux/basketSlice";

function BasketList() {
  const { allProduct, total } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  if (allProduct.length == 0) {
    return <h1>You don't have any product</h1>;
  }
  return (
    <div>
      <div className="flex flex-col gap-5">
        {allProduct.map((item) => {
          return (
            <li key={item.id} className="flex items-center gap-10">
              <img
                src={item.thumbnail}
                alt=""
                className="object-cover w-[100px] rounded-lg"
              />
              <h1>{item.title}</h1>
              <h2>{item.amount}</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(increment(item.id))}
                  className="px-3 py-2 bg-[#703BF7] text-white rounded-md"
                >
                  +
                </button>
                <button className="px-3 py-2 bg-[#E4E4E7] rounded-md">
                  {total}
                </button>
                <button
                  onClick={() => dispatch(decrement(item.id))}
                  className="px-3 py-2 bg-[#703BF7] text-white rounded-md"
                >
                  -
                </button>
              </div>
              <button
                onClick={() => dispatch(deleteToData(item.id))}
                className="btn btn-error"
              >
                <MdDeleteOutline className="text-xl" />
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default BasketList;
