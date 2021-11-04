import * as Actions from './Actions';

export const TransactionReducer = (state, action) => {
    switch (action.type) {
        case Actions.DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => {
                    return transaction.id !== action.payload;
                })
            }
        case Actions.ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}