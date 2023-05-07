import {
  TableTransaction,
  TableTransactiontr,
  TableHead,
  TableBody,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TableTransactionHistory = ({ transactions }) => {
  return (
    <TableTransaction>
      <TableHead>
        <TableTransactiontr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableTransactiontr>
      </TableHead>
      <TableBody>
        {transactions.map(({ type, amount, currency, id }) => {
          return (
            <TableTransactiontr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TableTransactiontr>
          );
        })}
      </TableBody>
    </TableTransaction>
  );
};

TableTransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
