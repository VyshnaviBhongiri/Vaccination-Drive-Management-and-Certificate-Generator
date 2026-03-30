import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://10.250.12.50:5000/dashboard")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
  <h2 style={{ textAlign: "center" }}>📊 Dashboard</h2>

  <div className="dashboard-cards">
    <div className="stat-card">
      <h3>Total Centers</h3>
      <p>{data.length}</p>
    </div>

    <div className="stat-card">
      <h3>Total Doses</h3>
      <p>{data.reduce((sum, d) => sum + (d.count || d.total), 0)}</p>
    </div>
  </div>

  <table className="table">
    <thead>
      <tr>
        <th>Center</th>
        <th>Date</th>
        <th>Doses</th>
      </tr>
    </thead>

    <tbody>
      {data.map((d, i) => (
        <tr key={i}>
          <td>{d.center_id}</td>
          <td>{d.date || "-"}</td>
          <td>{d.count || d.total}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
}