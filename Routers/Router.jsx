import {
    createBrowserRouter,
    
  } from "react-router-dom"; 
import Main from "../src/Layouts/Main";
import Login from "../src/Login/Login";
import SignUp from "../src/Singup/SingUp";
import Home from "../src/Components/Home/Home";
import AllClass from "../src/pages/AllClass";
import AllInstructor from "../src/pages/Allinstructor";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[{
        path:'/',
         element: <Home></Home>
      }, 
      {
        path:'/class' ,
        element:<AllClass></AllClass>,
      
      },
      {
        path:'/allinstructor' ,
        element:<AllInstructor></AllInstructor>,
      
      },
      {
          path:'/login',
          element:<Login></Login>
          
      },
      {
          path:'/singup',
          element:<SignUp></SignUp>
          
      },
  ]}
      
    
  ]);  

 export default router