import React from 'react';
import LoginForm from "../components/login/loginForm"

export default function Login() {
  return (
    <div className="h-screen flex bg-gray-100">
    <div className="w-full max-w-md m-auto">
      <LoginForm />
    </div>
  </div>
  );
}
