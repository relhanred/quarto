import React, { useState, useEffect } from "react";

function Piece(props) {
  const [id, setId] = useState([]);
  const [first, setfirst] = useState("");

  const concatProps = () => {
    setId(
      props?.size +
        capitalizeFirstLetter(props?.color) +
        capitalizeFirstLetter(props?.type) +
        capitalizeFirstLetter(props?.form)
    );
  };

  useEffect(() => {
    concatProps();
  }, [props]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {}, []);

  return (
    <div>
      <img id={id} src={id + ".svg"} alt={id} />
    </div>
  );
}

export default Piece;
