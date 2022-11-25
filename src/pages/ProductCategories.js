import React from "react";
import { useParams } from "react-router-dom";
import Category from "../components/Category";
import { firstLatterUpperCase } from "../utils/firstLatterUpperCase";

const selectedCategoriesItems = [
  {
    _id: 1,
    name: 'Canon 750D DSLR Camera',
    pickUpLocation: "Dhaka",
    price: 150,
    originalPrice: 750,
    yearsOfUse: 1,
    postedTime: "Nov 24, 2022",
    sellerName: "Robiul Islam",
    verified: false,
    image: 'https://www.cameralabs.com/wp-content/uploads/2019/08/canon-eos-90d-hero-1.jpg'
  },
  {
    _id: 2,
    name: 'Canon 750D DSLR Camera',
    pickUpLocation: "Dhaka",
    price: 150,
    originalPrice: 750,
    yearsOfUse: 1,
    postedTime: "Nov 24, 2022",
    sellerName: "Robiul Islam",
    verified: true,
    image: 'https://www.cameralabs.com/wp-content/uploads/2019/08/canon-eos-90d-hero-1.jpg'
  },
  {
    _id: 3,
    name: 'Canon 750D DSLR Camera',
    pickUpLocation: "Dhaka",
    price: 150,
    originalPrice: 750,
    yearsOfUse: 1,
    postedTime: "Nov 24, 2022",
    sellerName: "Robiul Islam",
    verified: false,
    image: 'https://www.cameralabs.com/wp-content/uploads/2019/08/canon-eos-90d-hero-1.jpg'
  },
  {
    _id: 4,
    name: 'Canon 750D DSLR Camera',
    pickUpLocation: "Dhaka",
    price: 250,
    originalPrice: 550,
    yearsOfUse: 3,
    postedTime: "Nov 24, 2022",
    sellerName: "Robiul Islam",
    verified: true,
    image: 'https://www.cameralabs.com/wp-content/uploads/2019/08/canon-eos-90d-hero-1.jpg'
  },
]

const ProductCategories = () => {
  const { categoryName } = useParams();

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
          selectedCategoriesItems.map(selectedCategory => <Category key={selectedCategory._id} category={selectedCategory} showSelectedCategory/>)
        }
      </div>
    </div>
  );
};

export default ProductCategories;
