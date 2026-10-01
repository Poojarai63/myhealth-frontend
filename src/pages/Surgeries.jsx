function Surgeries() {
  return (
    <div className="surgeries-page">

      {/* Header */}
      <div className="surgeries-header">
        <div className="surgeries-title">
          <div className="surgeries-title-icon">🏥</div>

          <div>
            <h1>Surgeries & Admissions</h1>
            <p>
              Keep track of your previous surgeries and hospital admissions.
            </p>
          </div>
        </div>

        <button className="add-surgery-btn">
          <span>＋</span>
          Add Surgery
        </button>
      </div>

      {/* Info Box */}
      <div className="surgery-info-box">
        <div className="surgery-info-icon">💡</div>

        <div>
          <h3>Keep your surgery history updated</h3>
          <p>
            Save important details about previous surgeries and hospital
            admissions so you can easily remember them during a doctor visit.
          </p>
        </div>
      </div>

      {/* Surgery Card */}
      <div className="surgeries-card">

        <div className="surgeries-card-header">
          <div>
            <h2>Previous Surgeries</h2>
            <p>
              Your saved surgeries and hospital admissions will appear here.
            </p>
          </div>

          <div className="surgery-count">
            0 Records
          </div>
        </div>

        {/* Empty State */}
        <div className="surgery-empty-state">

          <div className="empty-surgery-icon">
            🏥
          </div>

          <h3>No surgeries added yet</h3>

          <p>
            Add details about your previous surgeries or hospital admissions
            to keep your medical history organized.
          </p>

          <button className="empty-add-surgery-btn">
            <span>＋</span>
            Add Your First Surgery
          </button>

        </div>

      </div>

      {/* Note */}
      <div className="surgery-note">
        <span>🔒</span>

        <p>
          Keep your surgery and hospital admission information updated for
          easy reference during future doctor visits.
        </p>
      </div>

    </div>
  );
}

export default Surgeries;