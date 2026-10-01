function Medicines() {
  return (
    <div className="medicines-page">

      {/* Header */}
      <div className="medicines-header">

        <div className="medicines-title">

          <div className="medicines-title-icon">
            💊
          </div>

          <div>
            <h1>Medicines</h1>

            <p>
              Keep track of your current and previous medicines.
            </p>
          </div>

        </div>

        <button className="add-medicine-btn">
          <span>＋</span>
          Add Medicine
        </button>

      </div>


      {/* Summary Cards */}
      <div className="medicine-summary">

        <div className="medicine-summary-card">

          <div className="summary-icon">
            💊
          </div>

          <div>
            <span>Total Medicines</span>
            <strong>0</strong>
          </div>

        </div>


        <div className="medicine-summary-card">

          <div className="summary-icon active-icon">
            ✓
          </div>

          <div>
            <span>Currently Taking</span>
            <strong>0</strong>
          </div>

        </div>


        <div className="medicine-summary-card">

          <div className="summary-icon previous-icon">
            📋
          </div>

          <div>
            <span>Previous Medicines</span>
            <strong>0</strong>
          </div>

        </div>

      </div>


      {/* Medicines Card */}
      <div className="medicines-card">

        <div className="medicines-card-header">

          <div>
            <h2>Your Medicines</h2>

            <p>
              Your saved medicines will appear here.
            </p>
          </div>

        </div>


        {/* Empty State */}
        <div className="medicine-empty-state">

          <div className="empty-medicine-icon">
            💊
          </div>

          <h3>No medicines added yet</h3>

          <p>
            Add your current or previous medicines to keep your
            medical history organized.
          </p>

          <button className="empty-add-medicine-btn">
            <span>＋</span>
            Add Your First Medicine
          </button>

        </div>

      </div>


      {/* Information Box */}
      <div className="medicine-info-box">

        <div className="medicine-info-icon">
          💡
        </div>

        <div>
          <h3>Keep your medicine information updated</h3>

          <p>
            Having an updated medicine list can help you quickly
            remember the medicines you are taking during a doctor visit.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Medicines;