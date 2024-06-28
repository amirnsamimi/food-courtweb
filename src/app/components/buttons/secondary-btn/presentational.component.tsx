import { IButtons } from "@/app/utilities/defenitions";
import React from "react";

const SecondaryBtn = ({
  type = "unset",
  disabled = false,
  fullWidth = false,
  loading = false,
  icon = false,
  state = (e) => {},
  size = "medium",
}: IButtons) => {
  const statusHandler = () => {
    let status;
    if (disabled) {
      status = "bg-white-600 text-white-700";
    } else {
      if (type === "unset") {
        status =
          "text-white-500 bg-black-200 border-black-200 border-solid border";
      } else if (type === "invert") {
        status =
          "text-black-500 bg-black-50 border-black-50 border-solid border";
      } else if (type === "frameless") {
        status = "text-black-500 border-black-500 border-solid border";
      } else {
        status = "text-black-500 border-transparent border-solid border";
      }
    }

    if (size === "large") {
      status += " h-10 leading-8 text-4";
    } else if (size === "medium") {
      status += " h-9 leading-8 text-3";
    } else {
      status += " h-8 leading-8 text-2";
    }

    return status;
  };

  let statusStyle = statusHandler();

  return (
    <button
      disabled={disabled}
      className={`flex justify-center items-center ${
        fullWidth ? "w-full" : "min-w-max"
      } py-1 px-4 rounded-4 ${statusStyle} hover:shadow-bshadow-4 transition-shadow`}
    >
      افزودن به سبد
    </button>
  );
};

export default SecondaryBtn;
