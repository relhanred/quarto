// import React, { useState, useEffect } from "react";

// function Board(props) {
//   const [widthCanvas, setWidthCanvas] = useState(1200);
//   const [heightCanvas, setheightCanvas] = useState(600);
//   const [widthBoard, setWidthBoard] = useState(550);
//   const [coord, setCoord] = useState([]);
//   const [firstX, setFirstX] = useState(550);
//   const [firstY, setFirstY] = useState(5);

//   useEffect(() => {
//     drawBoard(firstX, firstY, widthBoard);
//     // drawPieces("Blue");
//   }, []);

//   // Permet de dessiner le plateau
//   const drawBoard = (x, y, width) => {
//     let canvas = document.getElementById("canvas");
//     let context = canvas.getContext("2d");
//     drawLinesLeftToRight(context, x, y, width);
//     drawLinesTopToBottom(context, x, y, width);
//     initCoord(x, y, width);
//     // drawPieces("Blue");
//   };

//   // Dessine les lignes du plateau qui vont de la droite vers la gauche
//   const drawLinesLeftToRight = (context, x, y, width) => {
//     for (let i = 0; i <= 4; i++) {
//       const startY = y + (i / 4) * width;
//       context.beginPath();
//       context.moveTo(x, startY);
//       context.lineTo(x + width, startY);
//       context.stroke();
//       context.closePath();
//     }
//   };

//   // Dessine les lignes du plateau qui vont du haut vers le bas
//   const drawLinesTopToBottom = (context, x, y, width) => {
//     for (let i = 0; i <= 4; i++) {
//       const startX = x + (i / 4) * width;
//       context.beginPath();
//       context.moveTo(startX, y);
//       context.lineTo(startX, y + width);
//       context.stroke();
//       context.closePath();
//     }
//   };

//   // Permet d'initialiser les 16 coordonnées du plateau
//   const initCoord = (x, y, width) => {
//     let cptX = 1;
//     for (let i = 1; i <= 4; i++) {
//       const startX = x + (cptX / 8) * width;
//       let cptY = 1;
//       for (let j = 1; j <= 4; j++) {
//         let rayon = width / 8;
//         const startY = y + width * (cptY / 8);
//         coord.push({
//           x: startX,
//           y: startY,
//           coordX: i,
//           coordY: j,
//           color: null,
//           type: null,
//           size: null,
//           form: null,
//           played: false,
//           topLeft: {
//             x: startX - rayon,
//             y: startY - rayon,
//           },
//           topRight: {
//             x: startX + rayon,
//             y: startY - rayon,
//           },
//           botLeft: {
//             x: startX - rayon,
//             y: startY + rayon,
//           },
//           botRight: {
//             x: startX + rayon,
//             y: startY + rayon,
//           },
//         });
//         cptY += 2;
//       }
//       cptX += 2;
//     }
//   };

//   const drawPieces = (color) => {
//     let x = 0;
//     let y = firstY - 100;
//     let canvas = document.getElementById("canvas");
//     let context = canvas.getContext("2d");
//     let cpt = 80;
//     context.drawImage(
//       document.getElementById("up" + color + "FillCarre"),
//       x + cpt * 0,
//       y
//     );
//     context.drawImage(
//       document.getElementById("down" + color + "FillCarre"),
//       x + cpt * 1,
//       y
//     );
//     context.drawImage(
//       document.getElementById("up" + color + "FillRond"),
//       x + cpt * 2,
//       y
//     );
//     context.drawImage(
//       document.getElementById("down" + color + "FillRond"),
//       x + cpt * 3,
//       y
//     );
//     context.drawImage(
//       document.getElementById("up" + color + "HoleCarre"),
//       x + cpt * 4,
//       y
//     );
//     context.drawImage(
//       document.getElementById("down" + color + "HoleCarre"),
//       x + cpt * 5,
//       y
//     );
//     context.drawImage(
//       document.getElementById("up" + color + "HoleRond"),
//       x + cpt * 6,
//       y
//     );
//     context.drawImage(
//       document.getElementById("down" + color + "HoleRond"),
//       x + cpt * 7,
//       y
//     );
//   };
//   const
//   const onMouseUp = (e) => {
//     console.log(e.clientX);
//     console.log(e.clientY);
//   };

