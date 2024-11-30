import React from "react";
import { motion } from "framer-motion";
import background from "../assets/bkg.jpg";
import { AnimateText } from "../components/AnimateText";

export const Home = () => {
  //
  const handleExploreMenu = () => {
    document.getElementById("meals-container").scrollIntoView({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" border w-11/12 mx-auto mt-14 shadow-md rounded-lg">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <motion.div
          className="flex flex-col px-10 w-full md:w-2/5 justify-center items-start text-center md:text-left"
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
          exit={{ opacity: 0 }}
        >
          {/* left column */}
          <p className="uppercase tracking-loose w-full">
            <AnimateText text={"Martial World"} />
          </p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Best place to read!
          </h1>
          <p className="leading-normal mt-4 text-2xl mb-6">
            Expand your imagination with wuxia world!
          </p>
          <button
            onClick={handleExploreMenu}
            className="mx-auto text-gray-600 lg:mx-0 border bg-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Our projects
          </button>
        </motion.div>
        <motion.div
          className="w-full md:w-3/5 py-6 text-center"
          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
          exit={{ opacity: 0 }}
        >
          {/* right column */}
          <img className="w-full md:w-4/5 mx-auto z-50" src={background} />
        </motion.div>
      </div>
    </div>
  );
};
