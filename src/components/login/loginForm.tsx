import { useState } from 'react';
import { Link,useNavigate } from "react-router-dom";
import UsernameInput from "./usernameInput";
import PasswordInput from "./passwordInput";
import { UserData } from "../../data/User";

export default function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  localStorage.removeItem("userdata");

  const handleLogin = () => {
    if(username === "" || password === ""){
      return;
    }
    const userData: UserData = {
      username: username,
      password: password,
      userEmail: username,
      token: `${username} : ${password}` 
    };
    const userDataJson = JSON.stringify(userData);
    localStorage.setItem("userdata", userDataJson);
    navigate('/portal/home');
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg border border-gray-300 shadow-md px-6 py-8">
    <h2 className="text-2xl font-semibold text-center mb-6">Acesse sua conta</h2>
    <UsernameInput username={username} setUsername={setUsername}/>
    <PasswordInput password={password} setPassword={setPassword}/>
    <div className="flex items-center mt-6">
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full text-lg font-semibold w-full"
        onClick={handleLogin}
      >
        Entrar
      </button>
    </div>
    <div className="mt-4 text-center">
      <p className="text-gray-600">
        Precisa se registrar?{" "}
        <Link  to="/signup" className="text-green-500 hover:underline">
          Cadastre-se gratuitamente
        </Link>
      </p>
    </div>
  </div>
    );
}