//   // Fonction appelé quand on clique sur le plateau
//   const onClick = (e, width, x, y) => {
//     const size = width / 4;
//     let currX = e.clientX;
//     let currY = e.clientY;
//     let coordX = null;
//     let coordY = null;
//     console.log(e);
//     if (currX >= x && currX <= x + width && currY <= y + width && currY >= y) {
//       coordX = 1;
//       coordY = 1;
//       while (currX > x) {
//         currX -= size;
//         if (currX > x) {
//           coordX += 1;
//         }
//       }
//       while (currY > y) {
//         currY -= size;
//         if (currY > y) {
//           coordY += 1;
//         }
//       }
//     }
//     // let canvas = document.getElementById("canvas");
//     // let context = canvas.getContext("2d");
//     // context.drawImage(document.getElementById("source"), currX, currY);

//     console.log(coordX, coordY);
//   };

//   return (
//     <div className="">
//       <div className="h-[150px] flex items-center justify-center w-full">
//         <div className="flex">
//           <img
//             onClick={(e) => {
//               console.log(e);
//             }}
//             className=""
//             id="upBlueFillCarre"
//             src="upBlueFillCarre.svg"
//             alt="upBlueFillCarre"
//           ></img>
//           <img
//             onClick={(e) => {
//               console.log(e);
//             }}
//             className=""
//             id="downBlueFillCarre"
//             src="downBlueFillCarre.svg"
//             alt="downBlueFillCarre"
//           ></img>
//           <img
//             onClick={(e) => {
//               console.log(e);
//             }}
//             className=""
//             id="upBlueHoleCarre"
//             src="upBlueHoleCarre.svg"
//             alt="upBlueHoleCarre"
//           ></img>
//           <img
//             onClick={(e) => {
//               console.log(e);
//             }}
//             className=""
//             id="downBlueHoleCarre"
//             src="downBlueHoleCarre.svg"
//             alt="downBlueHoleCarre"
//           ></img>
//           <img
//             onClick={(e) => {
//               console.log(e);
//             }}
//             className=""
//             id="downBlueFillRond"
//             src="downBlueFillRond.svg"
//             alt="downBlueFillRond"
//           ></img>
//           <img
//             onClick={(e) => {
//               console.log(e);
//             }}
//             className=""
//             id="upBlueFillRond"
//             src="upBlueFillRond.svg"
//             alt="upBlueFillRond"
//           ></img>
//           <img
//             onClick={(e) => {
//               console.log(e);
//             }}
//             className=""
//             id="upBlueHoleRond"
//             src="upBlueHoleRond.svg"
//             alt="upBlueHoleRond"
//           ></img>
//           <img
//             onClick={(e) => {
//               console.log(e);
//             }}
//             className=""
//             id="downBlueHoleRond"
//             src="downBlueHoleRond.svg"
//             alt="downBlueHoleRond"
//           ></img>
//         </div>
//       </div>

//       <canvas
//         id="canvas"
//         width={widthCanvas}
//         height={heightCanvas}
//         className=""
//         // onMouseUp={onMouseUp}
//         onClick={(e) => onClick(e, widthBoard, firstX, firstY + 150)}
//         // onMouseMove={onMouseUp}
//       ></canvas>
//       <div className="flex items-center justify-center w-full">
//         <img
//           className=""
//           id="upRedFillCarre"
//           src="upRedFillCarre.svg"
//           alt="upRedFillCarre"
//         ></img>
//         <img
//           className=""
//           id="downRedFillCarre"
//           src="downRedFillCarre.svg"
//           alt="downRedFillCarre"
//         ></img>
//         <img
//           className=""
//           id="upRedHoleCarre"
//           src="upRedHoleCarre.svg"
//           alt="upRedHoleCarre"
//         ></img>
//         <img
//           className=""
//           id="downRedHoleCarre"
//           src="downRedHoleCarre.svg"
//           alt="downRedHoleCarre"
//         ></img>
//         <img
//           className=""
//           id="source"
//           src="downRedFilleRond.svg"
//           alt="downRedFilleRond"
//         ></img>
//         <img
//           className=""
//           id="upRedFillRond"
//           src="upRedFillRond.svg"
//           alt="upRedFillRond"
//         ></img>
//         <img
//           className=""
//           id="upRedHoleRond"
//           src="upRedHoleRond.svg"
//           alt="upRedHoleRond"
//         ></img>
//         <img
//           className=""
//           id="downRedHoleRond"
//           src="downRedHoleRond.svg"
//           alt="downRedHoleRond"
//         ></img>
//       </div>
//     </div>
//   );
// }

// export default Board;
