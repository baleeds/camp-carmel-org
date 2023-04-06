import React from 'react';
import styled from 'styled-components';
import { Dash, Plus } from 'react-bootstrap-icons';

interface Props {
  header: JSX.Element;
  children: JSX.Element;
}

export const CollapsibleSection: React.FC<Props> = ({ header, children }) => {
  return (
    <Details>
      <summary>
        <Plus className="collapsible-section__icon open" />
        <Dash className="collapsible-section__icon close" />
        {header}
      </summary>

      <div className="collapsible-section__content">{children}</div>
    </Details>
  );
};

const Details = styled.details`
  summary {
    display: flex;
    align-items: center;
    cursor: pointer;
    list-style: none;

    // Hide the default indicator
    &::-webkit-details-marker {
      display: none;
    }

    .collapsible-section__icon {
      margin-right: 12px;
      width: 32px;
      height: 32px;

      @media screen and (min-width: 550px) {
        width: 38px;
        height: 38px;
      }
    }

    .collapsible-section__icon.close {
      display: none;
    }

    .collapsible-section__icon.open {
      display: unset;
    }
  }

  &[open] {
    summary {
      .collapsible-section__icon.close {
        display: unset;
      }

      .collapsible-section__icon.open {
        display: none;
      }
    }
  }

  .collapsible-section__content {
    padding: 0 0 0 46px;

    @media screen and (min-width: 550px) {
      padding: 0 0 0 52px;
    }
  }
`;
