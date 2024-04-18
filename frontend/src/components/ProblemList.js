import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProblemForm from './ProblemForm.js';
import { deleteProblem } from '../actions/problemActions.js';
import '../App.css';

// Import icons for different platforms
import { SiLeetcode, SiCodechef, SiCodepen, SiHackerrank } from 'react-icons/si';

const ProblemList = () => {
  const dispatch = useDispatch();
  const problems = useSelector((state) => state.problems);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    platform: '',
    intuition: '',
    link: '',
  });

  const handleDelete = (id) => {
    dispatch(deleteProblem(id));
  };

  const handleEdit = (problem) => {
    setFormData({
      name: problem.name,
      platform: problem.platform,
      intuition: problem.intuition,
      link: problem.link,
    });
    setEditId(problem._id);
    setShowForm(true);
  };

  const handleLinkClick = (link) => {
    window.open(link.startsWith('http') ? link : `http://${link}`, '_blank');
  };

  const platformIcons = {
    leetcode: <SiLeetcode />,
    codechef: <SiCodechef />,
    codepen: <SiCodepen />,
    hackerrank: <SiHackerrank />,
  };

  return (
    <div className="problem-container">
      <ul className="problem-list">
        {problems && problems.length > 0 ? (
          problems.map((problem) => (
            <li key={problem._id} className="problem-item">
              <div className="problem-info">
                <h3>{problem.name}</h3>
                <p>
                  <strong>Intuition:</strong> {problem.intuition}
                </p>
                <p>
                  <strong>Link:</strong>{' '}
                  <div
                    className="platform-icon"
                    onClick={() => handleLinkClick(problem.link)}
                  >
                    {platformIcons[problem.platform.toLowerCase()]}
                  </div>
                </p>
              </div>
              <div className="button-group">
                <button
                  className="edit-button"
                  onClick={() => handleEdit(problem)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(problem._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No problems found.</p>
        )}
      </ul>
      {showForm && (
        <div className="modal-background">
          <div className="modal-content">
            <ProblemForm
              editId={editId}
              formData={formData}
              setFormData={setFormData}
              onClose={() => setShowForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemList;
