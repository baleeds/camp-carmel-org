import styled from 'styled-components';
import React, { CSSProperties } from 'react';

interface Props {
  background?: 'blank' | 'light' | 'none';
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

const UnstyledContentBlock: React.FC<Props> = ({ className, children, style }) => {
  return (
    <div className={className} style={style}>
      <div className="content-block__inner">{children}</div>
    </div>
  );
};

export const ContentBlock = styled(UnstyledContentBlock)`
  background-color: var(--color-background-${({ background = 'blank' }) => background});

  .content-block__inner {
    width: 100%;
    max-width: var(--site-width);
    margin: 0 auto;
    padding: 0 20px;
  }
`;
