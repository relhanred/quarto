import React, { useState, useEffect } from "react";
import Piece from "./Piece";

function Deck(props) {
  const [pieces, setPieces] = useState([]);
  const [select, setSelect] = useState(null);

  useEffect(() => {
    if (props?.color) {
      initPieces();
    }
  }, []);

  useEffect(() => {
    setSelect(null);
  }, [props.unSelect]);

  const initPieces = () => {
    let piecesTab = [];
    for (let i = 0; i < 8; i++) {
      let type = "hole";
      let form = "carre";
      let size = "down";
      if (i < 4) type = "fill";
      if (i % 2 === 0) size = "up";
      if (i === 2 || i === 3 || i === 6 || i === 7) form = "rond";
      piecesTab.push({
        color: props.color,
        type: type,
        size: size,
        form: form,
        played: false,
        selected: false,
      });
    }
    setPieces(piecesTab);
  };

  const onClick = (index) => {
    if (
      props?.color === props?.turn &&
      select === null &&
      props.selected === null
    ) {
      const newPieces = [...pieces];
      newPieces[index] = {
        ...newPieces[index],
        selected: true,
      };
      setPieces(newPieces);
      setSelect(newPieces[index]);
      props.setSelected(newPieces[index]);
      props?.color === "blue" ? props.setTurn("red") : props.setTurn("blue");
    }
  };

  return (
    <div
      className={
        "flex h-1/5 " +
        (props.color === "red" ? "flex-col" : "flex-col-reverse")
      }
    >
      <div className="flex">
        {pieces.map((value, index) => {
          return (
            <div
              key={index}
              className={value.selected ? "hidden" : ""}
              onClick={() => onClick(index)}
            >
              <Piece
                color={value.color}
                type={value.type}
                size={value.size}
                form={value.form}
              />
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        {select !== null && (
          <Piece
            color={select.color}
            type={select.type}
            size={select.size}
            form={select.form}
          />
        )}
      </div>
    </div>
  );
}

export default Deck;
