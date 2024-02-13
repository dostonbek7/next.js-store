"use client";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import { useSelector } from "react-redux";

function Navbar() {
  const { total } = useSelector((store) => store.product);
  return (
    <div className="bg-slate-300 dark:bg-slate-800">
      <div className="max-container">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl dark:text-white cursor-pointer">
            Next.js
          </Link>
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-5">
              <div className="indicator">
                <span className="indicator-item badge badge-primary">
                  {total}
                </span>
                <Link href="/basket">
                  <IoCartOutline className="text-3xl cursor-pointer" />
                </Link>
              </div>
              {/* <div className="ml-2">
               <button>Dark</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
