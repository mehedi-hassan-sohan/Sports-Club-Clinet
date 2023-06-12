import { createBrowserRouter, } from "react-router-dom";
import Main from "../src/Layouts/Main";
import Login from "../src/Login/Login";
import SignUp from "../src/Singup/SingUp";
import Home from "../src/Components/Home/Home";
import AllClass from "../src/pages/AllClass";
import AllInstructor from "../src/pages/Allinstructor";
import Dashboard from "../src/Layouts/Dashboard";
import Myclass from "../src/pages/Dashboard/Students/Myclass";
import Payment from "../src/pages/Dashboard/Students/payment/Payment";
import AllUser from "../src/pages/Dashboard/Admin/AllUser";
import AddClass from "../src/pages/Dashboard/Inistactor/AddClass";
import Errors from "../src/Components/ErrorPage/Error";
import AdminRoutes from "../Provider/AdminRoute";
import MyClasseIns from "../src/pages/Dashboard/Inistactor/MyClasseIns";
import ManageClasses from "../src/pages/Dashboard/Admin/ManageClasses";
import PaymentHistory from "../src/pages/Dashboard/Students/payment/PaymentHistory";
import MyEnrollClass from "../src/pages/Dashboard/Students/MyEnrollClass";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>, 
    errorElement:<Errors></Errors>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/class',
        element: <AllClass></AllClass>,
      },
      {
        path: '/allinstructor',
        element: <AllInstructor></AllInstructor>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/singup',
        element: <SignUp></SignUp>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: 'myclass',
            element: <Myclass></Myclass>
          },
          {
            path: 'myenroll',
            element:<MyEnrollClass></MyEnrollClass>
          },
          {
            path: 'payment/:id',
            element: <Payment></Payment>,
            loader:({params})=>fetch(`http://localhost:5000/classes/${params.id}`)
          
       
            
          }, 
          {
            path:'paymenthistory',
            element:<PaymentHistory></PaymentHistory>

          },
          {
            path:'allusers',
            element:<AdminRoutes><AllUser></AllUser></AdminRoutes>
          } ,
          {
            path:'manageuser',
            element:<ManageClasses></ManageClasses>
          },
          {
            path:'addclass',
            element:<AddClass></AddClass>
          },
          {
            path:'myclassins',
            element:<MyClasseIns></MyClasseIns>
          }
        ]
      }
    ]
  },
]);

export default router;
