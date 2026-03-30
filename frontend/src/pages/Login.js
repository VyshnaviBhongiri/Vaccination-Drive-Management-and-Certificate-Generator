import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const text = await res.text();
      console.log("RAW:", text);

      const result = JSON.parse(text);

      if (res.status !== 200) {
        alert(result.message);
        return;
      }

      localStorage.setItem("token", result.token);
      alert("✅ Login successful");

      navigate("/register");

    } catch (err) {
      console.error(err);
      alert("❌ Server error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Login</h2>

        <input
          placeholder="Username"
          value={data.username}
          onChange={(e) =>
            setData({ ...data, username: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
        />

        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

// ✅ Styles (same as Register for consistency)
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start", // 👈 change this
    paddingTop: "80px",       // 👈 add this
    background: "#f5f6fa"
  },
  card: {
    width: "350px",
    padding: "40px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  }
};