import axios from "axios";

export default function ReportDropdown({ setReport }) {
  const fetchReport = async (type) => {
    const res = await axios.get(`http://localhost:5000/api/reports/${type}`);
    setReport(res.data);
  };

  return (
    <select onChange={(e) => fetchReport(e.target.value)}>
      <option value="">Select View</option>
      <option value="weekly">Weekly</option>
      <option value="monthly">Monthly</option>
      <option value="yearly">Yearly</option>
    </select>
  );
}
