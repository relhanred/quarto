import React, { useState, useEffect } from "react";
import Piece from "../components/Piece";
import Deck from "../components/Deck";
import Message from "../components/Message";
import Return from "../components/Return";
import { initLevelTab, maxPerLevel } from "../fixtures/data";

function Board(props) {
  const [coord, setCoord] = useState([]);
  const [selected, setSelected] = useState(null);
  const [unSelect, unSetUnSelect] = useState(false);
  const [turn, setTurn] = useState("blue");
  const [played, setPlayed] = useState([]);
  const [indexTab, setIndexTab] = useState([]);
  const [solvingTab, setSolvingTab] = useState([]);
  const [winner, setWinner] = useState(null);
  const [level, setLevel] = useState(2);

  useEffect(() => {
    initBoard();
    initSolvingTab();
  }, []);

  useEffect(() => {}, [coord]);

  const onClick = (index) => {
    if (!coord[index].played && selected != null) {
      setValue(
        index,
        selected.color,
        selected.type,
        selected.size,
        selected.form
      );
      setSelected(null);
      unSetUnSelect(!unSelect);
    }
  };

  const initBoard = () => {
    let coordTab = [];
    for (let i = 1; i <= 4; i++) {
      for (let j = 1; j <= 4; j++) {
        coordTab.push({
          coordX: j,
          coordY: i,
          color: null,
          type: null,
          size: null,
          form: null,
          played: false,
        });
      }
    }
    setCoord(coordTab);
  };

  const addPlayed = (element) => {
    const newPlayed = [...played];
    newPlayed.push(element);
    setPlayed(newPlayed);
  };

  const setValue = (index, color, type, size, form) => {
    if (!coord[index].played) {
      const coordUpdate = [...coord];
      const newCoord = {
        coordX: coordUpdate[index].coordX,
        coordY: coordUpdate[index].coordY,
        color: color,
        type: type,
        size: size,
        form: form,
        played: true,
      };
      coordUpdate[index] = newCoord;
      addPlayed(newCoord);
      setCoord(coordUpdate);
      updateSolvingTab(index, newCoord);
    }
  };

  const initSolvingTab = () => {
    let newSolvingTab = [];
    for (let i = 0; i < maxPerLevel[level]; i++) {
      newSolvingTab[i] = [];
    }
    setIndexTab(initLevelTab(level));
    setSolvingTab(newSolvingTab);
  };

  const updateSolvingTab = (index, value) => {
    let newSolvingTab = solvingTab.slice();
    for (let i = 0; i < indexTab[index].length; i++) {
      const j = indexTab[index][i];
      newSolvingTab[j].push(value);
      if (newSolvingTab[j].length === 4) {
        if (hasWon(newSolvingTab[j])) {
          setWinner(turn);
          console.log(newSolvingTab[j]);
        }
      }
    }
    setSolvingTab(newSolvingTab);
  };

  const hasWon = (tab) => {
    let i = 0;
    let j = 0;
    let won = false;
    while (i < 4 && !won) {
      j = 0;
      let attr = getAttribute(tab[j], i);
      while (j < 4) {
        j++;
        if (attr !== getAttribute(tab[j], i)) {
          j = 4;
        } else {
          attr = getAttribute(tab[j], i);
          if (j === 3) {
            won = true;
          }
        }
      }
      i++;
    }
    return won;
  };

  const getAttribute = (obj, index) => {
    let attr = "";
    switch (index) {
      case 0:
        attr = obj?.color;
        break;
      case 1:
        attr = obj?.type;
        break;
      case 2:
        attr = obj?.size;
        break;
      case 3:
        attr = obj?.form;
        break;
      default:
        break;
    }
    return attr;
  };

  const winnerbackgroundColor = (x, y) => {
    let bool = false;
    if (turn != null) {
      solvingTab.forEach((e) => {
        if (e.x === x && e.y === y) {
          bool = true;
        }
      });
    }
    return bool;
  };

  return (
    <div className="flex flex-col h-full w-full justify-between items-center border">
      <Return />
      <Deck
        color="red"
        setSelected={setSelected}
        unSelect={unSelect}
        selected={selected}
        turn={turn}
        setTurn={setTurn}
      />
      <Message color="red" turn={turn} selected={selected} winner={winner} />
      <div
        className={
          "grid h-[400px] w-[400px] items-center justify-center grid-cols-4 grid-rows-4"
        }
      >
        {coord.map((value, i) => {
          return (
            <div
              id={i}
              key={i}
              className={
                "border h-full w-full items-center justify-center flex " +
                (winnerbackgroundColor(value.coordX, value.coordY)
                  ? "bg-slate-200"
                  : "")
              }
              onClick={() => onClick(i)}
            >
              {value.played && (
                <Piece
                  color={value.color}
                  type={value.type}
                  size={value.size}
                  form={value.form}
                />
              )}
            </div>
          );
        })}
      </div>
      <Message color="blue" turn={turn} selected={selected} winner={winner} />
      <Deck
        color="blue"
        setSelected={setSelected}
        unSelect={unSelect}
        selected={selected}
        turn={turn}
        setTurn={setTurn}
      />
    </div>
  );
}

export default Board;
