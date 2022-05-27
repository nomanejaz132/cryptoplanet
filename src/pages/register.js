import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <p>Register Page</p>
      <button onClick={() => Navigate(-1)}>GO BACK</button>
    </div>
  );
};

export default Register;
