import React, { useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import SearchBox from './Component/SearchBox';
import SearchProvider from './Component/SearchProvider';

function App() {
  return (
    <div className="App">
      <SearchBox>
      </SearchBox>
      <ResultContext.Consumer>
        {
          result => {
            console.log(result);
          }
        }
      </ResultContext.Consumer>
    </div>
  );
}

export default App;
