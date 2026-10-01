function Timeline() {
  return (
    <div className="timeline-page">

      {/* Header */}
      <div className="timeline-header">
        <div className="timeline-title">
          <div className="timeline-title-icon">📅</div>

          <div>
            <h1>Medical Timeline</h1>
            <p>
              View your medical history in chronological order.
            </p>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="timeline-info-box">
        <div className="timeline-info-icon">💡</div>

        <div>
          <h3>Keep track of your medical history</h3>
          <p>
            Your important medical events, medicines, surgeries,
            hospitalizations, and reports can be viewed here in one place.
          </p>
        </div>
      </div>

      {/* Timeline Card */}
      <div className="timeline-card">

        <div className="timeline-card-header">
          <div>
            <h2>Medical History</h2>
            <p>
              Your medical events will appear here based on their dates.
            </p>
          </div>

          <div className="timeline-count">
            0 Events
          </div>
        </div>

        {/* Empty State */}
        <div className="timeline-empty-state">

          <div className="empty-timeline-icon">
            📅
          </div>

          <h3>No medical history yet</h3>

          <p>
            Add medicines, surgeries, hospital admissions, reports,
            and other medical records to build your medical timeline.
          </p>

          <button className="timeline-add-btn">
            <span>＋</span>
            Add Medical Record
          </button>

        </div>

      </div>

      {/* Privacy Note */}
      <div className="timeline-private-note">
        <span>🔒</span>

        <p>
          Your timeline is designed to help you keep your personal
          medical history organized and easy to review.
        </p>
      </div>

    </div>
  );
}

export default Timeline;