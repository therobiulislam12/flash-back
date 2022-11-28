import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ForgotPasswordModal from "../components/ForgotPasswordModal";
import { AuthContext } from "../contexts/AuthProvider";
import useTitles from "../hooks/useTitles";

const Login = () => {
  const [passwordType, setPasswordType] = useState(true);
  const [modalShow, setModalShow] = useState(true);

  const { login, setUser, signInGoogle, loading } = useContext(AuthContext);


  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  // handle google login
  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Google Login Success");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    login(data.email, data.password)
      .then((result) => {
        setUser(result.user);
        toast.success("User Login Success");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));

    // reset a from
    reset();
  };

  // page title
  useTitles("Login");
  return (
    <>
      <section className="max-w-md mx-auto py-12 lg:py-20">
        <div className="bg-gray-100 p-8 rounded-lg shadow">
          <h2 className="text-2xl text-center mb-4 font-bold">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                onChange={(e) => console.log(e.target.value)}
                className="input input-bordered w-full"
                {...register("email", {
                  required: "Email Address is required",
                })}
              />
              {errors.email && (
                <p role="alert" className="text-red-500 mt-2">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
                <span
                  className="label-text cursor-pointer font-bold"
                  onClick={() => setPasswordType(!passwordType)}
                >
                  {passwordType ? "Show" : "Hide"}
                </span>
              </label>
              <input
                type={passwordType ? "password" : "text"}
                className="input input-bordered w-full"
                {...register("password", {
                  required: "Ki re vai, password den nah kno?",
                })}
              />
              {errors.password && (
                <p role="alert" className="text-red-500 mt-2">
                  {errors.password?.message}
                </p>
              )}
            </div>
            {/* Forgot password modal */}
            <label htmlFor="forgotPasswordModal">
              <p className="underline text-base hover:no-underline cursor-pointer mt-3">
                Forgot Password?
              </p>
            </label>

            <input
              type="submit"
              className="btn btn-primary w-full mt-6"
              value={`${loading ? "Loading...." : "Login"}`}
            />
          </form>
          <div className="text-center my-6">
            <p className="text-sm">
              New to lash Back?{" "}
              <Link to="/register" className="text-teal-400 underline">
                Create new account
              </Link>
            </p>
          </div>
          <div className="divider">OR</div>
          <div>
            <button
              className="btn btn-outline btn-info uppercase w-full"
              onClick={handleGoogleLogin}
            >
              Continue with google
            </button>
          </div>
        </div>
      </section>

      {modalShow && <ForgotPasswordModal setModalShow={setModalShow}/>}
    </>
  );
};

export default Login;
