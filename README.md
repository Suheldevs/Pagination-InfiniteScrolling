# Questions API with Pagination and Infinite Scroll

This repository provides an example of how to implement pagination and infinite scroll using a Node.js backend with Express.js and MongoDB, along with a React frontend.

## Features
- Fetch questions from a database.
- Implement pagination with page and limit queries.
- Load questions dynamically using infinite scroll.

---

## How to Use Pagination

### Step 1: Start the Backend
Ensure the backend server is running on your local machine. The backend exposes an API endpoint (`/questions`) that accepts query parameters for `page` and `limit`.

- `page`: Specifies the current page number.
- `limit`: Specifies the number of questions to fetch per page.

For example:
- `page=1&limit=10` fetches the first 10 questions.
- `page=2&limit=10` fetches the next 10 questions.

### Step 2: Fetch Data on the Frontend
- Use the `page` and `limit` query parameters to request data from the backend.
- Update the frontend state when the user navigates between pages.
- Provide a "Next" button or pagination controls to allow the user to change the current page.

### Step 3: Test Pagination
- Verify that navigating to different pages fetches the correct data.
- Ensure no duplicate or missing questions are displayed.

---

## How to Use Infinite Scroll

### Step 1: Understand Infinite Scroll
Infinite scroll dynamically loads data as the user scrolls down the page. Instead of traditional pagination controls, new questions are loaded automatically.

### Step 2: Start the Backend
Ensure the backend is running, and the `/questions` endpoint supports pagination using `page` and `limit` query parameters.

### Step 3: Implement Infinite Scroll on the Frontend
- Start with an empty list of questions and set the initial page number to 1.
- When the user scrolls near the bottom of the page, increase the page number and fetch the next set of questions.
- Append the newly fetched questions to the existing list.

### Step 4: Manage State and Loading
- Maintain a state variable to track whether more data is available.
- Display a loading spinner while fetching questions.
- Show a "No more questions" message when all questions are loaded.

### Step 5: Test Infinite Scroll
- Scroll to the bottom of the page to ensure new questions are loaded correctly.
- Check that questions do not repeat and no unnecessary API calls are made.

---

## Notes
- Make sure your database has sufficient data to test pagination and infinite scroll effectively.
- Handle errors gracefully, such as when the API fails or the user has no internet connection.
- Test the implementation thoroughly to ensure smooth functionality across different devices.

---

## Getting Help
If you encounter any issues or have questions, feel free to open an issue in this repository. Happy coding!
