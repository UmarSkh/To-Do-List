# To-Do List Application

A dynamic and customizable To-Do List web application built with Node.js, Express, and MongoDB. Manage daily tasks, create custom lists, and delete completed items seamlessly.

## Access the Live Application

The To-Do List app is deployed on **Railway**. You can access it via the following link:  
[To-Do List App](https://to-do-list-production-b97b.up.railway.app/)  

---


## Features

- **Default Tasks**: Preloaded tasks to guide new users.
- **Customizable Lists**: Create custom task lists by visiting a unique URL.
- **Dynamic Task Management**: Add and remove tasks easily.
- **Responsive Design**: Works seamlessly across devices.
- **Persistent Data**: All tasks are stored in a MongoDB database, ensuring data is not lost after a server restart.

## Technologies Used

- **Frontend**:
  - EJS (Embedded JavaScript) for templating
  - HTML5, CSS3, and JavaScript for the UI
- **Backend**:
  - Node.js with Express.js for server-side logic
- **Database**:
  - MongoDB (using Mongoose for data modeling)
- **Utilities**:
  - Body-parser for handling form submissions
  - Lodash for string manipulation and utility functions

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (v12 or later)
- MongoDB (or access to MongoDB Atlas)
- npm (Node Package Manager)

## Local Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app
2. **Install dependencies**:
   ```bash
   npm install
3. **Set up MongoDB**:
   - If using MongoDB Atlas, replace the connection string in mongoose.connect in app.js with your own database credentials.
   - Example:
   ```bash
   mongoose.connect("mongodb+srv://<username>:<password>@cluster0.mongodb.net/todoListDB");
4. **Start the server**:
   ```bash
   node app.js
5. **Access the application**:
   Open your browser and navigate to http://localhost:3000.

## Usage

### Default To-Do List

- Visit the homepage to view or manage the default "Today" list.
- Add tasks using the input box and "+" button.
- Delete tasks by checking the checkbox.

### Custom Lists

- Visit `http://localhost:3000/<custom-list-name>` to create a custom list.
- Replace `<custom-list-name>` with the desired list name (e.g., `http://localhost:3000/work`).

### About Page

- Visit `http://localhost:3000/about` to learn more about the app.

---

## Future Improvements

- Add user authentication for personalized lists.
- Enable task prioritization and deadlines.
- Implement a REST API for external integrations.

---

## Author

**Mohammad Umar Shaikh**  
- [LinkedIn](https://www.linkedin.com/in/mohammad-umar-shaikh-b914a3227/)  
- [GitHub](https://github.com/UmarSkh)


   

