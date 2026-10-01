function Reports() {
  return (
    <div className="reports-page">

      {/* Page Header */}
      <div className="reports-header">
        <div className="reports-title">
          <div className="reports-title-icon">
            🧪
          </div>

          <div>
            <h1>Medical Reports</h1>

            <p>
              Store and manage your medical reports in one secure place.
            </p>
          </div>
        </div>

        <button className="upload-report-btn">
          <span>＋</span>
          Upload Report
        </button>
      </div>


      {/* Reports Card */}
      <div className="reports-card">

        {/* Card Header */}
        <div className="reports-card-header">

          <div>
            <h2>Your Reports</h2>

            <p>
              Your uploaded medical documents will appear here.
            </p>
          </div>

          <div className="report-count">
            0 Reports
          </div>

        </div>


        {/* Empty State */}
        <div className="reports-empty-state">

          <div className="empty-report-icon">
            📄
          </div>

          <h3>No medical reports yet</h3>

          <p>
            Upload your medical reports, test results, prescriptions,
            or other important medical documents.
          </p>

          <button className="empty-upload-btn">
            <span>＋</span>
            Upload Your First Report
          </button>

        </div>

      </div>


      {/* Information Section */}
      <div className="report-info-box">

        <div className="report-info-icon">
          🔒
        </div>

        <div>
          <h3>Keep your reports organized</h3>

          <p>
            Store important medical documents in one place so you can
            easily find them when you need them.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Reports;