import styled from '@emotion/styled';

export const TransHistory = styled.table`
  width: 360px;
  padding: 10px auto;
  background-color: #fff;
  box-shadow: 3px 3px 3px 3px #d6d6d6;
`;

export const Heading = styled.thead`
  width: 100%;
  padding: 10px auto;
  color: #fff;
  background-color: navy;
`;

export const HeaderRow = styled.tr``;

export const Header = styled.th`
  padding: 5px;
  text-transform: uppercase;
  border: 1px solid #bcbcbc;
`;

export const Row = styled.tr`
&:nth-of-type(2n) {
    background-color: orange;
`;

export const TableDate = styled.td`
  padding: 5px;
  text-align: center;
  border: 1px solid #bcbcbc;
  &:first-of-type {
    text-align: start;
  }
`;
