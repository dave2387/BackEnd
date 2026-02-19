"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function FacultyDetails() {
  const { id } = useParams();
  const [faculty, setFaculty] = useState<Faculty | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchFaculty() {
      const res = await fetch(
        `https://68cb91e6716562cf50740a49.mockapi.io/Student/${id}`,
      );
      const data = await res.json();
      setFaculty(data);
    }

    fetchFaculty();
  }, [id]);

  if (!faculty) return <h2>Loading...</h2>;
  console.log(FacultyDetails.id);

  return (
    <div className="container mt-4">
      <h1>Faculty Details</h1>
      <hr />
      <p>ID:      {faculty.id}</p>
      <p>Name:    {faculty.Name}</p>
      <p>Email:   {faculty.Email}</p>
      <img src={faculty.Image} height={"150px"} width={"150px"}/>
    </div>
  );
}
