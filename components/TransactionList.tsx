import * as React from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

function TransactionList() {
  const { transactions } = React.useContext(GlobalContext);

  return (
    <React.Fragment>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </React.Fragment>
  );
}
export default TransactionList;
