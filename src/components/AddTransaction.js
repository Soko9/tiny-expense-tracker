import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function AddTransaction() {
    const { transactions, addTransaction } = useContext(GlobalContext);
    const [text, updateText] = useState("");
    const [amount, updateAmount] = useState(0);

    var ids = transactions.map(action => {
        return action.id;
    });

    var lastId = 0;
    if (ids.length !== 0)
        lastId = ids[ids.length-1]+1;

    const handleSubmit = e => {
        e.preventDefault();
        var newTransaction = {
            id: lastId,
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
        updateText("");
        updateAmount(0);
    }

    return (
        <>
        <h5>New Transaction</h5>
        <form id="form" onSubmit={handleSubmit}>
            <div className="form-control">
                <input 
                    type="text" 
                    id="text" 
                    value={text}
                    onChange={(e) => updateText(e.target.value)}
                    placeholder="What's For"/>
            </div>
            <div className="form-control">
                <input 
                    type="number" 
                    id="amount"
                    value={amount}
                    onChange={(e) => updateAmount(e.target.value)}
                    placeholder="$0"/>
            </div>
            <button className="btn" type="submit">+</button>
        </form>
        </>
    )
}

export default AddTransaction;