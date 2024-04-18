import React from 'react';

const ProblemForm = ({ editId, formData, setFormData, onClose }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
  };

  return (
    <div className="form-container">
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <h2>Add Problem</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="platform"
          placeholder="Platform"
          value={formData.platform}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="intuition"
          placeholder="Intuition"
          value={formData.intuition}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="link"
          placeholder="Link"
          value={formData.link}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ProblemForm;
