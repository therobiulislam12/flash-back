import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../contexts/AuthProvider";

const ForgotPasswordModal = ({ email, setModalShow }) => {
  const { forgotPassword } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleForgotPassword = (data) => {
    setModalShow(true)
    forgotPassword(data.email)
      .then(() => {
        toast.success("Please check your email for reset password");
        setModalShow(false)
      })
      .catch((err) => toast.error(err.message));

    reset();
  };

  return (
    <>
      <input
        type="checkbox"
        id="forgotPasswordModal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="forgotPasswordModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Reset your password</h3>
          <form
            onSubmit={handleSubmit(handleForgotPassword)}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Please Provide your valid email",
              })}
              className="input w-full input-bordered"
            />
            {errors.email && (
              <p role="alert" className="text-red-500 mt-2">
                {errors.email?.message}
              </p>
            )}
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Send Reset Mail"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordModal;
