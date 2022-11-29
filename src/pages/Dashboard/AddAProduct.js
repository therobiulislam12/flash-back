import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitles from "../../hooks/useTitles";

const AddAProduct = () => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const { user } = useContext(AuthContext);
  const [isVerified, setIsVerified] = useState(null);


  // get user role
  useEffect(() => {
    axios(`https://flashback-zeta.vercel.app/users?email=${user?.email}`).then((user) => {
      setIsVerified(user.data[0]?.verified);
    });
  }, [user?.email]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    setLoading(true);
    const productDetails = {
      ...data,
      sellerName: user?.displayName,
      sellerEmail: user?.email,
      verified: isVerified,
      time: new Date().toLocaleDateString("en-us", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };

    fetch("https://flashback-zeta.vercel.app/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setLoading(false);
          toast.success("Product added successfully!!!");
        }
      });

    reset();
  };

  useTitles('Add A Product')

  return (
    <section className="px-6 rounded shadow-md py-12 max-w-md mx-auto bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-4">Add A Product</h2>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("productName", {
              required: "Product Name is required",
            })}
          />
          {errors.productName && (
            <p role="alert" className="text-red-500 mt-2">
              {errors.productName?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Condition</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("condition", {
              required: "Please provide location",
            })}
          />
          {errors.condition && (
            <p role="alert" className="text-red-500 mt-2">
              {errors.condition?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("mobileNumber", {
              required: "Please provide location",
            })}
          />
          {errors.mobileNumber && (
            <p role="alert" className="text-red-500 mt-2">
              {errors.mobileNumber?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Pickup Location</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("pickUpLocation", {
              required: "Please provide location",
            })}
          />
          {errors.pickUpLocation && (
            <p role="alert" className="text-red-500 mt-2">
              {errors.pickUpLocation?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Original Price</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full"
            {...register("originalPrice", {
              required: "Original Price",
            })}
          />
          {errors.originalPrice && (
            <p role="alert" className="text-red-500 mt-2">
              {errors.originalPrice?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Resale Price</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full"
            {...register("price", {
              required: "Resale Price",
            })}
          />
          {errors.price && (
            <p role="alert" className="text-red-500 mt-2">
              {errors.price?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Please select a category</span>
          </label>
          <select
            className="select select-bordered w-full"
            {...register("category")}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="dslr-cameras">DSLR Cameras</option>
            <option value="film-cameras">Film Cameras</option>
            <option value="360-cameras">360 Cameras</option>
            <option value="action-cameras">Action Cameras</option>
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Years of use</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full"
            {...register("yearsOfUse", {
              required: "Years of used",
            })}
          />
          {errors.yearsOfUse && (
            <p role="alert" className="text-red-500 mt-2">
              {errors.yearsOfUse?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image url</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("image", {
              required: "Product image need",
            })}
          />
          {errors.image && (
            <p role="alert" className="text-red-500 mt-2">
              {errors.image?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder=""
            {...register("description", {
              required: "Please Provide a description",
            })}
          ></textarea>
          {errors.description && (
            <p role="alert" className="text-red-500 mt-2">
              {errors.description?.message}
            </p>
          )}
        </div>

        <input
          type="submit"
          className="btn btn-primary w-full mt-6"
          value={`${loading ? "Loading...." : "Add A Product"}`}
        />
      </form>
    </section>
  );
};

export default AddAProduct;
