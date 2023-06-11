import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const useInstructor = () => {
  const { user, loading } = useContext(AuthContext);
  const [isInstructor, setIsInstructor] = useState(false);
  const [isInstructorLoading, setIsInstructorLoading] = useState(true);

  useEffect(() => {
    const fetchInstructorStatus = async () => {
      if (!loading && user) {
        try {
          const response = await fetch(`http://localhost:5000/students/instructor/${user.email}`,{
            headers:{authorization:`bearer ${localStorage.getItem('access-token')}`}
          })
          const data = await response.json(); 
          console.log(data);
          setIsInstructor(data.instructor);
        } catch (error) {
          console.log(error); 
          setIsInstructor(false);
          setIsInstructorLoading(false);
        }
      }
    };

    fetchInstructorStatus();
  }, [user, loading]);

  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
