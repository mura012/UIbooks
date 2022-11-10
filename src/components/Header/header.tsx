import React from "react";

export const Header = () => {
  return (
    <div className="flex h-12 items-center justify-around bg-pink-500 text-3xl">
      <div>header</div>
      <nav>
        <ul className="flex space-x-2">
          <li>blog</li>
          <li>book</li>
          <li>portfolio</li>
          <li>test</li>
        </ul>
      </nav>
    </div>
  );
};
