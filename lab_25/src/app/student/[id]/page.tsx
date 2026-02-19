"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function studentDetails() {
  const { id } = useParams();
  const [student, setstudent] = useState<Student | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchstudent() {
      const res = await fetch(
        `https://68cb91e6716562cf50740a49.mockapi.io/Student/${id}`,
      );
      const data = await res.json();
      setstudent(data);
    }

    fetchstudent();
  }, [id]);

  if (!student) return <h2>Loading...</h2>;
//   console.log(studentDetails.id);

  return (
    <div className="container mt-4">
      <h1>student Details</h1>
      <hr />
      <p>ID:      {student.id}</p>
      <p>Name:    {student.Name}</p>
      <p>Email:   {student.Email}</p>
      <img src={student.Image} height={"150px"} width={"150px"}/>
    </div>
  );
}
