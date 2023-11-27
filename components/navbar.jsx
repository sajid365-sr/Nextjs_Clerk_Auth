import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLink = [
    {
      id: 1,
      route: "/",
      title: "Home",
    },
    {
      id: 2,
      route: "/feedback",
      title: "Feedback",
    },
    {
      id: 3,
      route: "/gallery",
      title: "Gallery",
    },
    {
      id: 4,
      route: "/blog",
      title: "Blog",
    },
  ];

  return (
    <div className="py-5">
      <ul className="w-1/2 mx-auto flex justify-between items-center">
        <div className="flex gap-8 items-center">
          {navLink.map(({ id, route, title }) => (
            <Link
              key={id}
              className="text-xl font-medium hover:underline hover:text-teal-400"
              href={route}
            >
              {title}
            </Link>
          ))}
        </div>
        <UserButton afterSignOutUrl="" />
      </ul>
    </div>
  );
};

export default Navbar;
