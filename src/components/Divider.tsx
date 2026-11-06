import styled from 'styled-components';

export const Divider = styled.div`
  height: 1px;
  background-color: #dddddd;
  margin: 24px 0;

  @media screen and (min-width: 550px) {
    margin: 36px 0;
  }

  // Between FAQ rows the row's own padding provides the spacing.
  details + &,
  &:has(+ details) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
