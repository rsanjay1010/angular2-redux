import { TransactionAPIActions } from './actions';
import { ITransactionList } from '../model';

const INITIAL_STATE:ITransactionList = {
  transactions: []
};

export function transcactionReducer(state=INITIAL_STATE, action:any) {

    switch (action.type) {
      case TransactionAPIActions.LOAD_SUCCEEDED:
        return {
          ...state,
          transactions: action.payload
        };
      break;

    case TransactionAPIActions.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };
    default:
      return state
  }

  return state;
};
