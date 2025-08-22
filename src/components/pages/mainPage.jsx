import './mainPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storeData } from "../data/storedata";


function App() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const categories = [
    { key: "전체", label: "전체" },
    { key: "전통시장&마트", label: "전통시장&마트" },
    { key: "음식점&편의점", label: "음식점&편의점" },
    { key: "약국&병원", label: "약국&병원" },
    { key: "기타", label: "기타" }
  ];


  const filteredStores =
    activeCategory === "전체"
      ? storeData
      : storeData.filter(store => store.category === activeCategory);

  const totalPages = Math.ceil(filteredStores.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const paginatedStores = filteredStores.slice(startIndex, startIndex + cardsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };



  // 로그인 클릭 → myproject로 이동
  const handleLoginClick = () => {
    navigate("/myproject");
  };

  // 가맹점 카드 클릭 → details로 이동
  const handleCardClick = (storeId) => {
    navigate(`/details/${storeId}`);
  };


  return (
    <div className="app_container">

      {/* 🔹 헤더 */}
      <div className="app_header_container">  
        <h1 className="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
        >
          민생_<span>췍</span>
        </h1>

        {/* 검색창 */}
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

        {/* 메뉴 */}
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

      </div>

      {/* 🔹 카테고리 */}
      <div className="app_content">
        <div className="app_content_container">

        <div className="app_content_left">
        <div className="app_content_category">가맹점 목록</div>
        
        <div className="app_content_category_item">
          {categories.map(cat => (
            <div
              key={cat.key}
              className={activeCategory === cat.key ? "category_button active" : "category_button"}
              onClick={() => {
                setActiveCategory(cat.key);
                setCurrentPage(1);
              }}
            >
              {cat.label}
            </div>
          ))}
        </div>
        </div>
        <div className="app_content_order">
          <div className="app_order_button">최신순</div>
          <div className="app_order_button">인기순</div>
        </div>
        </div>
        
        
      </div>

      {/* 🔹 카드 + 버튼 */}
      <div className="card-and-button-wrapper">
      <div className="app_content_project_grid">
        {paginatedStores.map(store => {
          const isSky = Math.random() > 0.5;
          return (
            <div 
              key={store.id} 
              className="store-card"
              onClick={() => handleCardClick(store.id)}
              style={{ cursor: "pointer" }}
            >
              {isSky ? (
                <div className="store-top2">
                  <span className="store-check">MIN</span>
                </div>
              ) : (
                <div className="store-top1">
                  <span className="store-check">CHECK!</span>
                </div>
              )}
              <div className="store-bottom">
                <span className="store-name">{store.name}</span>
                <span className="store-category">{store.category}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div class="floating-buttons">
        <button class="chatbot-btn">
        <img src="gpt.png" alt="챗봇" />
        </button>
        <button 
        class="write-btn"
        onClick={() => navigate("/write")}
        style={{ cursor: "pointer" }}
        >+</button>
      </div>
    </div>

      {/* 🔹 페이지네이션 */}
      <div className="pagination-nav">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          &laquo;
        </button>
        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx + 1}
            className={currentPage === idx + 1 ? "active" : ""}
            onClick={() => handlePageChange(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          &raquo;
        </button>
      </div>

    </div>
  );
}

export default App;
