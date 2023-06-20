import { useState, ChangeEvent } from "react";

export default function UsernameInput() {
  const [username, setUsername] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <label className="text-left">Usuário:</label>
      <input
        name="username"
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Usuário"
        className={
          "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
        }
      />
    </div>
  );
}
