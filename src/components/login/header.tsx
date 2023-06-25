import {useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Sistema de Provas Online</h1>
          <div>
            <span className="text-gray-600 mr-4">Bem-vindo, aluno!</span>
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
             type="submit"
             onClick={handleLogin}>
              Sair
            </button>
          </div>
        </nav>
      </div>
    </header>
  );

}