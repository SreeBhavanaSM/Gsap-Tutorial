import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import GsapFrom from './pages/GsapFrom'
import GsapTo from './pages/GsapTo';
import GsapFromTo from './pages/GsapFromTo';
import GsapTimeline from './pages/GsapTimeline';
import GsapTimeline2 from './pages/GsapTimeline2';
import GsapCustomEase from './pages/GsapCustomEase';
import GsapStagger from './pages/GsapStagger';
import GsapStagger2 from './pages/GsapStagger2';
import GsapScrollTrigger from './pages/GsapScrollTrigger';

function App() {
  return (
    <Router>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/">Home</Link>
              </li>
              <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/gsapto">GsapTo</Link>
              </li>
              <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/gsapfrom">GsapFrom</Link>
              </li>
              <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/gsapfromTo">GsapFromTo</Link>
              </li>
              <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/gsapTimeline">GsapTimeline</Link>
              </li>
              <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/gsapTimeline2">GsapTimeline2</Link>
              </li>
              <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/GsapCustomEase">GsapCustomEase</Link>
              </li>
              <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/GsapStagger">GsapStagger</Link>
              </li>
              <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/GsapStagger2">GsapStagger2</Link>
              </li>
              <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/GsapScrollTrigger">ScrollTrigger</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gsapto" element={<GsapTo />} />
        <Route path="/gsapfrom" element={<GsapFrom />} />
        <Route path="/gsapfromTo" element={<GsapFromTo />} />
        <Route path="/gsapTimeline" element={<GsapTimeline />} />
        <Route path="/gsapTimeline2" element={<GsapTimeline2 />} />
        <Route path="/GsapCustomEase" element={<GsapCustomEase />} />
        <Route path="/GsapStagger" element={<GsapStagger />} />
        <Route path="/GsapStagger2" element={<GsapStagger2 />} />
        <Route path="/GsapScrollTrigger" element={<GsapScrollTrigger />} />
      </Routes>
    </Router>
  );
}

export default App;
