import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useTitles from "../hooks/useTitles";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const [passwordType, setPasswordType] = useState(true);
  const { registerUser, setUser, updateUserProfile, signInGoogle, loading } =
    useContext(AuthContext);

  // role state
  const [role, setRole] = useState('user') 

  // After login user navigate
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

  // react-hook-form use here
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Email and password create a user
  const handleRegister = (data) => {
    const {fullName, email, role} = data;

    const userDetails = {
      name: fullName,
      email,
      role,
    }

    registerUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("User Create Success");

        // update user
        updateUserProfile(data.fullName)
          .then(() => {
            toast.success("User name Update");
            saveUser(userDetails);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => toast.error(err.message));

    reset();
  };

  // Save user in database
  const saveUser = (user) => {
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(from, { replace: true });
      });
  };

  // Page title set
  useTitles("Sign Up");
  return (
    <section className="max-w-md mx-auto py-12 lg:py-20">
      <div className="bg-gray-100 p-8 rounded-lg shadow">
        <h2 className="text-4xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              {...register("fullName", { required: "Please provided a name" })}
            />
            {errors.fullName && (
              <p role="alert" className="text-red-500 mt-2">
                {errors.fullName?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              {...register("email", { required: "Email Address is required" })}
            />
            {errors.email && (
              <p role="alert" className="text-red-500 mt-2">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Who you are?</span>
            </label>
            <select
              className="select select-bordered w-full"
              {...register("role")}
              value={role}
              onChange={(e) => setRole(e.target.value)}

            >
              <option selected value="user">
                User
              </option>
              <option value="seller">Seller</option>
            </select>
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
                minLength: {
                  value: 6,
                  message: "Password must be 6 character",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6})/,
                  message: "Password must be strong",
                },
              })}
            />
          </div>
          {errors.password && (
            <p role="alert" className="text-red-500 mt-2">
              {errors.password?.message}
            </p>
          )}
          <input
            type="submit"
            className="btn btn-primary w-full mt-6"
            value={loading ? "Loading..." : "Sign Up"}
          />
        </form>
        <div className="text-center my-6">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-400 underline">
              Login
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
  );
};

export default SignUp;
