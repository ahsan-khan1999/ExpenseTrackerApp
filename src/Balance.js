import React,{useContext} from 'react'
import { TransactionContext } from './TransactionContext'

export default function Balance() {
    let { transactions } = useContext(TransactionContext);
    function getIncome() {
        var income = 0
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0) {
                income += transactions[i].amount;
            }
        }
        return (income)
    }
     function getExpense() {
        var exp = 0
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0) {
                exp += transactions[i].amount
            }
        }
        return exp;
    }
    var balance = getIncome() + getExpense();
    return (   
        <div className='line'>
            <h3>YOUR BALANCE <br /> {balance}$</h3>
            
        </div>
    )
}
