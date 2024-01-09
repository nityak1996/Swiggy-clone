import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count,] = useState(0);
  const [count2] = useState(2)

  useEffect(()=>{},[])
  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Lucknow</h3>
      <h4>Contact: @nityak1996</h4>
    </div>
  );
};

export default User;
