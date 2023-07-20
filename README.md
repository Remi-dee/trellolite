# Trellolite App
Trellolite is a lightweight Trello clone that allows users to set tasks and organize them in columns with draggable features. The app is built using Next.js, TypeScript, Tailwind CSS, Appwrite, React Beautiful DND, Hero Icon, Avatar, and OpenAI GPT for task summary generation. It provides a simple and efficient user interface for task management and organization, making it easy for users to stay productive and on top of their tasks.

# Features
## MVP
- [x] Task Management
- [x] Create new tasks
- [x] Update existing tasks
- [x] Delete tasks
- [x] Drag and drop tasks to reorder them within columns
- [x] Column Management
- [x] Drag and drop columns to reorder them on the board
- [x] Task Summary with OpenAI GPT
- [x] Avatar support for user profiles

## POST MVP
- [ ] Create new columns
- [ ] Update existing columns
- [ ] Delete columns
- [ ] Generate task summaries for todos in backlog, in progress, and done columns


 # Getting Started

## Organise Tasks by dragging

![Trello drag2](https://github.com/Remi-dee/trellolite/assets/96704300/a21c5fdf-f00d-4fe3-b169-133f6a3108b6)


## Add a Task
![Trello add a task2](https://github.com/Remi-dee/trellolite/assets/96704300/1799c579-fae7-4110-85ec-8e4152b26637)


## Filter Tasks
![Trello search](https://github.com/Remi-dee/trellolite/assets/96704300/07777b72-eadb-4035-9786-c2988e763571)


To run the Trellolite application locally, follow these steps:

- Clone the repository to your local machine.

- Install the required dependencies by running npm install in the project directory.

- Configure the environment variables for Appwrite and OpenAI GPT. Create a .env.local file in the root directory and add the following variables: 
Copy code
```
NEXT_PUBLIC_DATABASE_ID = <appwrite_databse_id>
NEXT_PUBLIC_APPWRITE_PROJECT_ID=<appwrite_project_id>
NEXT_PUBLIC_TODOS_COLLECTION_ID = <appwrite_todos_collection_id>
NEXT_PUBLIC_BUCKET_ID = <appwrite_bucket_id>
NEXT_PUBLIC_OPENAI_API_KEY=<openai_api_key>
```

Replace <appwrite_api_endpoint> with the URL of your Appwrite API endpoint, <appwrite_project_id> with your Appwrite project ID, and <openai_api_key> with your OpenAI API key.



- Start the development server by running npm run dev in the project directory.

- Open your web browser and navigate to http://localhost:3000 to access the Trellolite app.

# Technology Stack
The Trellolite app is built using the following technologies:

- Next.js: Next.js is a React framework that provides server-side rendering, automatic code splitting, and simple API routes. It allows for efficient development of scalable and optimized web applications.

- TypeScript: TypeScript is a superset of JavaScript that adds static typing to the language. It provides better code maintainability and improves development productivity.

- Tailwind CSS: Tailwind CSS is a utility-first CSS framework that provides a set of pre-built CSS classes to rapidly build custom user interfaces. It offers a flexible and responsive design system for creating modern and visually appealing websites.

- Appwrite: Appwrite is an open-source backend server that simplifies the development of web and mobile applications. It provides authentication, database storage, file storage, and other backend functionalities.

- React Beautiful DND: React Beautiful DND is a popular library for adding drag-and-drop capabilities to React applications. It allows users to drag and drop tasks and columns to rearrange them on the board.

- Hero Icon: Hero Icon is a set of free SVG icons designed by Steve Schoger. It provides a comprehensive collection of icons that can be easily customized and used in web projects.

- Avatar: Avatar is a library for generating avatar images based on user initials. It provides a simple way to display unique avatars for user profiles.

- OpenAI GPT: OpenAI GPT is a powerful language model that can generate human-like text. In Trellolite, it is utilized to create task summaries for todos in the backlog, in progress, and done columns.

- The combination of Next.js, TypeScript, Tailwind CSS, Appwrite, React Beautiful DND, Hero Icon, Avatar, and OpenAI GPT offers a robust and efficient tech stack for building a Trello-like task management application like Trellolite.

- Folder Structure
The Trellolite repository follows a specific folder structure to organize the codebase effectively:

/components: Contains reusable React components used throughout the application.
/pages: Contains the Next.js pages that define the different routes and views of the application.
/public: Contains static assets, such as images and fonts, that are served by Next.js.
/styles: Contains global styles and Tailwind CSS configuration.
/lib: Contains utility functions and API clients.
/constants: Contains constant values and configurations used throughout the application.

# API Integration
The Trellolite app integrates with the Appwrite backend for user authentication and task management. Appwrite provides the necessary API endpoints for user registration, login, and task data storage.

# Task Summary Generation with OpenAI GPT
Trellolite uses the OpenAI GPT API to generate human-like and accurate task summaries for todos in the backlog, in progress, and done columns. The GPT model is trained to understand the context of each task and generate a concise summary to provide users with a clear overview of their tasks.

# Conclusion
Trellolite is a feature-rich Trello clone that simplifies task management and organization. It allows users to create, update, and delete tasks while maintaining an intuitive drag-and-drop interface for easy task rearrangement. The app is built with Next.js, TypeScript, Tailwind CSS, Appwrite, React Beautiful DND, Hero Icon, Avatar, and OpenAI GPT, providing a modern and seamless user experience. With Trellolite, users can stay organized and productive, making it an excellent choice for task management applications.







