# Tic-Tac-Toe Game

## Description

This project is a Tic-Tac-Toe game developed as part of the Odin Project's web development curriculum. The goal of the project is to create a functional and interactive game that allows two players to play Tic-Tac-Toe against each other.

## Project Structure

The project is organized into different modules and factories to encapsulate functionality and minimize global code. Here's an overview of the project structure:

### Module: Gameboard

The gameboard module is responsible for managing the game board's state and rendering it on the webpage.

- **Functionality**:
  - The gameboard is represented as an array inside the Gameboard object.
  - The module provides functions to access and update the game board.

### Module: Player Factory

The player factory module creates player objects.

- **Functionality**:
  - Creates player objects with unique names and markers (e.g., "X" or "O").

### Module: Game Control

The game control module manages the flow of the game and checks for win conditions.

- **Functionality**:
  - Handles game initialization, restart, and turn switching.
  - Implements logic to check for win conditions (3-in-a-row) and ties.

### HTML and DOM Interaction

The HTML file (`index.html`) serves as the basic structure of the webpage. JavaScript functions interact with the DOM to display the game board and capture player actions.

- **Functionality**:
  - A JavaScript function renders the contents of the game board array on the webpage.
  - Event listeners are set up to allow players to click on the game board to place their markers.

## [Click here to see the live project](https://subashjirel.github.io/Tic-Tac-Toe/)

---
