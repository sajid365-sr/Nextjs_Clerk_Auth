import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="py-5">
      <ul className="w-1/2 mx-auto flex justify-between items-center">
        <div>
          <Link
            title="This is a public route"
            className="text-xl mr-10 font-medium hover:underline hover:text-teal-400"
            href="/"
          >
            Home
          </Link>
          <Link
            title="This is a private route"
            className="text-xl font-medium hover:underline hover:text-teal-400"
            href="/feedback"
          >
            Feedback
          </Link>
        </div>
        <UserButton afterSignOutUrl="" />
      </ul>
    </div>
  );
};

export default Navbar;
