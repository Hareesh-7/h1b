import React, { useState } from 'react';

const Form1 = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <label className="block mb-4">
          Name:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mb-4">
          Date of Birth:
          <input
            type="date"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mb-4">
          Mobile Number:
          <input
            type="text"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mb-4">
          Email:
          <input
            type="text"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mb-4">
          Password:
          <input
            type="text"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mb-4">
          Confirm Password:
          <input
            type="text"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            className="form-input mt-1 block w-full"
          />
        </label>
        <button type="submit" className="btn mt-4">Submit</button>
      </form>
    </div>
  );
};

export default Form1;
