import React from "react";
import { useNavigate } from "react-router";

function Menu(props) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-full ">
      <div className="flex flex-col border rounded-xl  p-6 w-1/3 h-1/3">
        <h1 className="flex self-center uppercase font-bold text-3xl pb-4">
          Quarto
        </h1>
        <div className="flex flex-col items-center h-full text-xl justify-around italic">
          <h2
            className="border rounded-xl text-gray-700 p-2 bg-slate-100 cursor-pointer w-1/3 text-center"
            onClick={() => {
              navigate("/partie");
            }}
          >
            Nouvelle partie
          </h2>
          <h2
            className="border rounded-xl text-gray-700 p-2 bg-slate-100 cursor-pointer w-1/3 text-center"
            onClick={() => {
              navigate("/regles");
            }}
          >
            Règles
          </h2>
          <h2
            className="border rounded-xl text-gray-700 p-2 bg-slate-100 cursor-pointer w-1/3 text-center"
            onClick={() => {
              navigate("/histoire");
            }}
          >
            Histoire du jeu
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Menu;
