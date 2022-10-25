import React from "react";
import "../Assets/main1.css";

function MainContent() {
  return (
    <main>
      <div className="main-head">
        <form className="search-box">
          <input
            type="search"
            placeholder="Search for an anime..."
            required
            //value={props.search}
            //onChange={(e) => props.SetSearch(e.target.value)}
          />
        </form>
      </div>
    </main>
  );
}

export default MainContent;
