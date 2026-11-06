import styled from 'styled-components';

export const TextBlock = styled.div`
  margin: 0 auto;
  padding: 48px 0;
  max-width: 700px;
`;

export const InverseTextBlock = styled(TextBlock)`
  padding: 8px 0;

  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: white;
  }
`;
