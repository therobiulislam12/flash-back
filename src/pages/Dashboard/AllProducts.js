import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const AllProducts = () => {
  const { user } = useContext(AuthContext);
  const {
    data: products = [],
    refetch,
    loading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteProduct = (id) => {
    fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product delete successfully");
          refetch();
        }
      });
  };

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
            <th>Name</th>
            <th>Category</th>
            <th>Location</th>
            <th>Seller name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            products.map((product, index) => (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{product?.productName}</td>
                <td>
                  <div className={`badge badge-accent`}>
                    {product?.category}
                  </div>
                </td>
                <td>{product?.pickUpLocation}</td>
                <td>{product?.sellerName}</td>
                <td>$ {product?.price}</td>
                <td>
                  <button
                    className="btn btn-xs"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default AllProducts;
