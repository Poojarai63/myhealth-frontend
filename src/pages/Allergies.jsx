function Allergies() {
  return (
    <div className="allergies-page">

      {/* Header */}
      <div className="allergies-header">
        <div className="allergies-title">
          <div className="allergies-title-icon">⚠️</div>

          <div>
            <h1>Allergies</h1>
            <p>
              Keep track of your known allergies and reactions.
            </p>
          </div>
        </div>

        <button className="add-allergy-btn">
          <span>＋</span>
          Add Allergy
        </button>
      </div>

      {/* Info Box */}
      <div className="allergy-info-box">
        <div className="allergy-info-icon">💡</div>

        <div>
          <h3>Keep your allergy information updated</h3>
          <p>
            Record your known allergies so you can easily remember and
            review them during a doctor visit.
          </p>
        </div>
      </div>

      {/* Allergy Card */}
      <div className="allergies-card">

        <div className="allergies-card-header">
          <div>
            <h2>Known Allergies</h2>
            <p>
              Your saved allergy information will appear here.
            </p>
          </div>

          <div className="allergy-count">
            0 Allergies
          </div>
        </div>

        {/* Empty State */}
        <div className="allergy-empty-state">

          <div className="empty-allergy-icon">
            ⚠️
          </div>

          <h3>No allergies added yet</h3>

          <p>
            Add any known allergies, medicines, foods, or other substances
            that may cause a reaction.
          </p>

          <button className="empty-add-allergy-btn">
            <span>＋</span>
            Add Your First Allergy
          </button>

        </div>

      </div>

      {/* Note */}
      <div className="allergy-note">
        <span>🔒</span>

        <p>
          Keep your allergy information accurate and updated so it is
          easy to review when needed.
        </p>
      </div>

    </div>
  );
}

export default Allergies;