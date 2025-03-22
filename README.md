📋 User Management System


A fully functional User Management System built with React, TypeScript, and Redux Toolkit. This project fetches user data from an external API and allows users to view, add, update, and delete user information locally within the app.


🚀 Features


🌐 Fetch Users: Initial user data fetched from https://jsonplaceholder.typicode.com/users.

🗂️ Global State Management: Implemented using Redux Toolkit.

➕ Add Users: Add new users locally.

✏️ Edit Users: Edit existing user details.

❌ Delete Users: Remove users from the local Redux state.

🔍 View Details: View individual user information.

🔄 Local State Updates: Add, edit, and delete operations are handled locally without API requests.

🔥 Responsive & Styled UI: Clean, appealing card-based layout with smooth navigation.


🛠️ Technologies Used


React

TypeScript

Redux Toolkit

React Router DOM

CSS



📂 Folder Structure


📦 userManagement
├── 📂 public
│   └── 📄 index.html
├── 📂 src
│   ├── 📂 app
│   │   └── 📄 store.ts
│   ├── 📂 components
│   │   ├── 📂 UserList
│   │   │   ├── 📄 UserList.tsx
│   │   │   └── 📄 UserList.css
│   │   ├── 📂 UserCard
│   │   │   ├── 📄 UserCard.tsx
│   │   │   └── 📄 UserCard.css
│   │   └── 📂 UserForm
│   │       ├── 📄 UserForm.tsx
│   │       └── 📄 UserForm.css
│   ├── 📂 store
│   │   └── 📄 userSlice.ts
│   ├── 📂 types
│   │   └── 📄 index.ts
│   ├── 📄 App.tsx
│   └── 📄 main.tsx
└── 📄 README.md



🚦 Routes & Navigation



Route	Description
/users	Displays the list of users
/users/:id	Shows detailed view of a user
/add-user	Form to add a new user
/edit-user/:id	Form to edit an existing user

📌 Requirements
Node.js (v14 or later)

npm or yarn

⚙️ Installation & Running Locally


Clone the repository:

git clone https://github.com/steno1/userManagement.git
cd userManagement
Install dependencies:

npm install
Run the app:

npm run dev
Visit in browser:

http://localhost:5173
🌟 Project Highlights
Proper Redux Toolkit setup with slices & async thunks.

Local-only state manipulation after initial API fetch.

Clean, modular folder structure for scalability.

Fully responsive, minimal UI styling with CSS.


📝 Note
The https://jsonplaceholder.typicode.com/users API is only used for initial fetch. Add, edit, and delete functionalities are handled locally in Redux, with no POST, PUT, or DELETE requests sent to the API.


👨‍💻 Author
Onu Princeley Toochukwu

GitHub: steno1
