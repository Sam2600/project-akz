import React from "react";
import { Book } from "../pages/Book";

export const BookList = () => {
  return (
    <div className="flex flex-row flex-1 space-x-5 mt-10 px-16">
      <Book />
      <Book />
      <Book />
    </div>
  );
};
