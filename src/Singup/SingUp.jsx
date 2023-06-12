import { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const togglePasswordVisibility = () => {
    setShowPassword((show) => !show);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((show) => !show);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      createUser(data.email, data.password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          updateUserProfile(data.name, data.photoURL)
            .then(() => {
              const saveStudent = { name: data.name, email: data.email };
              fetch('https://assignment-12-server-ecru-chi.vercel.app/students', {
                method: 'POST',
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify(saveStudent)
              })
                .then(res => res.json())
                .then(data => {
                  if (data.insertedId) {
                    reset();
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'User created successfully.',
                      showConfirmButton: false,
                      timer: 1500
                    });
                    navigate('/');
                  }
                });
            })
            .catch(error => console.log(error));
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Passwords do not match',
        text: 'Please make sure the passwords match',
      });
    }
  };
  

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className='flex gap-10 p-14'>
            <div>
              <img className='w-[600px] lg:mt-44 rounded-3xl' src="https://i.ibb.co/x6rWbwf/image.png" alt="" />
            </div>
            <div>
              <div className="text-center ">
                <h1 className="text-5xl font-bold mb-6">Sign up now!</h1>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body p-10">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                    {errors.name && <span className="text-red-600">Name is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                    {errors.email && <span className="text-red-600">Email is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <div className='flex gap-3'>
                      <input type={showPassword ? "text" : "password"} {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/
                      })} placeholder="password" className="input input-bordered flex justify-center items-center gap-2" />
                      {showPassword ? (
                        <FaEye className='mt-5' onClick={togglePasswordVisibility} />
                      ) : (
                        <FaEyeSlash className='mt-5' onClick={togglePasswordVisibility} />
                      )}
                    </div>
                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase, one lowercase, and one special character</p>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <div className='flex gap-3'>
                      <input type={showConfirmPassword ? "text" : "password"} {...register("confirmPassword", {
                        required: true,
                        validate: value => value === watch('password') || "Passwords do not match"
                      })} placeholder="Confirm password" className="input input-bordered flex justify-center items-center gap-2" />
                      {showConfirmPassword ? (
                        <FaEye className='mt-5' onClick={toggleConfirmPasswordVisibility} />
                      ) : (
                        <FaEyeSlash className='mt-5' onClick={toggleConfirmPasswordVisibility} />
                      )}
                    </div>
                    {errors.confirmPassword && <span className="text-red-600">{errors.confirmPassword.message}</span>}
                  </div>
                  <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                  </div>
                </form>
                <p><small>Already have an account <Link to="/login">Login</Link></small></p>
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
