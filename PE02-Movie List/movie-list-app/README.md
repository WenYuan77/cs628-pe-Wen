# Input
The program accepts a predefined array of movie objects as input. Each movie object contains three properties: `title`, `genre`, and `releaseYear`. Additionally, user input is captured through a dropdown menu that allows the selection of a specific genre. This input determines how the movie list will be filtered.

# Process
The program uses React's state management with the `useState` hook to track the selected genre from the dropdown. It dynamically generates the dropdown options based on unique genres in the movie list. When a user selects a genre, the program filters the movie list to display only those matching the selected genre. Clicking on a movie item triggers an event handler that displays the movie title in an alert box.

# Output
The output includes a dynamically rendered list of movies based on the selected genre. The list shows each movie’s title, genre, and release year. An alert box displays the movie title when clicked.
