import { useState, ChangeEvent } from "react";

export default function PasswordInput() {
  const [password, setPassword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="mb-6">
    <label htmlFor="password" className="text-gray-700 block mb-2">
      Senha:
    </label>
    <input
      id="password"
      name="password"
      type="password"
      value={password}
      onChange={handleChange}
      placeholder="Senha"
      className="w-full p-2 text-gray-800 border border-gray-300 rounded outline-none text-sm focus:border-green-500"
    />
  </div>
  );
}
