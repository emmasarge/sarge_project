import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import { Layout } from "./screens/Layout";
import { Home } from "./screens/Home";
import { NoPage } from "./screens/NoPage";
import { Portfolio } from "./screens/Portfolio";
import { About } from "./screens/About";
import { Contact } from "./screens/Contact";
import ScrollToTop from "./hooks/UseScrollToTop";
import { CookiePolicy } from "./screens/CookiePolicy";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="cookies-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
