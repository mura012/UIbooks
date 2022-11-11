import React from "react";

export const Main = () => {
  return (
    <div className="flex h-screen">
      <aside className="basis-1/5 bg-red-100">サイドバー</aside>
      <main className="basis-4/5 bg-green-100">メインコンテンツ</main>
    </div>
  );
};
