# ToDo List App

## Input
The ToDo List App allows users to input tasks using a text field. The user types a task description in the input box and clicks the "Add Task" button to submit the task. Each task is stored in the application's state using the `useState` hook. The application also provides a "Delete" button next to each task, allowing users to remove specific tasks from the list.

## Process
When the user submits a task, the `addTask` function updates the `todos` state by appending the new task. The application dynamically renders the list using the `.map()` function. Each task is displayed as a `ToDoItem` component, which contains a delete button. Clicking the delete button triggers the `removeTask` function, which updates the state by filtering out the selected task.

## Output
The application displays the list of tasks in real-time. If no tasks exist, a message "No tasks available" is shown. Tasks are displayed in a structured format with delete buttons. When a task is deleted, the list updates immediately, reflecting the changes dynamically.
