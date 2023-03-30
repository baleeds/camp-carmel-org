import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Icon } from 'react-bootstrap-icons';

interface Props {
  to: string;
  text: string;
  style?: 'none' | 'ghost' | 'inverse';
  size?: 'default' | 'large';
  RightIcon?: Icon;
}

export const LinkButton: React.FC<Props> = ({ style = 'ghost', size = 'default', RightIcon, to, text }) => {
  const StyledLink: any = buttonMap[style] ?? LinkButtonNone;

  return (
    <StyledLink to={to}>
      {text} {RightIcon && <RightIcon size={24} className="icon--right" />}
    </StyledLink>
  );
};

const LinkButtonNone = styled(Link)`
  color: currentColor;
  text-decoration: none;
  font-size: 18px;
  line-height: 1.1em;
  font-weight: 700;

  display: block;
  padding: 0;
  margin: 0;
  border: none;

  .icon--right {
    margin-left: 12px;
  }

  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;

const LinkButtonGhost = styled(LinkButtonNone)`
  color: var(--color-primary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 4px;
`;

const LinkButtonInverse = styled(LinkButtonGhost)`
  background-color: rgba(255, 255, 255, 0.92);

  &:hover {
    background-color: white;
  }
`;

const buttonMap = {
  none: LinkButtonNone,
  ghost: LinkButtonGhost,
  inverse: LinkButtonInverse,
};
