import Transaction from './Transaction';
import { TableTransaction } from './TransactionHistory.styled';
import { type } from '@testing-library/user-event/dist/type';

export const TableTransaction = transactions => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
          </thead>
          {transactions.map(({type, amount, currency, id}) => {
              return ({<Transaction type={type} amount={amount} currency={currency} id={id} />})
          })}
    </table>
  );
};
