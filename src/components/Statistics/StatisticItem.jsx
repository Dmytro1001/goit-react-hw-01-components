import PropTypes from 'prop-types';
import { StatItem, LabelText, Percentage } from './Statistics.module';

export const StatisticItem = ({ id, label, percentage }) => {
  return (
    <StatItem>
      <LabelText>{label}</LabelText>
      <Percentage>{percentage}%</Percentage>
    </StatItem>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
