import React,{useState,useContext} from 'react'
import {TransactionContext} from './TransactionContext'
export default function AddTransaction() {

    let {addTrans} = useContext(TransactionContext);
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(description,amount);
        if(amount === 0){
            alert('you cannot put 0')
            setDescription('')
            setAmount(0)
            return false;
        }
        else{
            addTrans({
                amount:Number(amount),
                desc:description
            })
            setDescription('')
            setAmount(0)
        }
        

    }

    let [description,setDescription] = useState('');
    let [amount,setAmount] = useState(0);
    return (
        <div>
            <h3>Add New Transaction</h3>
            <hr />
            <form className='transaction-form' onSubmit={handleSubmit}>
                <label>
                    Enter Item
                    <input type='text' placeholder='Book etc' required
                    value= {description}
                    onChange={(e) => setDescription(e.target.value)}
                    
                    ></input>
                </label>
                <label>
                    Enter Amount
                    <input type='number' placeholder='2.00$' required
                    value={amount}
                    onChange = {(e) => setAmount(e.target.value)}
                    ></input>
                </label>
                <br />
                <input type='submit' value='Add Transaction' style={{backgroundColor:'lightblue'}}/>
            </form>

        </div>
    )
}
