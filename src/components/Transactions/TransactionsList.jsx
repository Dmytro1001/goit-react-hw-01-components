import PropTypes from 'prop-types';
import { TransactionItem } from './Transaction';
import {
  TransHistory,
  Heading,
  HeaderRow,
  Header,
} from './Transactions.module';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransHistory>
      <Heading>
        <HeaderRow>
          <Header>Type</Header>
          <Header>Amount</Header>
          <Header>Currency</Header>
        </HeaderRow>
      </Heading>

      <tbody>
        {transactions.map(item => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </TransHistory>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
