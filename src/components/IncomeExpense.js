import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function IncomeExpense() {
    const { transactions } = useContext(GlobalContext);

    var incomes = transactions.map(action => {
        if (action.amount > 0) return action.amount
        return 0;
    });
    var income = incomes.reduce((acc, item) => {
        return acc + item;
    }, 0);
    
    var expenses = transactions.map(action => {
        if (action.amount < 0) return action.amount
        return 0;
    });
    var expense = expenses.reduce((acc, item) => {
        return acc + item;
    }, 0);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">{income}.00$</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">{expense}.00$</p>
            </div>
        </div>
    )
}

export default IncomeExpense;
