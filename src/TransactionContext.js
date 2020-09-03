import React ,{createContext,useReducer} from 'react'
import TransReducer from './TransReducer'

let transactions = [
    {desc:'Cash',amount:100},
    {desc:'Book',amount:50},
    {desc:'Camera',amount:20}
]

export const TransactionContext = createContext(transactions);
//it will render all its childerns;
export const TransactionProvider = ({children}) => {
    let [state,dispatch] =useReducer(TransReducer,transactions);

    function addTrans(transObj){
        // we are giving action type and payload in reducer so..
        dispatch({
            type:"ADD_TRANSACTION",
            payload:{
                amount:transObj.amount,
                desc:transObj.desc
            },
        })
    }
    return(
        <TransactionContext.Provider value={{
            transactions:state,
            addTrans
        }}>
            {children}
            </TransactionContext.Provider>
    )
}