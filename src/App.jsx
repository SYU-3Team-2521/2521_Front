
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import MainPage from "./components/pages/mainPage";
import Details from "./components/pages/details";
import MyProject from "./components/pages/myproject";
import WritePage from "./components/pages/writepage";

function App() {
  return (
    <Router>
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<MainPage />} />

        {/* 상세페이지 */}
        <Route path="/details/:id" element={<Details />} />

        {/* 내 프로젝트 페이지 */}
        <Route path="/myproject" element={<MyProject />} />

        {/* 작성 페이지 */}
        <Route path="/write" element={<WritePage />} />


      </Routes>
    </Router>
  );
}

export default App;
