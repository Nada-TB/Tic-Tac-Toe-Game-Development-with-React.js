# Tic Tac Toe Game Development with React.js

Developed a dynamic Tic Tac Toe game using React.js, where players interact with a grid of squares, and 'X' or 'O' appears upon user clicks. Key features include win highlighting combinations, a game history tracker, and restart functionality.

## Table of Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Challenges and Learnings](#challenges-and-learnings)
- [Future Improvements](#future-improvements)
- [Contact](#contact)
- [License](#license)

## Introduction

Developed a dynamic Tic Tac Toe game using React.js, offering an engaging gaming experience with interactive gameplay, intuitive user interface, and strategic game history tracking. Implemented features such as dynamic color highlighting for winning combinations, allowing players to navigate through game versions seamlessly. Demonstrated proficiency in React.js concepts and frontend development, delivering a responsive and visually appealing gaming application.


## Demo


### Requirements
- Node.js (v12.0.0 or higher)
- npm (Node Package Manager)
- React App environment

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/Nada-TB/react-game.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd your-repo-name
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

   This command will install all necessary dependencies defined in `package.json`.

4. **Run the project**

   ```bash
   npm start
   ```

   This command starts the development server. Open [http://localhost:3000](http://localhost:3000) to view the Tic Tac Toe game in the browser.


## Usage
```bash
# Run the project
npm start
```
To play the Tic Tac Toe game:

Click on Squares: Click on any square in the grid to place either 'X' or 'O'. The symbol ('X' or 'O') that appears is randomly determined each time you click.

Winning Combination: The game highlights the winning combination when a player forms a row, column, or diagonal with three consecutive 'X's or 'O's.

Game History Tracker: Use the history tracker to revisit previous moves and explore different game states. Click on any step to jump directly to that point in the game.

Restart Game: To start a new game, click on the "Restart" button. This clears the board and allows players to begin a new match.

Enjoy playing Tic Tac Toe with React.js!

## Features

1. **Interactive Gameplay**: Developed a fully functional Tic Tac Toe game where players interact with a grid of squares, with letters 'X' or 'O' appearing randomly upon user clicks.

2. **Game History Tracker**: Implemented a dynamic game history tracker allowing players to navigate backward through each move, facilitating a seamless gaming experience and strategic analysis.

3. **Win Highlighting**: Implemented logic to highlight winning combinations by changing the color of the corresponding squares to yellow, enhancing visual feedback and celebrating player victories.

4. **Restart Functionality**: Integrated a restart button allowing players to initiate a new game at any point, providing convenience and flexibility in gameplay.

## Technologies Used

- React: Used for building the user interface and managing component hierarchy.
- State Management: Utilized React's state management to handle game state and updates.
- Event Handling: Implemented event handling in React for user interactions such as clicking on squares.
- CSS: Styled components using CSS to design and layout the Tic Tac Toe game.
- HTML: Used HTML for structuring the game's user interface.
- Responsive Design: Ensured the game interface is responsive and adapts well to different screen sizes.

## Project Structure

```plaintext

public/
├── index.html          # Main HTML file
└── favicon.ico         # Favicon icon

src/
├── components/         # React components
│   ├── Square.js       # Component for individual squares in the game board
│   ├── Winner.js       # Component to display the winning message
│   ├── Board.js        # Component to manage the game board and its state
│   └── GameHistory.js  # Component to track and display game history
├── app.css             # CSS styles for the application
├── index.js            # Entry point for React application
└── app.js              # Main App component

.gitignore              # Git ignore file
README.md               # Project documentation

```

## Challenges and Learnings:

- Game Logic Implementation: Successfully designed and implemented the game logic for the Tic Tac Toe game with React.js, focusing on creating an intuitive user interface with two main components - the player territory grid and the dynamic history tracker. This enhanced user experience and engagement by allowing players to interact seamlessly with the game.

- Visual Feedback: Implemented logic to dynamically change the color of squares based on winning combinations. This feature provided clear visual feedback to the player, enhancing game interaction and overall user satisfaction.

Through these implementations, I gained a deeper understanding of React concepts such as component hierarchy, state management, and event handling. This project helped me strengthen my skills in frontend development and React.js.

## Future Improvements

- Player vs. Computer Mode: Enhance the game by implementing an AI opponent, allowing players to play against the computer with different difficulty levels.

- Real-Time Multiplayer: Implement real-time multiplayer functionality using technologies like WebSockets or Firebase, enabling players to compete against each other online.

These enhancements will further enrich the gameplay experience of the Tic Tac Toe game, providing more options for players to enjoy and interact with the game.

## Contact

- GitHub: [Nada-TB](https://github.com/Nada-TB)



## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details

---

