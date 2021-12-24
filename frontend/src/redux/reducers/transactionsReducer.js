import { TRANSACTIONS_DETAIL_FAIL, TRANSACTIONS_DETAIL_REQUEST, TRANSACTIONS_DETAIL_RESET, TRANSACTIONS_DETAIL_SUCCESS, TRANSACTIONS_LIST_FAIL, TRANSACTIONS_LIST_REQUEST, TRANSACTIONS_LIST_SUCCESS } from "../constants/transactionsConstants";


export const transactionsListReducer = (state = { transactions: {}, transactionsLoading: true }, action) => {
    switch (action.type) {
        case TRANSACTIONS_LIST_REQUEST:
            return { transactionsLoading: true, transactions: {} }
        case TRANSACTIONS_LIST_SUCCESS:
            return { transactionsLoading: false, transactions: action.payload }
        case TRANSACTIONS_LIST_FAIL:
            return { transactionsLoading: false, transactionsError: action.payload }
        default:
            return state;
    }
}


export const transactionsDetailReducer = (state = { transactionsDetail: {}, transactionsDetailLoading: true }, action) => {
    switch (action.type) {
        case TRANSACTIONS_DETAIL_REQUEST:
            return { transactionsDetailLoading: true, transactionsDetail: {} }
        case TRANSACTIONS_DETAIL_SUCCESS:
            return { transactionsDetailLoading: false, transactionsDetail: action.payload }
        case TRANSACTIONS_DETAIL_FAIL:
            return { transactionsDetailLoading: false, transactionsDetailError: action.payload }
        case TRANSACTIONS_DETAIL_RESET:
            return { transactionsDetail: {}, transactionsDetailLoading: true }
        default:
            return state;
    }
}