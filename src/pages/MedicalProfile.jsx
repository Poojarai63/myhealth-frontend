import { useState } from "react";

function MedicalProfile() {
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    bloodGroup: "",
    gender: "",
    emergencyContact: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Medical Profile:", formData);

    alert("Medical profile saved successfully!");
  };

  return (
    <div className="medical-profile-page">

      {/* Header */}
      <div className="medical-profile-header">
        <div>
          <div className="profile-title-row">
            <div className="profile-title-icon">
              ❤️
            </div>

            <div>
              <h1>Medical Profile</h1>

              <p>
                Your basic health information in one secure place.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Main Card */}
      <div className="medical-profile-card">

        {/* Card Header */}
        <div className="medical-card-header">

          <div>
            <h2>Personal Health Information</h2>

            <p>
              Add your basic information to keep your medical profile
              up to date.
            </p>
          </div>

          <div className="medical-card-icon">
            🩺
          </div>

        </div>


        {/* Divider */}
        <div className="profile-divider"></div>


        {/* Form */}
        <form onSubmit={handleSubmit}>

          <div className="profile-form-grid">

            {/* Date of Birth */}
            <div className="profile-field">

              <label htmlFor="dateOfBirth">
                Date of Birth
              </label>

              <div className="input-wrapper">
                <span className="field-icon">
                  📅
                </span>

                <input
                  id="dateOfBirth"
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>

            </div>


            {/* Blood Group */}
            <div className="profile-field">

              <label htmlFor="bloodGroup">
                Blood Group
              </label>

              <div className="input-wrapper">
                <span className="field-icon">
                  🩸
                </span>

                <select
                  id="bloodGroup"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                >
                  <option value="">
                    Select blood group
                  </option>

                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>

            </div>


            {/* Gender */}
            <div className="profile-field">

              <label htmlFor="gender">
                Gender
              </label>

              <div className="input-wrapper">
                <span className="field-icon">
                  👤
                </span>

                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">
                    Select gender
                  </option>

                  <option value="female">
                    Female
                  </option>

                  <option value="male">
                    Male
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

            </div>


            {/* Emergency Contact */}
            <div className="profile-field">

              <label htmlFor="emergencyContact">
                Emergency Contact
              </label>

              <div className="input-wrapper">
                <span className="field-icon">
                  📞
                </span>

                <input
                  id="emergencyContact"
                  type="tel"
                  name="emergencyContact"
                  placeholder="Enter contact number"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                />
              </div>

            </div>

          </div>


          {/* Emergency Information */}
          <div className="profile-info-box">

            <div className="info-icon">
              🛡️
            </div>

            <div>
              <h3>Emergency Information</h3>

              <p>
                Keep your emergency contact information updated so
                it is available when you need it.
              </p>
            </div>

          </div>


          {/* Bottom Section */}
          <div className="profile-form-footer">

            <p>
              🔒 Your information is stored securely.
            </p>

            <button
              type="submit"
              className="save-profile-button"
            >
              <span>✓</span>
              Save Profile
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default MedicalProfile;