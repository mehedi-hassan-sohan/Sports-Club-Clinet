import { Navigate, useLocation } from "react-router";

import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

import useInstructor from "../src/Hooks/useInstructor";


const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoutes;