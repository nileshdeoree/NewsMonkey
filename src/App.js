
import './App.css';
import {
  BrowserRouter as Router,
  Routes, //Replace Switch by Routes
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

import React from 'react'
import { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

const App = () => {
  let pageSize = 8;
  let api = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);
  
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color="red"
          progress={progress}

        />
        <Routes>
          <Route path="/" exact element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" api={api} />} />
          <Route path="/business" exact element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" api={api} />} />
          <Route path="/entertainment" exact element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" api={api} />} />
          <Route path="/general" exact element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" api={api} />} />
          <Route path="/health" exact element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health" api={api} />} />
          <Route path="/science" exact element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" api={api} />} />
          <Route path="/sports" exact element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" api={api} />} />
          <Route path="/technology" exact element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" api={api} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;



