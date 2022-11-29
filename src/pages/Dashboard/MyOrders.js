import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitles from "../../hooks/useTitles";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const {
    data: orders = [],
    refetch,
    loading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        `https://flashback-zeta.vercel.app/orders?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteOrder = (id) => {
    fetch(`https://flashback-zeta.vercel.app/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Order delete successfully");
          refetch();
        }
      });
  };

  useTitles('My Orders')

  if (loading) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl">Loading....</h1>
      </div>
    );
  }
  return (
    <section className="px-12 py-8 ">
      <table className="table w-full">
        <thead>
          <tr>
            <th>SL</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Location</th>
            <th>Seller Name</th>
            <th>Seller Email</th>
            <th>Action</th>
            <th>Pay Now</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 &&
            orders.map((order, index) => (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{order?.productName}</td>
                <td>$ {order?.productPrice}</td>
                <td>{order?.meetingLocation}</td>
                <td>{order?.sellerName}</td>
                <td>{order?.sellerEmail}</td>
                <td>
                  <button
                    className="btn btn-xs"
                    onClick={() => handleDeleteOrder(order._id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`/dashboard/payment/${order._id}`}>
                    <button className="btn btn-xs btn-success">Pay</button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default MyOrders;
