import React from 'react';
import jsondata from './data.json'
import './App.css';

import FilterableProductTable from './components/FilterableProductTable.jsx';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={ jsondata.data } />
    </div>
  );
}

export default App;
