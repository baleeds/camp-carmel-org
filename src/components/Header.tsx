import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../assets/camp-carmel-logo.svg';
import { List, X } from 'react-bootstrap-icons';
import { useState } from 'react';

interface Props {}

interface NavbarItem {
  displayName: string;
  to: string;
}

const navbarItems: NavbarItem[] = [
  {
    displayName: 'Winter Camp',
    to: '/winter',
  },
  {
    displayName: 'Summer Camps',
    to: '/dates',
  },
  {
    displayName: 'Registration',
    to: '/registration',
  },
  {
    displayName: 'Parent Info',
    to: '/parent-info',
  },
  {
    displayName: 'Life at Camp',
    to: '/camp',
  },
  {
    displayName: 'History & Beliefs',
    to: '/history',
  },
];

export const Header: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsOpen((o) => !o);
  };

  return (
    <Container>
      <div className="inner-container">
        <Link to="/" className="brand">
          <HeaderLogo />
        </Link>

        <div className="right">
          <button className="nav-toggle" onClick={toggleMobileNav}>
            {isOpen ? <X size={36} /> : <List size={36} />}
          </button>

          <nav className={isOpen ? 'is-open' : ''}>
            <ul>
              {navbarItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} activeClassName="active">
                    {item.displayName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: var(--color-blank);
  display: flex;
  justify-content: center;
  z-index: 9999;
  border-bottom: 1px solid var(--color-border-light);
  box-shadow: rgb(0 0 0 / 6%) 0 1px 6px 0;

  .inner-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--site-width);
    width: 100%;
  }

  .brand {
    flex-shrink: 0;
    margin-top: -6px; // Shift the logo up to center the text
    padding: 0 12px;
  }

  .nav-toggle {
    display: none;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    color: var(--color-primary);
    margin-right: 8px;
  }

  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      align-items: center;

      li {
        margin: 0 !important;

        a {
          padding: 8px 16px;
          margin: 0;
          color: var(--color-primary-light);
          text-decoration: none;
          //text-transform: uppercase;
          font-size: 16px;
          white-space: nowrap;
          font-weight: 700;
          display: inline-block;

          &:hover {
            color: var(--color-primary);
          }

          &.active {
            color: var(--color-text-primary);
          }
        }
      }
    }
  }

  @media screen and (max-width: 1100px) {
    nav {
      display: none;
    }

    nav.is-open {
      display: block;
      position: fixed;
      top: 60px;
      left: 0;
      right: 0;
      bottom: 0;
      padding-top: 16px;
      background: white;
      z-index: 9998;

      ul {
        display: block;

        li a {
          font-size: 18px;
          margin: 4px 0;
        }
      }
    }

    .nav-toggle {
      display: flex;
    }
  }
`;

const HeaderLogo = styled(Logo)`
  height: 36px;
  display: block;

  @media screen and (max-width: 1000px) {
    height: 30px;
  }
`;
