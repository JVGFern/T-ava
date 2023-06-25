import React from "react";
import { Link } from "react-router-dom";
import UsernameInput from "./usernameInput";
import PasswordInput from "./passwordInput";

export default function SignupForm() {
  return (
    <form className="max-w-md mx-auto bg-white rounded-lg border border-gray-300 shadow-md px-6 py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Crie sua conta</h2>
      <UsernameInput />
      <PasswordInput />
      <div className="flex items-center mt-6">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full text-lg font-semibold w-full"
        >
          Cadastrar
        </button>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-600">
          Já tem uma conta?{" "}
          <Link to="/login" className="text-green-500 hover:underline">
            Faça login
          </Link>
        </p>
      </div>
    </form>
  );
}
