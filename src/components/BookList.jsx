import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import { Book } from "../pages/Book";

export const BookList = () => {
  return (
    <Splide
      className=" space-x-10 my-10 px-16"
      options={{
        perPage: 5,
        drag: "free",
        type: "loop",
        rewind: false,
        arrows: false,
        pagination: false,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: 0.5,
        },
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide>
        <Book />
      </SplideSlide>
      <SplideSlide>
        <Book />
      </SplideSlide>
      <SplideSlide>
        <Book />
      </SplideSlide>
    </Splide>
  );
};
