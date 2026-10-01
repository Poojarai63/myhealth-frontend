import { Link } from "react-router-dom";

function HealthCard({ icon, title, description, link }) {

  return (
    <div className="health-card">

      <div className="card-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>
        {description}
      </p>

      <Link to={link}>
        View →
      </Link>

    </div>
  );
}

export default HealthCard;