import React from "react";
import SignupForm from "../components/signupForm";

export default function Signup() {
  return (
    <div className="h-screen flex bg-gray-100">
      <div className="w-full max-w-md m-auto">
          <SignupForm />
      </div>
    </div>
  );
}

