import React from "react";
import Square from "./Square";
import Winner from "./Winner";

class Board extends React.Component {
  render(props) {
    return (
      <div className="board">
        {this.props.squares.map((elt, index) => (
          <Square
            key={index}
            value={elt}
            class={
              Winner(this.props.squares) &&
              Winner(this.props.squares).includes(index)
                ? "square blue"
                : elt
                ? "square orange"
                : this.props.classSquare
            }
            onClick={() => this.props.handleClick(index)}
          />
        ))}
      </div>
    );
  }
}

export default Board;
