import React,{useState} from 'react';
import gamesdata from './data.json';
import './App.css';

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  // const [filtertype, setFilterType] = useState("all")
  
  

  return (
    <div>
      <form onSubmit={(e)=> e.preventDefault()}>
        <input type="text" placeholder="search game"  onChange ={e => setSearchTerm(e.target.value)} />
      </form>
      {/* <div>
        <button onClick={() => setFilterType("new")}>new</button>
      </div> */}
      
      {
      gamesdata.filter((val) => {
          if(val.title.toLowerCase().includes(searchTerm.toLowerCase()) ){
            return val;
          
          // else if(val.label !== "all"){
          //   return val;
          // }
          }
      }).map((val, key)=>{
        return (
          <div key={key}>
            <img src={val.image} alt={val.title} />
           </div>
        )
      })
      
      }
       
      
   </div>
      
    
    
  );
}

export default App;
