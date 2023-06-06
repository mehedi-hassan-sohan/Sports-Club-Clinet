import {
    createBrowserRouter,
    
  } from "react-router-dom"; 
import Main from "../src/Layouts/Main";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>
    },
  ]);  

 export default router