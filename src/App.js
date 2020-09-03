import React from 'react';
import logo from './logo.svg';
import './App.css';
import Balance from './Balance';
import AccountInfo from './AccountInfo';
import TransactionHistory from './TransactionHistory';
import AddTransaction from './AddTransaction';
import {TransactionProvider} from './TransactionContext'
function App() {
  return (
    
    <TransactionProvider>

<div className='root'>
     <h1 style={{textAlign: 'center'}}>Expense Tracker</h1>
     
     <Balance />
     <AccountInfo />
     <TransactionHistory />
     <AddTransaction />

    </div>
    </TransactionProvider>
    
  );
}

export default App;
