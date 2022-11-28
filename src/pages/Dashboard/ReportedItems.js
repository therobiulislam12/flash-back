import axios from "axios";
import React, { useEffect, useState } from "react";

const ReportedItems = () => {
  const [reportedItems, setReportedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("http://localhost:5000/reportedItems").then((reportedItems) => {
      setReportedItems(reportedItems.data);
      setLoading(false);
    });
  }, []);

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
            <th>Seller Name</th>
            <th>Posted Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reportedItems.length > 0 &&
            reportedItems.map((item, index) => (
              <tr className="hover" key={index}>
                <td>{index + 1}</td>
                <td>{item?.productName}</td>
                <td>{item?.sellerName}</td>
                <td>{item?.postedTime}</td>
                <td>
                  <button className="btn btn-xs btn-error">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default ReportedItems;
