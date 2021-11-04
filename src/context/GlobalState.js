import React, { createContext, useReducer } from 'react';
import { TransactionReducer } from './TransactionReducer';
import * as Actions from './Actions';

const initialState = {
    transactions: [
        {id:1, text: "Camera", amount: -350},
        {id:2, text: "House", amount: 1200},
        {id:3, text: "Paint", amount: 50},
        {id:4, text: "Books", amount: -120},
        {id:5, text: "Walet", amount: -710}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TransactionReducer, initialState);
    
    const deleteTransaction = id => {
        dispatch({
            type: Actions.DELETE_TRANSACTION,
            payload: id
        });
    }

    const addTransaction = transaction => {
        dispatch({
            type: Actions.ADD_TRANSACTION,
            payload: transaction
        });
    }
    
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}