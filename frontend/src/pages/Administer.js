import { useState } from "react";

export default function Administer() {
  const [form, setForm] = useState({
    citizen_id: "",
    dose_number: "",
    center_id: "",
  });

  const [loading, setLoading] = useState(false);

  const submit = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/administer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      // ✅ Handle PDF response
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      // ✅ Download file
      const a = document.createElement("a");
      a.href = url;
      a.download = `certificate_${form.citizen_id}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      alert("✅ Dose Recorded & Certificate Generated");

      // Reset form
      setForm({
        citizen_id: "",
        dose_number: "",
        center_id: "",
      });

    } catch (err) {
      console.error("Error:", err);
      alert("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card" style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Administer Dose</h2>

      <input
        type="text"
        placeholder="Citizen ID"
        value={form.citizen_id}
        onChange={(e) =>
          setForm({ ...form, citizen_id: e.target.value })
        }
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <input
        type="text"
        placeholder="Dose Number"
        value={form.dose_number}
        onChange={(e) =>
          setForm({ ...form, dose_number: e.target.value })
        }
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <input
        type="text"
        placeholder="Center ID"
        value={form.center_id}
        onChange={(e) =>
          setForm({ ...form, center_id: e.target.value })
        }
        style={{ display: "block", marginBottom: "15px", width: "100%" }}
      />

      <button
        onClick={submit}
        disabled={loading}
        style={{
          width: "100%",
          padding: "10px",
          background: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {loading ? "Recording..." : "Record"}
      </button>
    </div>
  );
}