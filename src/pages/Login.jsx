import { useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:3000/users?email=${username}&password=${password}`
      );
      const users = await res.json();

      if (users.length > 0) {
        localStorage.setItem("user", JSON.stringify(users[0]));

        // 🥳 CONFETTI BURST!
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 },
        });

        navigate("/movies");
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      setError("Login failed");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200">
      <form
        onSubmit={handleLogin}
        className="card bg-base-100 shadow-xl p-8 w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <label className="form-control mb-2">
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label className="form-control mb-4">
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        {error && <p className="text-error mb-2">{error}</p>}

        <button type="submit" className="btn btn-primary w-full">
          Login
        </button>
      </form>
    </section>
  );
}
