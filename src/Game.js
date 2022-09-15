import React from "react";
import Winner from "./Winner";
import Board from "./Board";
import History from "./History";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      classSquare: "square",
      whoPlays: false,
      result: "",
      history: [Array(9).fill(null)],
      position: 0,
    };
  }

  handleClick(index) {
    let squares = this.state.squares.slice();
    let history = this.state.history.slice(0, this.state.position + 1);
    if (squares[index] || Winner(squares)) {
      return;
    }
    squares[index] = this.state.whoPlays ? "X" : "O";
    let newHistory = history.concat([squares]);

    this.setState({
      squares: squares,
      whoPlays: !this.state.whoPlays,
      result: this.state.whoPlays ? "O" : "X",
      history: newHistory,
      position: this.state.position + 1,
    });
  }

  getHistory(index) {
    if (index === 0) {
      this.setState({
        history: this.state.history.slice(0, 1),
        position: 0,
        result: "",
      });
    }
    this.setState({
      position: index,
      squares: this.state.history[index],
    });
  }

  render() {
    let winner = Winner(this.state.squares);
    let result = !winner
      ? this.state.position < 9
        ? "The next player is : " + this.state.result
        : "Score draw, start over"
      : " The winner is : " + this.state.result;
    return (
      <>
        <div className={"result"}>{result}</div>
        <Board
          classSquare={this.state.classSquare}
          squares={this.state.squares}
          handleClick={(index) => this.handleClick(index)}
        />
        <History
          history={this.state.history}
          onClick={(index) => this.getHistory(index)}
        />
      </>
    );
  }
}

export default Game;
