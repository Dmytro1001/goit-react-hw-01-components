import PropTypes from 'prop-types';
import { Row, TableDate } from './Transactions.module';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <Row>
      <TableDate>{type}</TableDate>
      <TableDate>{amount}</TableDate>
      <TableDate>{currency}</TableDate>
    </Row>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
