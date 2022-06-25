import * as React from 'react';
import { GlobalContext } from '../context/GlobalState';
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '₹ ' +
    (p[0].split('')[0] === '-' ? '-' : '') +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}
function Balance() {
  const { transactions } = React.useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <React.Fragment>
      <h4>Your Balance {total}</h4>
      <h1>{moneyFormatter(total)}</h1>
    </React.Fragment>
  );
}
export default Balance;
