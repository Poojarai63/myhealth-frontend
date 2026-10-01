import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HealthCard from "../components/HealthCard";

function Dashboard() {
  return (
    <div className="app-layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">

        {/* Navbar */}
        <Navbar />

        {/* Dashboard */}
        <div className="dashboard-page">

          {/* Welcome Section */}
          <div className="dashboard-welcome">

            <div>
              <p className="welcome-label">
                MYHEALTH DASHBOARD
              </p>

              <h1>
                Welcome to MyHealth 👋
              </h1>

              <p className="welcome-text">
                Keep your personal medical history organized and
                easily accessible in one place.
              </p>
            </div>

            <div className="welcome-icon">
              ❤️
            </div>

          </div>


          {/* Overview */}
          <div className="dashboard-section-title">
            <div>
              <h2>Health Overview</h2>
              <p>
                A quick overview of your medical information.
              </p>
            </div>
          </div>


          {/* Overview Cards */}
          <div className="overview-grid">

            <div className="overview-card">
              <div className="overview-icon medicine-overview">
                💊
              </div>

              <div>
                <span>Medicines</span>
                <strong>0</strong>
                <small>Current medicines</small>
              </div>
            </div>


            <div className="overview-card">
              <div className="overview-icon allergy-overview">
                ⚠️
              </div>

              <div>
                <span>Allergies</span>
                <strong>0</strong>
                <small>Known allergies</small>
              </div>
            </div>


            <div className="overview-card">
              <div className="overview-icon surgery-overview">
                🏥
              </div>

              <div>
                <span>Surgeries</span>
                <strong>0</strong>
                <small>Previous records</small>
              </div>
            </div>


            <div className="overview-card">
              <div className="overview-icon report-overview">
                🧪
              </div>

              <div>
                <span>Reports</span>
                <strong>0</strong>
                <small>Medical reports</small>
              </div>
            </div>

          </div>


          {/* Quick Access */}
          <div className="dashboard-section-title quick-section-title">
            <div>
              <h2>Quick Access</h2>
              <p>
                Manage your medical information from one place.
              </p>
            </div>
          </div>


          {/* Health Cards */}
          <div className="health-grid">

            <HealthCard
              icon="🩺"
              title="Doctor Visit"
              description="Quickly check the information your doctor may ask."
              link="/doctor-visit"
            />

            <HealthCard
              icon="💊"
              title="Medicines"
              description="View and manage your current and previous medicines."
              link="/medicines"
            />

            <HealthCard
              icon="🧪"
              title="Medical Reports"
              description="Store and access your important medical reports."
              link="/reports"
            />

            <HealthCard
              icon="⚠️"
              title="Allergies"
              description="Keep your known allergy information organized."
              link="/allergies"
            />

            <HealthCard
              icon="🏥"
              title="Surgeries & Admissions"
              description="Keep track of previous surgeries and hospitalizations."
              link="/surgeries"
            />

            <HealthCard
              icon="📅"
              title="Medical Timeline"
              description="View your medical history in chronological order."
              link="/timeline"
            />

          </div>


          {/* Bottom Section */}
          <div className="dashboard-bottom-grid">

            {/* Doctor Visit */}
            <div className="dashboard-feature-card">

              <div className="feature-icon">
                🩺
              </div>

              <div className="feature-content">
                <h3>Preparing for a Doctor Visit?</h3>

                <p>
                  Quickly review your medicines, allergies,
                  surgeries and other important medical information.
                </p>

                <a href="/doctor-visit">
                  Open Doctor Visit →
                </a>
              </div>

            </div>


            {/* Privacy */}
            <div className="dashboard-feature-card privacy-dashboard-card">

              <div className="feature-icon privacy-dashboard-icon">
                🔒
              </div>

              <div className="feature-content">
                <h3>Your Information, Your Control</h3>

                <p>
                  MyHealth is designed to help you organize and
                  remember your personal medical history.
                </p>

                <span className="privacy-status">
                  Private Medical Information
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;