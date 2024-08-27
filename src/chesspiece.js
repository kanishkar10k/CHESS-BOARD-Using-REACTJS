import React from 'react';
import whitePawn from './pieces/white-pawn.png';
import whiteRook from './pieces/white-rook.png';
import whiteKnight from './pieces/white-knight.png';
import whiteBishop from './pieces/white-bishop.png';
import whiteQueen from './pieces/white-queen.png';
import whiteKing from './pieces/white-king.png';
import blackPawn from './pieces/black-pawn.png';
import blackRook from './pieces/black-rook.png';
import blackKnight from './pieces/black-knight.png';
import blackBishop from './pieces/black-bishop.png';
import blackQueen from './pieces/black-queen.png';
import blackKing from './pieces/black-king.png';

const pieceicon = {
  whitepawn: whitePawn,
  whiterook: whiteRook,
  whiteknight: whiteKnight,
  whitebishop: whiteBishop,
  whitequeen: whiteQueen,
  whiteking: whiteKing,
  blackpawn: blackPawn,
  blackrook: blackRook,
  blackknight: blackKnight,
  blackbishop: blackBishop,
  blackqueen: blackQueen,
  blackking: blackKing,
};

function ChessPiece({ type }) {
  const Piece = pieceicon[type];
  return <img src={Piece} alt={type} className="chess-piece" />;
}

export default ChessPiece;
