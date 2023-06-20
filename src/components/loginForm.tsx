import React from 'react';
import UsernameInput from "./usernameInput";
import PasswordInput from "./passwordInput";

export default function LoginForm() {
  return (
      <form>
        <UsernameInput />
        <PasswordInput />
        <div className="flex items-center mt-3 justify-center">
          <button
            className={
              "bg-green-500 hover:bg-green-400 py-2 px-4 text-md text-white rounded border border-green-600 focus:outline-none focus:border-black"
            }
            value="Login"
          >
            Entrar
          </button>
        </div>
      </form>
    );
}
