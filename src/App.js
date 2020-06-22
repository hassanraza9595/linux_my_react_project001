import React from 'react';
import './App.css';
import Child from './child'
import {TransactionProvider} from './tContext';

function App() {
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  );
}

export default App;
