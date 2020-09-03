import React, { useContext } from 'react'
import { TransactionContext } from './TransactionContext'
export default function AccountInfo() {
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

    return (
        <div className='account-info'>
            <h4>Income <br /> {getIncome()}$</h4>
            <h4>Expense <br /> {getExpense()}$</h4>
        </div>
    )
}
