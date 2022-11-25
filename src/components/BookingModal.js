import { useContext } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthProvider";

const BookingModal = ({ category }) => {
  const { user } = useContext(AuthContext);

  const { name, price } = category;

  const handleBooking = (e) => {
    e.preventDefault();

    console.log(e);
  };

  return (
    <>
      <input type="checkbox" id="booking_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">{name}</h3>
            <label htmlFor="booking_modal">
              <FaRegWindowClose className="cursor-pointer w-6 h-6" />
            </label>
          </div>
          <form
            onSubmit={handleBooking}
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
              required
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
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
