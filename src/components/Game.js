import React from 'react';
import Board from './Board.js';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        last_squares: Array(9).fill(null),
        current_squares: Array(9).fill(null),
        xIsNext: true
        };
    }

    handleClick(i) {
        const current_squares_copy = this.state.current_squares.slice();
        this.setState({last_squares: this.state.current_squares.slice()}); // Before modification
        if (calculateWinner(current_squares_copy) || current_squares_copy[i]) {
        return;
        }
        current_squares_copy[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
        current_squares: current_squares_copy, // After modification
        xIsNext: !this.state.xIsNext
        });
    }

    undo() {
        this.setState({
        current_squares: this.state.last_squares,
        xIsNext: !this.state.xIsNext,
        });
    }

    restart() {
        this.setState({
        last_squares: Array(9).fill(null),
        current_squares: Array(9).fill(null),
        xIsNext: true,
        });
    }

    render() {
        const winner = calculateWinner(this.state.current_squares);

        let status;
        if (winner) {
        status = "Winner: " + winner;
        } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }

        return (
            <div className="game">

                <h1>Tic - Tac - Toe</h1>

                <div className="main">
                    <div className="item status">{status}</div>

                    <Board
                        squares={this.state.current_squares}
                        onClick={i => this.handleClick(i)}
                    />

                    <div className="buttons">
                        <button className="item" onClick={() => this.undo()} disabled={this.state.current_squares.toString() === this.state.last_squares.toString()}>Undo</button>
                        <button className="item" onClick={() => this.restart()} disabled={this.state.current_squares.toString() === Array(9).fill(null).toString()}>Restart</button>
                    </div>
                </div>

            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    if (!squares.includes(null)) return "None";
    return null;
  }