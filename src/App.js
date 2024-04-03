import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Profile } from "./pages/profile/Profile";
import { Register } from "./pages/register/Register";
import { Navbar } from "./components/navbar/Navbar";
import { LeftBar } from "./components/leftBar/LeftBar";
import { Center } from "./components/center/Center";
import { RightBar } from "./components/rightBar/RightBar";

function App() {
  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div className="main-container">
          <LeftBar />
          <Center />
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login/" />;
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/navbar",
      element: <Navbar />,
    },
    {
      path: "/leftbar",
      element: <LeftBar />,
    },

    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      {/* <Login /> */}
      <RouterProvider router={router} />
      {/* <Home />
      <Profile /> */}
    </div>
  );
}

export default App;
