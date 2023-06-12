import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    const fetchAdminStatus = async () => {
      if (!loading && user) {
        try {
          const response = await fetch(`https://assignment-12-server-ecru-chi.vercel.app/students/admin/${user.email}`,{
            headers:{authorization:`bearer ${localStorage.getItem('access-token')}`}
          })
          const data = await response.json(); 
          console.log(data);
          setIsAdmin(data.admin);
          setIsAdminLoading(false);
        } catch (error) {
          console.log(error); 
          setIsAdmin(false);
          setIsAdminLoading(false);
        }
      }
    };

    fetchAdminStatus();
  }, [user, loading]);

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
