import React from 'react';
import LoginForm from "../components/loginForm"

export default function Login() {
  return (
    <figure className="h-screen flex bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
        <blockquote className="text-2xl font-medium text-center">
          <p className="text-lg font-semibold">Bem-vindo ao Meu App</p>
        </blockquote>

        <div className="text-primary m-6">
          <div className="flex items-center mt-3 justify-center">
            <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
              Acesse sua conta
            </h1>
          </div>
          <LoginForm />
          <div className="flex items-center mt-3 justify-center">
            <button className={"justify-center text-blue-500 hover:underline"}>
              Precisa se registrar? Cadastre-se gratuitamente
            </button>
          </div>
        </div>
      </div>
    </figure>
  );
}
