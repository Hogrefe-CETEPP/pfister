import Link from "next/link";
import React from "react";


function Logo() {
  return (
    <div className="flex justify-between items-center pt-2 absolute right-2 md:right-6 top-2">
      <div className="flex items-center gap-8">
        <Link href={"/"}>
          <img
            src="/logo.png"
            alt="logo"
            className="h-10 w-40 object-contain"
          />
        </Link>
       </div>
    </div>
  );
}

export default Logo;