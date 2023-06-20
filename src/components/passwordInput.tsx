import { useState, ChangeEvent } from "react";

export default function PasswordInput() {
  const [password, setPassword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <label>Senha:</label>
      <input
        name="password"
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Senha"
        className={
          "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
        }
      />
    </div>
  );
}
