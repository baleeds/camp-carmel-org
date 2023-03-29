import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../assets/camp-carmel-logo.svg';

interface Props {}

export const Header: React.FC<Props> = () => (
  <Container>
    <div className="inner-container">
      <Link
        to="/"
        className="brand"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        <HeaderLogo />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/dates-and-rates">Dates & Rates</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
        </ul>
      </nav>
    </div>
  </Container>
);

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: var(--color-blank);
  display: flex;
  justify-content: center;

  .inner-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--site-width);
    width: 100%;
  }

  .brand {
    flex-shrink: 0;
  }

  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      align-items: center;

      li {
        a {
          padding: 8px;
          margin: 0;
          color: var(--color-primary);
          text-decoration: none;
          text-transform: uppercase;
        }
      }
    }
  }
`;

const HeaderLogo = styled(Logo)`
  height: 42px;
`;
