import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import SearchBox from './Component/SearchBox';
import SearchContext from './Component/SearchContext';

function App() {
  const [result, setResult] = useState([]);

  return (
    <div className="App">
      <SearchContext.Provider value={result}>
        <SearchBox setResult={setResult}>
        </SearchBox>
        {/* <SearchContext.Consumer>
          {
            ({result})=>{
              console.log(result);
            }
          }
        </SearchContext.Consumer> */}
      </SearchContext.Provider>
    </div>
  );
}

export default App;
