import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Category from "../components/Category";
import { firstLatterUpperCase } from "../utils/firstLatterUpperCase";



const ProductCategories = () => {
  const { categoryName } = useParams();

  const [products, setProducts] = useState([]);
  useEffect(() =>{
    fetch(`http://localhost:5000/products?category=${categoryName}`)
    .then(res => res.json())
    .then(data => setProducts(data))
  },[categoryName])

  const categoryUpdateName =
    firstLatterUpperCase(categoryName.split("-")[0]) +
    " " +
    firstLatterUpperCase(categoryName.split("-")[1]);

  return (
    <div className="py-12 lg:py-20 ">
      <h3 className="text-lg lg:text-2xl text-gray-700">
        Your Choices Category :{" "}
        <span className="font-bold text-2xl">{categoryUpdateName}</span>
      </h3>
      <h2 className="font-bold text-2xl lg:text-3xl  text-center my-6 lg:my-8">
        Selected Categories All Products{" "}
      </h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          products.map(selectedCategory => <Category key={selectedCategory._id} category={selectedCategory} showSelectedCategory/>)
        }
      </div>
    </div>
  );
};

export default ProductCategories;
