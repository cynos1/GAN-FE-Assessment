import React, { useState } from "react";
import gamesData from "../data.json";
// import {CgMenuGridR} from 'react-icons/cg';
// import { FaSearch} from 'react-icons/fa';
function Home() {
  // const [toggle, setToggle] = useState(false);
  const [categoryData] = useState([...gamesData]);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [searchData, setSearchData] = useState("");

  const displayTabs = (searchData) => {
    const filteredData = categoryData.filter((data) =>
      data.label.includes(currentCategory.toLowerCase())
    );

    const searchResult = filteredData.filter((data) => {
      const title = data.title.toLowerCase();
      return title.includes(searchData.toLowerCase());
    });

    const tabs = searchResult.map((data, key) => {
      return <img alt={data.title} src={data.image} key={key} />;
    });

    return (
      <div className="results">
        {tabs}
      </div>
      )
  };

  return (
    <div className="body">
      <div className="nav">
        
            
        
        {/* <button onClick={setToggle(toggle)} className="hamburger">
          <FaAlignRight/>
        </button> */}
        <h2 className="slots">SLOTS</h2>
        <span className="controls">
        
          <span className="buttons">
          <button className="all" onClick={() => setCurrentCategory("All")}>
            <i></i>
            <span>All</span>
          </button>

          
          <button className="new" onClick={() => setCurrentCategory("New")}>
            <i></i>
            <span>New</span>
          </button>
          
          <button className="top" onClick={() => setCurrentCategory("Top")}>
            <i></i>
            <span>Top</span>
          </button>
          </span>

        <div className = "searchcontainer">
          <input
            type="text"
            placeholder="Search"
            className ="searchbar"
            onChange={(e) => setSearchData(e.target.value)}
          />
          {/* <FaSearch className="searchicon"/> */}
        </div>
        </span>
      </div>
        {displayTabs(searchData)}
      
    </div>
  );
}

export default Home;
