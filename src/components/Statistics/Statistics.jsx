import PropTypes from 'prop-types';
import {
  Wrapper,
  Title,
  StatList,
  StatItem,
  LabelText,
  Percentage,
} from './Statistics.module';

export const Statistics = ({ title, data }) => {
  const renderData = () =>
    data.map(({ id, label, percentage }) => (
      <StatItem key={id}>
        <LabelText>{label}</LabelText>
        <Percentage>{percentage}%</Percentage>
      </StatItem>
    ));

  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <StatList>{data && renderData()}</StatList>
    </Wrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
