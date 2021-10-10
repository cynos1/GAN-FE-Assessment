import React, { useState } from "react";
import gamesData from "../data.json";

function Home() {
  const [categoryData, setCategoryData] = useState([...gamesData]);
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

    const tabs = searchResult.map((data) => {
      return <img alt={data.title} src={data.image} />;
    });

    return <div className="tabs">{tabs}</div>;
  };

  return (
    <div>
      <button onClick={() => setCurrentCategory("All")}>All</button>
      <button onClick={() => setCurrentCategory("New")}>New</button>
      <button onClick={() => setCurrentCategory("Top")}>Top</button>
      <input
        type="text"
        placeholder="search game"
        onChange={(e) => setSearchData(e.target.value)}
      />

      {displayTabs(searchData)}
    </div>
  );
}

export default Home;
