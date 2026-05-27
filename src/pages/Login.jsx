import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email);

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 w-full max-w-md"
      >
        <h1 className="text-4xl text-white font-bold mb-3">Welcome Back</h1>

        <p className="text-zinc-400 mb-8">Login to BistroNova dashboard</p>

        <div className="mb-5">
          <label className="text-zinc-400 text-sm">Email</label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white"
            placeholder="admin@bistronova.com"
          />
        </div>

        <div className="mb-8">
          <label className="text-zinc-400 text-sm">Password</label>

          <input
            type="password"
            required
            className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white"
            placeholder="••••••••"
          />
        </div>

        <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold">
          Login
        </button>
      </form>
    </div>
  );
}
