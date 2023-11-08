import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import AllAssignment from "../pages/AllAssignment/AllAssignment";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import MyAssignment from "../pages/MyAssignment/MyAssignment";
import ViewAssignment from "../pages/AllAssignment/ViewAssignment";
import AnswerForm from "../pages/AllAssignment/AnswerForm";
import PrivateRoute from "./PrivateRoute";
import UpdateAssignment from "../pages/AllAssignment/UpdateAssignment";
import GiveMarks from "../pages/SubbmittedAssignment/GiveMarks";
import PendingAssignment from "../pages/MyAssignment/PendingAssignment";
import CompleteAssignment from "../pages/MyAssignment/CompleteAssignment";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SubbmittedAssignment from "../pages/SubbmittedAssignment/SubbmittedAssignment";
import SubmitCompleteas from "../pages/SubbmittedAssignment/SubmitCompleteas";





const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Registration></Registration>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/allassignment",
                element: <AllAssignment></AllAssignment>

            },
            {
                path: "/createassignment",
                element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
            },
            {
                path: "/runningassignment",
                element: <PrivateRoute><MyAssignment></MyAssignment></PrivateRoute>
                
            },
            {
                path: "/pendingassignment",
                element: <PrivateRoute><PendingAssignment></PendingAssignment></PrivateRoute>,
                
            },
            {
                path: "/completeassignment",
                element: <PrivateRoute><CompleteAssignment></CompleteAssignment></PrivateRoute>
                
            },
            {
                path: "/subbmittedassignment",
                element: <PrivateRoute><SubbmittedAssignment></SubbmittedAssignment></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/assignmentCount')
            },
            {
                path: "/submitcompleteas",
                element: <PrivateRoute><SubmitCompleteas></SubmitCompleteas></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/resultCount')
            },
            {
                path: "/viewassignment/:id",
                element: <PrivateRoute><ViewAssignment></ViewAssignment></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`)
            },
            {
                path: "/viewassignment/:id/answerform",
                element: <PrivateRoute><AnswerForm></AnswerForm></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`)
            },

            {
                path: "/updateassignment/:id",
                element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`)
            },
            {
                path: "/subbmittedassignment/givenmarks/:id",
                element: <PrivateRoute><GiveMarks></GiveMarks></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/answer/${params.id}`)
            }
        ]

    },
]);

export default router;