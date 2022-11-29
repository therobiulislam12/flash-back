import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AllSeller = () => {
  const {
    data: users = [],
    refetch,
    loading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://flashback-zeta.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteUser = (id) => {
    fetch(`https://flashback-zeta.vercel.app/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("User delete successfully");
          refetch();
        }
      });
  };

  const handleVerifyUser = (email) =>{
    fetch(`https://flashback-zeta.vercel.app/userUpdate?email=${email}`, {
      method: "PUT"
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        toast.success('User verified done!!!');
        refetch()
      }
    })
  }

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
            <th>Email</th>
            <th>Verify Seller</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users
              .filter((user) => user.role === "seller")
              .map((user, index) => (
                <tr className="hover" key={index}>
                  <th>{index + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    <button
                      className={`btn btn-xs btn-success ${user?.verified && 'btn-disabled' }`}
                      onClick={() => handleVerifyUser(user?.email)}
                    >
                      Verify
                    </button>
                  </td>
                  <td>
                    <div
                      className={`badge ${
                        user?.role === "user"
                          ? "badge-secondary"
                          : "badge-accent"
                      }`}
                    >
                      {user?.role}
                    </div>
                  </td>
                  <td>
                    <button
                      className="btn btn-xs"
                      onClick={() => handleDeleteUser(user._id)}
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

export default AllSeller;
