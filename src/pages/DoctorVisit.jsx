function DoctorVisit() {
  return (
    <div className="doctor-visit-page">

      {/* Header */}
      <div className="doctor-visit-header">

        <div className="doctor-title">

          <div className="doctor-title-icon">
            🩺
          </div>

          <div>
            <h1>Doctor Visit</h1>

            <p>
              Quickly find the medical information your doctor may ask.
            </p>
          </div>

        </div>

      </div>


      {/* Information Banner */}
      <div className="doctor-info-box">

        <div className="doctor-info-icon">
          💡
        </div>

        <div>
          <h3>Be prepared for your doctor visit</h3>

          <p>
            Review your medical history before your appointment so
            you can easily remember important details.
          </p>
        </div>

      </div>


      {/* Questions Card */}
      <div className="doctor-questions-card">

        <div className="doctor-card-header">

          <div>
            <h2>Common Questions</h2>

            <p>
              These are some common questions your doctor may ask.
            </p>
          </div>

          <div className="question-count">
            5 Questions
          </div>

        </div>


        {/* Question 1 */}
        <div className="doctor-question">

          <div className="question-number">
            01
          </div>

          <div className="question-content">
            <h3>
              What medical conditions do you have?
            </h3>

            <p>
              Add any important or ongoing medical conditions.
            </p>
          </div>

          <button className="question-action">
            View
          </button>

        </div>


        {/* Question 2 */}
        <div className="doctor-question">

          <div className="question-number">
            02
          </div>

          <div className="question-content">
            <h3>
              Have you had any surgeries?
            </h3>

            <p>
              Keep track of your previous surgeries.
            </p>
          </div>

          <button className="question-action">
            View
          </button>

        </div>


        {/* Question 3 */}
        <div className="doctor-question">

          <div className="question-number">
            03
          </div>

          <div className="question-content">
            <h3>
              Have you ever been hospitalized?
            </h3>

            <p>
              Remember previous hospital admissions and their details.
            </p>
          </div>

          <button className="question-action">
            View
          </button>

        </div>


        {/* Question 4 */}
        <div className="doctor-question">

          <div className="question-number">
            04
          </div>

          <div className="question-content">
            <h3>
              What medicines are you currently taking?
            </h3>

            <p>
              Check your current and previous medicines.
            </p>
          </div>

          <button className="question-action">
            View
          </button>

        </div>


        {/* Question 5 */}
        <div className="doctor-question">

          <div className="question-number">
            05
          </div>

          <div className="question-content">
            <h3>
              Do you have any allergies?
            </h3>

            <p>
              Quickly check your known allergies.
            </p>
          </div>

          <button className="question-action">
            View
          </button>

        </div>

      </div>


      {/* Bottom Note */}
      <div className="doctor-private-note">

        <span>🔒</span>

        <p>
          This information is for your personal medical reference.
          Keep your health information updated and accurate.
        </p>

      </div>

    </div>
  );
}

export default DoctorVisit;