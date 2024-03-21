import React from "react";
import { LeftHome } from "../components/home/LeftHome";
import { RightHome } from "../components/home/RightHome";
export const Home = () => {
  return (
    <div className="d-flex justify-space-between">
      <span>
        <LeftHome />
      </span>
      <span>
        <RightHome />
      </span>
    </div>
  );
};
