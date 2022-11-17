import React from "react";
import { Rating } from "src/UI/Rating";

export const Review = () => {
  return (
    <div className="m-auto">
      <label>
        <h3>総合評価</h3>
        <Rating />
      </label>
      <label>
        <h3>レビュータイトル</h3>
        <input type="text" />
      </label>
      <label>
        <h3>レビュー本文</h3>
        <textarea cols={50} rows={8}></textarea>
      </label>
      <button className="flex items-end">送信</button>
    </div>
  );
};
