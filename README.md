# React Tic-Tac-Toe Kata (TDD & SOLID)

A professional-grade implementation of the classic Tic-Tac-Toe game built with **React**, emphasizing **Test-Driven Development (TDD)** and **SOLID architectural principles**.

## 🎯 Overview

Tic-tac-toe (Xs and Os) is a 2-player game on a 3x3 grid. 

### Rules

The rules are described below :

* X always goes first.
* Players cannot play on a played position.
* Players alternate placing X’s and O’s on the board until either:
    *  One player has three in a row, horizontally, vertically or diagonally
    * All nine squares are filled.
* If a player is able to draw three X’s or three O’s in a row, that player wins.
* If all nine squares are filled and neither player has three in a row, the game is a draw.

## ✨ Features

* Playable 3x3 grid with strict rule enforcement (X always goes first, alternate turns, no overwriting).
* Dynamic status indicator (Next Player, Winner, or Draw).
* **Winning Line Highlight:** Automatically highlights the specific row, column, or diagonal that won the game.
* Reset button to clear the board and start a new game seamlessly.
* 100% test coverage using Jest and React Testing Library.

## 🧠 Project Structure (SOLID Architecture)

The application is broken down into distinct, single-responsibility modules:

```text
src/
 ├── components/
 │    ├── Board.js        # Maps the state array to a grid of Squares
 │    ├── Board.test.js   # Unit tests for the Board UI
 │    ├── Square.js       # A purely presentational, reusable button component
 │    └── Square.test.js  # Unit tests for the Square UI
 ├── hooks/
 │    └── useGame.js      # Custom hook managing React state and actions
 ├── utils/
 │    ├── gameLogic.js    # Pure JavaScript math for calculating wins
 │    └── gameLogic.test.js # Lightning-fast unit tests for game rules
 ├── App.js               # The Main Orchestrator connecting UI and State
 ├── App.test.js          # Integration tests acting as a human user
 └── App.css              # Grid layout and visual styling

```

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (LTS version recommended)
* A modern web browser

### Installation & Setup

1. **Clone the repository**:
```bash
git clone <your-repo-url>
cd tic-tac-toe-kata

```


2. **Install dependencies**:
```bash
npm install

```


3. **Start the development server**:
```bash
npm start

```


Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view it in your browser.

## 🧪 Testing Strategy

This project was built strictly using the **Red-Green-Refactor** TDD cycle.

To run the automated tests, use:

```bash
npm test

```

The test suite includes:

* **Unit Tests:** Lightning-fast tests for pure logic (`gameLogic.js`) and isolated UI components (`Square.js`, `Board.js`).
* **Integration Tests:** Verifies that the pieces wire together correctly by simulating actual user clicks from the top-level `<App />` component.

## 💾 Technical Details

* **File Encoding:** UTF-8 (Required for proper rendering of emojis and special characters).
* **Package Manager:** npm (Node Package Manager).
* **Testing Framework:** Jest & React Testing Library.
* **Environment:** Designed for cross-platform compatibility (Windows, macOS, Linux).
---