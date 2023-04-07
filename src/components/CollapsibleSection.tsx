import React from 'react';
import styled from 'styled-components';
import { Dash, Plus } from 'react-bootstrap-icons';

interface Props {
  id?: string;
  header: JSX.Element;
  children: JSX.Element;
}

export const CollapsibleSection: React.FC<Props> = ({ id, header, children }) => {
  const openAtStart = document.location.hash === `#${id}`;

  return (
    <Details id={id} open={openAtStart}>
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
  scroll-margin-top: 80px;
  scroll-snap-margin-top: 80px; /* iOS 11 and older */

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
      flex-shrink: 0;

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
