import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";

/* Legal Pages */
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";

/* Existing Tools */
import JsonFormatter from "./pages/tools/JsonFormatter";
import Base64Tool from "./pages/tools/Base64Tool";
import UuidGenerator from "./pages/tools/UuidGenerator";
import PasswordGenerator from "./pages/tools/PasswordGenerator";
import TimestampConverter from "./pages/tools/TimestampConverter";

/* New Tools */
import JWTDecoder from "./pages/tools/JWTDecoder";
import URLEncoder from "./pages/tools/URLEncoder";
import RegexTester from "./pages/tools/RegexTester";
import JSONtoCSV from "./pages/tools/JSONtoCSV";
import CSVtoJSON from "./pages/tools/CSVtoJSON";
import SQLFormatter from "./pages/tools/SQLFormatter";
import HTTPStatusCodes from "./pages/tools/HTTPStatusCodes";
import ColorConverter from "./pages/tools/ColorConverter";
import HashGenerator from "./pages/tools/HashGenerator";
import LoremIpsum from "./pages/tools/LoremIpsum";

function App() {
  return (
    <BrowserRouter>

      {/* Global Toast UI */}
      <Toaster position="top-center" reverseOrder={false} />

      <Navbar />

      <main className="min-h-screen">

        <Routes>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />

          {/* Existing Tools */}
          <Route path="/json-formatter" element={<JsonFormatter />} />
          <Route path="/base64-encoder" element={<Base64Tool />} />
          <Route path="/uuid-generator" element={<UuidGenerator />} />
          <Route path="/password-generator" element={<PasswordGenerator />} />
          <Route path="/timestamp-converter" element={<TimestampConverter />} />

          {/* New Tools */}
          <Route path="/jwt-decoder" element={<JWTDecoder />} />
          <Route path="/url-encoder" element={<URLEncoder />} />
          <Route path="/regex-tester" element={<RegexTester />} />
          <Route path="/json-to-csv" element={<JSONtoCSV />} />
          <Route path="/csv-to-json" element={<CSVtoJSON />} />
          <Route path="/sql-formatter" element={<SQLFormatter />} />
          <Route path="/http-status-codes" element={<HTTPStatusCodes />} />
          <Route path="/color-converter" element={<ColorConverter />} />
          <Route path="/hash-generator" element={<HashGenerator />} />
          <Route path="/lorem-ipsum" element={<LoremIpsum />} />

        </Routes>

      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;