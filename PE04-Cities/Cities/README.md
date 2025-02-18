# Cities React Application

## Input
The "Cities" application allows users to input data in two main ways:  
1. **Selecting a city** from the cities list by clicking on a city name.
2. **Adding a new city** using an input form where users provide the city's name, country, and population.  
These inputs are received through user interactions with the interface and are stored in the application's state.

## Process
The application processes user inputs using React state and React Router.  
- The cities list is managed using the `useState` hook.  
- Clicking on a city fetches its details using `useParams`, which extracts the city ID from the URL.  
- When a new city is added, the `setCities` function updates the state, and `useNavigate` redirects the user back to the cities list.  
- React Router (`Routes` and `Link`) enables seamless navigation between the list, details, and add city pages.

## Output
The application dynamically renders UI components based on user interactions.  
- The cities list displays all available cities.  
- The city details page shows selected city information.  
- The add city form allows new cities to be stored and displayed.  
This ensures a smooth user experience with real-time updates and navigation.
