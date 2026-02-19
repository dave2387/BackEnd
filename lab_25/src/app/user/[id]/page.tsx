"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function userDetails() {
  const { id } = useParams();
  const [user, setuser] = useState<User | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchuser() {
      const res = await fetch(
        `https://68cb91e6716562cf50740a49.mockapi.io/Student/${id}`,
      );
      const data = await res.json();
      setuser(data);
    }

    fetchuser();
  }, [id]);

  if (!user) return <h2>Loading...</h2>;
  console.log(userDetails.id);

  return (
    <div className="container mt-4">
      <h1>user Details</h1>
      <hr />
      <p>ID:      {user.id}</p>
      <p>Name:    {user.Name}</p>
      <p>Email:   {user.Email}</p>
      <img src={user.Image} height={"150px"} width={"150px"}/>
    </div>
  );
}
