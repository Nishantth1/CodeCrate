import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProblems } from './actions/problemActions.js';
import Header from './components/Header.js';
import ProblemList from './components/ProblemList.js';
import CodeEditor from './components/CodeEditor.js';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProblems());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <div className="container">
        <main className="main-content">
          <Routes>
            <Route exact path="/" element={<CodeEditor />} />
            <Route path="/problems" element={<ProblemList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
