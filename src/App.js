import React from 'react';
import ChessPiece from './chesspiece';
import './App.css';
function App() {
  const renderBoard = () => {
    const rows = [];
    for (let row = 1; row <= 8; row++) {
      const cells = [];
      for (let col = 1; col <= 8; col++) {
        const cellId = `${String.fromCharCode(96 + col)}${row}`;
        let pieceType = null;
        if (row === 2) pieceType = 'whitepawn';
        if (row === 7) pieceType = 'blackpawn';
        if (row === 8) {
          switch (col) {
            case 1:
            case 8:
              pieceType = 'blackrook';
              break;
            case 2:
            case 7:
              pieceType = 'blackknight';
              break;
            case 3:
            case 6:
              pieceType = 'blackbishop';
              break;
            case 4:
              pieceType = 'blackqueen';
              break;
            case 5:
              pieceType = 'blackking';
              break;
            default:
              break;
          }
        }
        if (row === 1) {
          switch (col) {
            case 1:
            case 8:
              pieceType = 'whiterook';
              break;
            case 2:
            case 7:
              pieceType = 'whiteknight';
              break;
            case 3:
            case 6:
              pieceType = 'whitebishop';
              break;
            case 4:
              pieceType = 'whitequeen';
              break;
            case 5:
              pieceType = 'whiteking';
              break;
            default:
              break;
          }
        }
        cells.push(
          <td key={cellId} id={cellId} className="chess-cell">
            {pieceType && <ChessPiece type={pieceType} />}
          </td>
        );
      }
      rows.push(<tr key={row} className={`row${row}`}>{cells}</tr>);
    }
    return rows;
  };

  return (
    <div>
      <header className="header">
        <h1><b>CHESS BOARD</b></h1>
      </header>
      <div className='chessboard'>
        <table>
          <tbody>{renderBoard()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
