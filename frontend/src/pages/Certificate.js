import { useState } from "react";

export default function Certificate() {
  const [id, setId] = useState("");
  const [result, setResult] = useState(null);

  const verify = async () => {
    try {
      const res = await fetch(`http://10.250.12.50:5000/verify/${id}`);
      const data = await res.json();

      setResult({
        status: "success",
        message: data.message,
        certId: id
      });

    } catch (err) {
      setResult({
        status: "error",
        message: "Invalid Certificate"
      });
    }
  };

  return (
    <div className="card fade-in">
      <h2>🔍 Verify Certificate</h2>

      <input
        placeholder="Enter Certificate ID"
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={verify}>Verify</button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          {result.status === "success" ? (
            <div className="success">
              ✅ {result.message}
              <p>Certificate ID: {result.certId}</p>
            </div>
          ) : (
            <div className="error">
              ❌ {result.message}
            </div>
          )}
        </div>
      )}
    </div>
  );
}