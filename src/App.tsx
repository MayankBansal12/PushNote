/* eslint-disable @typescript-eslint/no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import ProjectDash from "./pages/ProjectDash";
import TaskPage from "./pages/TaskPage";

//      Components
import Demo from "./components/Demo"
import AlertPrompt from "./components/AlertPrompt"
import Loading from "./components/Loading";
import UserProfile from "./pages/UserProfile";
import Messages from "./pages/Messages";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
  {
    path: "/project/:projectId",
    element: <ProjectDash />,
  },
  {
    path: "/task/:taskId",
    element: <TaskPage />,
  },
  {
    path: "/user/:userId",
    element: <UserProfile />
  },
  {
    path: "/messages",
    element: <Messages />
  }
]);

const App = () => {
  return (
    <div className="h-full w-full">
      <RouterProvider router={router} />
      <AlertPrompt />
      <Loading />
    </div>
  )
}

export default App;