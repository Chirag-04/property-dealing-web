import Navbar from "./components/navbar/Navbar"
import HomePage from "./routes/homePage/homePage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ListPage from "./routes/listPage/ListPage";
import {Layout,  RequireAuth } from "./routes/layout/Layout";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/ProfilePage/ProfilePage";
import Register from "./routes/register/Register";
import Login from "./routes/login/Login";
import ProfileUpdatePage from "./routes/ProfileUpdatePage/ProfileUpdatePage";
import NewPostPage from "./routes/newPostpage/NewPostPage";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loader";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Agent from "./routes/agents/Agent";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/agent",
          element: <Agent/>
        },
        
        {
          path: "/list",
          element: <ListPage />,
          loader:listPageLoader
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader : singlePageLoader
,
        },

        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader : profilePageLoader
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage/>
        },
        {
          path: "/add",
          element:<NewPostPage/>
        },
       
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;