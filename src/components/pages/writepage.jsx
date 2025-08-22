import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./writepage.css";

export default function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleLoginClick = () => {
  navigate("/myproject");
};


    const navigate = useNavigate();

  return (
    <div className="page">
      {/* 상단 검색 영역 */}
      <header className="header">
        <h1 className="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
        >
          민생_<span>췍</span>
        </h1>
        <div className="search-bar">
          <img
            src="/images/QuestionMark.png"
            alt="question"
            className="icon"
          />
          <input
            type="text"
            placeholder="노원구 민생 회복 소비쿠폰 가맹점은?"
          />
        </div>
        <nav className="nav">
          <div className='app_menu_item'>
              가맹점 목록
          </div>
          <div className="app_menu_item">
              찜한 매장
          </div>
          <div 
            className="app_menu_item"
            onClick={handleLoginClick}
            style={{ cursor: "pointer" }}
          >
          로그인
          </div>
        </nav>
      </header>

      {/* 제목 */}
      <h2 className="write_title">가맹점 게시물 작성</h2>

      {/* 작성 박스 */}
      <div className="form-container">
        <div className="form-scroll">
          <input
            type="text"
            className="input-text"
            placeholder="가맹점 명을 입력하세요."
          />

          <div className="section">
            <span className="label">카테고리</span>
            <div className="category">
              <label>
                <input type="radio" name="category" defaultChecked />
                전통시장&마트
              </label>
              <label>
                <input type="radio" name="category" />
                음식점&편의점
              </label>
              <label>
                <input type="radio" name="category" />
                약국&병원
              </label>
              <label>
                <input type="radio" name="category" />
                기타
              </label>
            </div>
          </div>

          <div className="section">
            <span className="label">가맹점 소개</span>
            <textarea
              className="textarea"
              placeholder="내용을 입력하세요."
            />
          </div>

          {/* 파일 업로드 */}
          <input
            type="file"
            id="poster"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <label htmlFor="poster" className="file-upload">
            <img src="/images/file.png" alt="file" className="icon" />
            포스터 첨부
          </label>

          {selectedFile && (
            <div className="preview">
              <p>선택된 파일: {selectedFile.name}</p>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="preview"
                style={{ maxWidth: "200px", marginTop: "10px" }}
              />
            </div>
          )}

          {/* 스크롤 내려야 보이는 부분 */}
          <div className="section">
            <span className="label">가맹점 주소</span>
            <textarea
              className="textarea"
              placeholder="내용을 입력하세요."
            />
          </div>
        </div>

        <button className="submit-btn">작성 완료</button>
      </div>
    </div>
  );
}

