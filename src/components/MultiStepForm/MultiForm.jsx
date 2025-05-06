import React, { useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
  };

  const handleNext = () => {
    const fields = ["name", "email", "dob", "password"];
    const current = fields[step - 1];
    if (formData[current]) {
      setStep((prev) => prev + 1);
    } else {
      alert("This field is required to proceed.");
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    handleSubmitApp(formData);
    setSubmitted(true);
  };

  const handleSubmitApp = (values) => {
    console.log("Submitted values:", values);
    // Replace with real submit logic
  };

  if (submitted) {
    return (
      <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
        <h2>🎉 Success!</h2>
        <p>Your information has been submitted.</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 20, border: '1px solid #ccc', borderRadius: 8, fontFamily: 'sans-serif' }}>
      <h3>Step {step} of 4</h3>

      {step === 1 && (
        <div>
          <label>
            Name:
            <input
              type="text"
              value={formData.name}
              onChange={handleChange("name")}
              style={{ display: 'block', width: '100%', padding: 8, margin: '8px 0' }}
            />
          </label>
        </div>
      )}

      {step === 2 && (
        <div>
          <label>
            Email:
            <input
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              style={{ display: 'block', width: '100%', padding: 8, margin: '8px 0' }}
            />
          </label>
        </div>
      )}

      {step === 3 && (
        <div>
          <label>
            Date of Birth:
            <input
              type="date"
              value={formData.dob}
              onChange={handleChange("dob")}
              style={{ display: 'block', width: '100%', padding: 8, margin: '8px 0' }}
            />
          </label>
        </div>
      )}

      {step === 4 && (
        <div>
          <label>
            Password:
            <input
              type="password"
              value={formData.password}
              onChange={handleChange("password")}
              style={{ display: 'block', width: '100%', padding: 8, margin: '8px 0' }}
            />
          </label>
        </div>
      )}

      <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
        {step > 1 ? (
          <button onClick={handleBack} style={{ padding: '8px 16px' }}>
            ← Back
          </button>
        ) : (
          <div />
        )}

        {step < 4 && (
          <button onClick={handleNext} style={{ padding: '8px 16px' }}>
            Next →
          </button>
        )}

        {step === 4 && (
          <button onClick={handleSubmit} style={{ padding: '8px 16px' }}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
