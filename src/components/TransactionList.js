import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';
import { AnimatedList } from 'react-animated-list';

function TransactionList() {
    const { transactions } = useContext(GlobalContext);
    return (
        <div>
            <h5>History</h5>
            <ul id="list" className="list">
            <AnimatedList animation={"zoom"}>
                {transactions.map(action => {
                    return (
                        <Transaction action={action} />
                    );
                })}
            </AnimatedList>
            </ul>
        </div>
    )
}

export default TransactionList;
