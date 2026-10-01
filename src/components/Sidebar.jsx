import { Link } from "react-router-dom";

function Sidebar() {

  return (
    <aside className="sidebar">

      <h2 className="logo">
        🩺 MyHealth
      </h2>

      <div className="menu">

        <Link to="/dashboard">
          🏠 Dashboard
        </Link>

        <Link to="/medical-profile">
          👤 Medical Profile
        </Link>

        <Link to="/medicines">
          💊 Medicines
        </Link>

        <Link to="/allergies">
          ⚠️ Allergies
        </Link>

        <Link to="/surgeries">
          🏥 Surgeries
        </Link>

        <Link to="/reports">
          🧪 Reports
        </Link>

        <Link to="/timeline">
          📅 Timeline
        </Link>

        <Link to="/doctor-visit">
          🩺 Doctor Visit
        </Link>

      </div>

    </aside>
  );
}

export default Sidebar;