"use client";
import { useState, useEffect } from "react";
import { FaRegMoon, FaShoppingCart, FaSun } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-slate-300 dark:bg-slate-800">
      <div className="max-container">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl dark:text-white">Next.js</h1>
          <ul className="flex items-center gap-5">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>

            <div className="indicator">
              <span className="indicator-item badge badge-primary">0</span>
              <FaShoppingCart className="text-2xl" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
