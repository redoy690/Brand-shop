import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import AllAssignment from "../pages/AllAssignment/AllAssignment";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import MyAssignment from "../pages/MyAssignment/MyAssignment";
import SubbmittedAssignment from "../pages/SubbmittedAssignment/SubbmittedAssignment";
import ViewAssignment from "../pages/AllAssignment/ViewAssignment";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/register",
            element:<Registration></Registration>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/allassignment",
            element:<AllAssignment></AllAssignment>
        },
        {
            path:"/createassignment",
            element:<CreateAssignment></CreateAssignment>
        },
        {
            path:"/myassignment",
            element:<MyAssignment></MyAssignment>
        },
        {
            path:"/subbmittedassignment",
            element:<SubbmittedAssignment></SubbmittedAssignment>
        },
        {
            path:"/viewassignment/:id",
            element:<ViewAssignment></ViewAssignment>
        }
      ]

    },
  ]);

  export default router;