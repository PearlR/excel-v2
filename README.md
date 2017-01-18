#Excel

This repo is an example exercise showing how to create a Excel like app. It shows a list of the technologies I've used and the process I went through in developing the app.

##Technologies / Tools / Libraries

- react
- redux
- react-redux (for connect functionality)
- create react app
- react bootstrap
- bootswatch css - theme Simplex

##User Stories

1. Create index.html in your favourite text editor.  It should load and use the jquery javascript library (or another suitable one) which you should make use of in your code.  Your javascript can either be in a separate .js file, or it can be contained in the index.html page

2. When loading index.html into chrome or firefox, it should draw a 100x100 grid of cells, with columns labelled A-Z, AA, AB, AC, etc and rows numbered 1 to 100

3. When you click in a cell and enter a number, it should store the number in a javascript object (note: this would be lost when you refresh the page)

4. Have a refresh button that redraws the grid (without refreshing the page) and inserts data into cells where you've saved it

5. Add support for some basic formulas.  For example if you enter "=A1+A2" into A3 it should calculate the sum of these two cells and display the result in A3.  Updating A1 would update A3.

6. Add support for some basic functions.  For example if you enter "=sum(A1:A10)" into A11, then it should calculate the sum of all cells in the range and display the result in A11.  Updating any value in the range would recalculate A11

7. Add support for formatting, for example bold, italics and underline

##Building Plan

1 - Set up the base of the app and add the appropriate technologies that will be utilized
1 - Add basic a reducer / actions / constants

2 - Scaffold the skeleton of the app components
2 - Add functionality for letter index for column headers

3 - Add updateCell functionality (will store values in redux)

4 - Redundant when using react / redux (add a button that refreshes state and returns a popup to inform the user)

5 - Ummm... Let's worry about this when we get here
