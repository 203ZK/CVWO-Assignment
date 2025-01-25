import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { createHashRouter, RouterProvider } from "react-router"

// import Login from "./components/pages/Login"
// import Register from "./components/pages/Register"
// import Forum from "./components/pages/Forum"
// import CreateThread from "./components/pages/CreateThread"
// import EditThread from "./components/pages/EditThread"
// import ThreadPost from "./components/pages/ThreadPost"
import App from './App'

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <Login />
//   },
//   {
//     path: "register",
//     element: <Register />
//   },
//   { 
//     path: "forum",
//     element: <Forum />
//   },  
//   {
//     path: "create-thread",
//     element: <CreateThread />
//   },
//   {
//     path: "edit-thread/:thread_id",
//     element: <EditThread />
//   },
//   {
//     path: "thread/:thread_id",
//     element: <ThreadPost />
//   },
//   {
//     path: "*",
//     element: <p>Error!</p>
//   }
// ]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
