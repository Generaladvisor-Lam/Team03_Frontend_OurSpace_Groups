import { Route, Routes } from "react-router-dom";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../components/pages/HomePage";
import UserTable from "../components/pages/UserPage/UserTable";
import UserPage from "../components/pages/UserPage/UserPage";
import UserList from "../components/pages/UserPage/UserList";

/**
 * Router component renders a route switch with all available pages
 */

const Router = () => {
  //const { checkRole } = useContext(ActiveUserContext);

  /** navigate to different "home"-locations depending on Role the user have */

  return (
    <Routes>
      <Route 
        path={"/"}
        element={<PrivateRoute authorities={[]} element={<HomePage />}  />}
      />
      
      <Route path={"/login"} element={<LoginPage />} />

      <Route
        path={"/users/dashboard/:groupId"}
        element={<PrivateRoute authorities={[]} element={<UserList />} />}
      />
      <Route
        path={"/users/:groupId"}
        element={<PrivateRoute authorities={[]} element={<UserTable />} />}
      />
      <Route
        path="/useredit"
        element={
          <PrivateRoute authorities={[]} element={<UserPage />}></PrivateRoute>
        }
      />
      <Route
        path="/useredit/:userId"
        element={
          <PrivateRoute authorities={[]} element={<UserPage />}></PrivateRoute>
        }
      />

      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default Router;
