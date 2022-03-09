import React, { useEffect, useState } from "react";

function Message(props) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (props?.winner === null) {
      if (props?.color === props?.turn) {
        switch (props.selected) {
          case null:
            setMessage("Selectionnez une pièce à donner à votre adversaire");
            break;
          default:
            setMessage("Placez votre pièce");
            break;
        }
      } else {
        setMessage("");
      }
    } else {
      if (props.winner === props.color) setMessage("Vous avez gagné");
      else setMessage("Vous avez perdu");
    }
  });

  return <div className={"flex h-4"}>{message}</div>;
}

export default Message;
