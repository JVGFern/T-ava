import { useState, ChangeEvent } from "react";

export default function UsernameInput() {
  const [username, setUsername] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div className="mb-4">
      <label htmlFor="username" className="text-gray-700 block mb-2">
        Usuário:
      </label>
      <input
        id="username"
        name="username"
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Usuário"
        className="w-full p-2 text-gray-800 border border-gray-300 rounded outline-none text-sm focus:border-green-500"
      />
    </div>
  );
}
