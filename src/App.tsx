import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import { Layout } from "./screens/Layout";
import { Home } from "./screens/Home";
import { NoPage } from "./screens/NoPage";
import { WorkExperience } from "./screens/WorkExperience";
import { WorkExperienceDetail } from "./screens/WorkExperienceDetail";
import { Contact } from "./screens/Contact";


export default function App() {
  return (
    <>
      <div>
        <Helmet>
          <title>Emma Sargeant | Developer</title>
        </Helmet>

        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="portfolio" element={<WorkExperience />} />
              <Route path="contact" element={<Contact />} />

              <Route path="portfolio/:id" element={<WorkExperienceDetail />} />

              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </Router>
      
        {/* </CartProvider> */}
      </div>
    </>
  );
}