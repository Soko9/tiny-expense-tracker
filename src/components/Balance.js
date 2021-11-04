import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Balance() {
    const { transactions } = useContext(GlobalContext);

    var amounts = transactions.map(action => {
        return action.amount;
    });

    var balance = amounts.reduce((acc, item) => {
        return acc + item;
    }, 0);

    return (
        <div className="container">
            <h6>Balance</h6>
            <h1 id="balance">{balance}.00$</h1>
        </div>
    )
}

export default Balance;
