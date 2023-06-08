import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    const { email, password } = data;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: 'User Login Successful.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
        navigate(from, { replace: true });
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((show) => !show);
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div>
          <div className="flex gap-10">
            <div>
              <img className="w-[500px] rounded-3xl" src="https://i.ibb.co/MNxrF7f/cyber-security-concept-23-2148539611.jpg" alt="" />
            </div>
            <div>
              <div className="text-center mb-5">
                <h1 className="text-5xl font-bold">Login now!</h1>
              </div>
              <div className="card md:w-2/2 max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className={`input input-bordered ${errors.email ? 'input-error' : ''}`}
                      {...register('email', { required: 'Email is required' })}
                    />
                    {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                  </div>
                  <div className="form-control">
                    <div className="flex justify-center items-center gap-2">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        className="w-full px-3 py-2 rounded-xl mb-3"
                        placeholder="Password"
                        {...register('password', { required: 'Password is required' })}
                      />
                      {showPassword ? (
                        <FaEye onClick={togglePasswordVisibility} />
                      ) : (
                        <FaEyeSlash onClick={togglePasswordVisibility} />
                      )}
                    </div>
                    {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
                  </div>
                  <p className="mt-2 text-red-600">{error}</p>
                  <div className="form-control mt-6">
                    <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                  </div>
                </form>
                <p><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                <SocialLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
