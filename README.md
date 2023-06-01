# Task: Building a simple CRUD application using React and PHP

Overview:

You will be building a simple application that allows users to create, read, update and delete records from a database. The application will consist of a front-end built using React and a back-end built using PHP. You will be responsible for implementing both the front-end and back-end components of the application.

Requirements:

- The front-end should be built using React and should use hooks to manage state.
- The back-end should be built using PHP and should use PDO to connect to a MySQL database.
- The application should have a simple UI that allows users to create, read, update and delete records from the database.
- The application should validate user input and display appropriate error messages when necessary.
- The source code should be pushed to a public GitHub repository and the link to the repository should be included in the     README file.

Bonus points:

- Implement authentication using JSON Web Tokens (JWT) to protect the application from unauthorized access.
- Use React Router to implement client-side routing and improve the user experience.
- Use a CSS framework like Bootstrap or Material UI to improve the visual design of the application.


# Getting Started with React CRUD application

### 1. Set up the development environment
- Install a web server like Apache or Nginx, PHP, and MySQL on your local machine
- Install Node.js and npm
- Create a new React project using create-react-app
- Install required dependencies like axios and react-router-dom

### 2. Create a MySQL database
- Create a table to store the data
- Define the table schema with fields like id, name, email, etc.

CREATE DATABASE react_crud_app;

CREATE TABLE `react_crud_app`.`users`
(
    `id` int NOT NULL auto_increment,
    `name` varchar(50),
    `email` varchar(60),
    `mobile` bigint(10),
    `created_at` timestamp,
    `updated_at` timestamp, PRIMARY KEY (id)
);

### 3. Create a PHP API to perform CRUD operations
- Create a new PHP file to handle API requests
- Define functions to perform CRUD operations like create, read, update, and delete
- Use mysqli or PDO to interact with the MySQL database

### 4. Create a React front-end to consume the API
- Use axios to fetch data from the PHP API and display it in the component
- Create a form component to allow users to add new data
- Use axios to send data to the PHP API to create new records
- Create an edit component to allow users to edit existing data
- Use axios to send data to the PHP API to update records
- Create a delete component to allow users to delete existing data
- Use axios to send requests to the PHP API to delete records



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
