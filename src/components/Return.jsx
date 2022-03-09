import React from "react";
import { useNavigate } from "react-router";

function Return() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-left w-full">
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="border cursor-pointer rounded-lg w-fit px-2 py-1 mx-2 mt-1 text-md"
      >
        retour
      </div>
    </div>
  );
}

export default Return;
