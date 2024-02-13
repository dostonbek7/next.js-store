import Link from "next/link";
import React from "react";
import Image from "next/image";
import error from '../../public/404.jpg'

function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col">
    <Image
      src={error}
      alt="Page not found"
      className="rounded-md object-cover mb-5"
      width={700}
      height={600}
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
      <Link className="btn btn-primary" href="/">
        Home
      </Link>
    </div>
  );
}

export default NotFound;
