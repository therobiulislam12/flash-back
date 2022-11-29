import toast from "react-hot-toast";

export const createAUserAndSaveDb = (userName, userEmail) => {
  const userData = {
    name: userName,
    email: userEmail,
    role: "user",
    verified: false,
  };
  fetch("https://flashback-zeta.vercel.app/user", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.acknowledged) {
        toast.success("User Save the DB!!!");
      }
    });
};
