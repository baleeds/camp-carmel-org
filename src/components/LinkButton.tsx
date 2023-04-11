import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Icon } from 'react-bootstrap-icons';

interface Props {
  to: string;
  text: string;
  style?: 'none' | 'ghost' | 'inverse' | 'outline';
  size?: 'default' | 'large';
  RightIcon?: Icon;
  LeftIcon?: Icon;
  isAnchor?: boolean;
  blank?: boolean;
}

export const LinkButton: React.FC<Props> = ({
  style = 'ghost',
  size = 'default',
  RightIcon,
  LeftIcon,
  to,
  text,
  isAnchor = false,
  blank = false,
}) => {
  const StyledLink: any = buttonMap[style] ?? LinkButtonNone;

  return (
    <StyledLink
      to={to}
      as={isAnchor ? 'a' : undefined}
      href={isAnchor ? to : undefined}
      target={blank ? '_blank' : undefined}
    >
      {LeftIcon && <LeftIcon size={24} className="icon--left" />}
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

  .icon--left {
    margin-right: 12px;
  }

  .icon--right {
    margin-left: 12px;
  }

  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;

const LinkButtonGhost = styled(LinkButtonNone)`
  color: var(--color-primary-light);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 4px;

  &:hover {
    color: var(--color-primary);
  }
`;

const LinkButtonOutline = styled(LinkButtonGhost)`
  border: 1.5px solid var(--color-primary-light);

  &:hover {
    border-color: var(--color-primary);
  }
`;

const LinkButtonInverse = styled(LinkButtonGhost)`
  background-color: rgba(255, 255, 255, 0.92);
  color: var(--color-primary);

  &:hover {
    background-color: white;
  }
`;

const buttonMap = {
  none: LinkButtonNone,
  ghost: LinkButtonGhost,
  outline: LinkButtonOutline,
  inverse: LinkButtonInverse,
} as const;
