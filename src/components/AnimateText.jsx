import React from "react";
import { Wave } from "react-animated-text";

export const AnimateText = ({ text }) => {
  return (
    <>
      <Wave text={text} effect="fadeOut" effectChange={4} />
    </>
  );
};
