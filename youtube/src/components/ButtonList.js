import React from "react";
import { BUTTON_LIST } from "../utils/constants";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      {BUTTON_LIST.map((ele) => (
        <Button key={ele} name={ele} />
      ))}
    </div>
  );
};

export default ButtonList;
