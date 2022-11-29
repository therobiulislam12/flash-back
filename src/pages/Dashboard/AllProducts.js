import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitles from "../../hooks/useTitles";

const AllProducts = () => {
  const [exitsItem, setExitsItems] = useState({});
  const { user } = useContext(AuthContext);
  useTitles('All Products')

  const {
    data: products = [],
    refetch,
    loading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `https://flashback-zeta.vercel.app/products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteProduct = (id) => {
    fetch(`https://flashback-zeta.vercel.app/product/${id}`, {
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

  const handleAdvertisement = (product) => {
    const newProduct = {
      productId: product._id,
      image: product.image,
      productName: product.productName,
      pickUpLocation: product.pickUpLocation,
      price: product.price,
      originalPrice: product.originalPrice,
      yearsOfUse: product.yearsOfUse,
      sellerName: product.sellerName,
      verified: product.verified,
      time: product.time,
    };

    axios(
      `https://flashback-zeta.vercel.app/advertisementItems?productId=${product._id}`
    ).then((data) => setExitsItems(data.data[0]));

    if (exitsItem) {
      if (exitsItem?.productId !== product._id) {
        fetch("https://flashback-zeta.vercel.app/advertiseItem", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newProduct),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("Advertisement success!!!");
            }
          });
      } else {
        toast.error("You already ads this items");
      }
    }
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
            <th>Price</th>
            <th>Action</th>
            <th>Ads</th>
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
                <td>$ {product?.price}</td>
                <td>
                  <button
                    className="btn btn-xs btn-error"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className={`btn btn-xs btn-success`}
                    onClick={() => handleAdvertisement(product)}
                  >
                    Ads
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
