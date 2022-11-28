import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaRegWindowClose } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthProvider";

const BookingModal = ({ category, setBookings }) => {
  const { user } = useContext(AuthContext);

  const { productName, price } = category;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleBooking = (data) => {
    const bookingData = {
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      productPrice: price,
      ...data,
    };

    fetch("http://localhost:5000/buy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Your Order Place Done!!!");
        }
      });

    // Reset form
    reset();
    // Modal Close Here
    setBookings(null);
  };

  return (
    <>
      <input type="checkbox" id="booking_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">{productName}</h3>
            <label htmlFor="booking_modal">
              <FaRegWindowClose className="cursor-pointer w-6 h-6" />
            </label>
          </div>
          <form
            onSubmit={handleSubmit(handleBooking)}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              disabled
              defaultValue={`$ ${price}`}
              className="input w-full input-bordered "
            />
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              {...register("buyerPhoneNumber")}
              required
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
              {...register("meetingLocation")}
              required
              className="input w-full input-bordered"
            />
            <input
              htmlFor="booking_modal"
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
