import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    aadhaar: "",
    dob: "",
    center_id: "",
    date: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submit = async () => {
    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const text = await res.text();
      alert(text);
    } catch (err) {
      alert("Error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Register</h2>

        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="aadhaar" placeholder="Aadhaar" onChange={handleChange} />
        <input type="date" name="dob" onChange={handleChange} />
        <input name="center_id" placeholder="Center ID" onChange={handleChange} />
        <input type="date" name="date" onChange={handleChange} />

        <button onClick={submit}>Book Slot</button>
      </div>
    </div>
  );
}

// ✅ Styles
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
    padding: "25px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  }
};