# Fish and Jellyfish Canvas Animation

**Created by Jules**

This project displays an interactive animation of fish and jellyfish swimming within an HTML canvas. The animation is dynamically generated using JavaScript, featuring randomly behaving sea creatures with distinct movement patterns. It serves as a simple yet illustrative demonstration of 2D canvas rendering, object-oriented programming in JavaScript for managing multiple animated entities, and the use of `requestAnimationFrame` for smooth animation loops.

## Project Structure

-   `index.html`: The main HTML file that contains the canvas element and page structure.
-   `script.js`: The JavaScript file that holds the logic for the animation, including defining the Fish and Jellyfish objects, updating their positions, and drawing them on the canvas.

## Prerequisites

-   A modern web browser (e.g., Chrome, Firefox, Safari, Edge).
-   A code editor, preferably Visual Studio Code (VS Code), though any text editor can be used to view the files.

## Running the Animation

There are several ways to run this animation. The simplest method using VS Code is with the "Live Server" extension.

### Option 1: Using VS Code and Live Server Extension (Recommended)

1.  **Open the Project in VS Code:**
    *   If you haven't already, open Visual Studio Code.
    *   Go to `File > Open Folder...` and navigate to the directory containing `index.html` and `script.js`. Select the folder.

2.  **Install Live Server Extension (if you haven't already):**
    *   In VS Code, go to the Extensions view by clicking the Extensions icon in the Activity Bar on the side of the window (or press `Ctrl+Shift+X`).
    *   Search for "Live Server" (by Ritwick Dey).
    *   Click "Install". You might need to reload VS Code after installation.

3.  **Run with Live Server:**
    *   Once Live Server is installed, right-click on the `index.html` file in the VS Code Explorer panel.
    *   Select "Open with Live Server" from the context menu.
    *   This will automatically open the `index.html` file in your default web browser, and the animation should start.
    *   A key benefit of Live Server is that it will automatically reload the page in your browser whenever you save changes to `index.html` or `script.js`.

### Option 2: Opening `index.html` Directly in a Browser

1.  **Navigate to the Project Directory:**
    *   Using your computer's file explorer (e.g., File Explorer on Windows, Finder on macOS), navigate to the directory where you saved `index.html`.

2.  **Open `index.html`:**
    *   Double-click the `index.html` file.
    *   Alternatively, right-click the `index.html` file and choose "Open with" and select your preferred web browser.

    *Note: While this method works, automatic reloading on file changes will not occur. You'll need to manually refresh the browser page to see any updates you make to the code.*

## How it Works

-   The `index.html` file sets up a basic webpage with a `<canvas>` element.
-   The `script.js` file does the following:
    -   Gets a reference to the canvas and its 2D rendering context.
    -   Defines `Fish` and `Jellyfish` classes, each with methods to draw themselves and update their positions.
    -   Creates instances of these objects with random starting positions, sizes, colors, and speeds.
    -   Implements an animation loop using `requestAnimationFrame` which repeatedly:
        1.  Clears the canvas.
        2.  Updates the state (position, direction) of each fish and jellyfish.
        3.  Redraws each fish and jellyfish in its new position.
    -   Includes logic for creatures to bounce off the walls of the canvas or wrap around (in the case of jellyfish).

## Customization

You can modify the following in `script.js`:
-   `numFish` and `numJellyfish`: Change the number of creatures.
-   Colors, sizes, speeds: Adjust the parameters within the `Fish` and `Jellyfish` constructors or when they are instantiated.
-   Movement logic: Modify the `update()` methods within the classes to change how the creatures swim.
-   Canvas dimensions: Change `canvas.width` and `canvas.height` in `script.js` and also in the `<canvas>` tag in `index.html`.

The CSS in `index.html` can also be modified to change the page background and canvas appearance.