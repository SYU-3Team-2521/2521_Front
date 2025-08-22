
import React from "react";
import { useParams, useLocation } from "react-router-dom";
import "./details.css";
import { useNavigate } from "react-router-dom";
import { storeData } from "../data/storedata";

export default function Details() {

    const navigate = useNavigate();
  const { id } = useParams();
  const store = storeData.find((s) => s.id === parseInt(id));
const handleLoginClick = () => {
  navigate("/myproject");
};


  if (!store) {
    return <div>존재하지 않는 가맹점입니다.</div>;
  }

  return (
    <div className="page">
      {/* 상단 헤더 */}
      <header className="header">
        <h1 className="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
        >
          민생_<span>췍</span>
        </h1>
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

      {/* 본문 컨테이너 */}
      <div className="form-container">
        <div className="form-scroll">
          <div className="label_image">CHECK!</div>

          <div className="explain">
            <div className="label">
              가맹점 명 : <span>{store.name}</span>
              <br />
              카테고리 : <span>{store.category}</span>
              <br />
              가맹점 주소 : <span>{store.address}</span>
            </div>

            <div className="section">
              <span className="label">가맹점 소개</span>
              <p className="description">
                {store.description || "이 가맹점에 대한 설명이 아직 없습니다."}
              </p>
            </div>
          </div>
        </div>

        <button className="submit-btn">
          <img src="/images/heart.png" alt="Heart" />
        </button>
      </div>
    </div>
  );
}
