import { IPrimaryBtn } from "@/app/utilities/defenitions";
import React from "react";

const PrimaryBtn = ({
  type = "unset",
  disabled = false,
  fullWidth = false,
  loading = false,
  icon = false,
  state = (e) => {},
}: IPrimaryBtn) => {
  const statusHandler = () => {
    let status;
    if (disabled) {
    } else {
      if (type === "unset") {
        status = "text-white-500 bg-primary-500";
      } else if (type === "invert") {
        status = "text-primary-800 bg-primary-100";
      } else if (type === "frameless") {
        status = "text-primary-500 border-primary-500 border-solid";
      } else {
        status = "text-primary-500";
      }
    }

    return status;
  };

  let statusStyle = statusHandler();

  return <button disabled={disabled} className={`py-1 px-4 `}></button>;
};

export default PrimaryBtn;
