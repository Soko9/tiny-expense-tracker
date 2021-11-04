import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Transaction({ action }) {
    const { deleteTransaction } = useContext(GlobalContext);

    return (
        (action.amount > 0
        ?(<li className="plus" key={action.id}>
            {action.text}
            <span>+{action.amount}$</span>
            <button 
                className="delete-btn" 
                onClick={() => deleteTransaction(action.id)}
                >x</button>
        </li>)
        :(<li className="minus" key={action.id}>
            {action.text}
            <span>{action.amount}$</span>
            <button 
                className="delete-btn" 
                onClick={() => deleteTransaction(action.id)}
                >x</button>
        </li>))
    )
}

export default Transaction;
