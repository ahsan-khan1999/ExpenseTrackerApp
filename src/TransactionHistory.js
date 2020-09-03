import React,{useContext} from 'react'
import {TransactionContext} from './TransactionContext'

export default function TransactionHistory() {
    let {transactions} = useContext(TransactionContext)
    console.log(transactions)
    return (
        <div>
            <h4>History</h4>
            <hr />
            <ul className='list'>
            {
                transactions.map((transObj,ind) => {
                    return(
                        <li key={ind}>
                            <span>{transObj.desc}</span>
                            <span>{transObj.amount}</span>
                        </li>
                    )
                })
            }
        

            </ul>
        </div>
    )
}
