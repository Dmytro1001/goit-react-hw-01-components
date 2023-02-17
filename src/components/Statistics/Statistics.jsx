import PropTypes from 'prop-types';
import { StatisticItem } from './StatisticItem';
import { Wrapper, Title, StatList } from './Statistics.module';

export const Statistics = ({ title, data }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <StatList>
        {data.map(item => (
          <StatisticItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </StatList>
    </Wrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
