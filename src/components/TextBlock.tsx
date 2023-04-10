import styled from 'styled-components';

export const TextBlock = styled.div`
  margin: 0 auto;
  padding: 48px 0;
  max-width: 700px;
`;

export const InverseTextBlock = styled(TextBlock)`
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
