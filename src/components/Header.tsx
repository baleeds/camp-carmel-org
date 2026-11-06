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
  isCta?: boolean;
}

const navbarItems: NavbarItem[] = [
  // {
  //   displayName: 'Winter Camps',
  //   to: '/winter',
  // },
  {
    displayName: '2026 Dates & Rates',
    to: '/dates',
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
  {
    displayName: 'Register',
    to: '/registration',
    isCta: true,
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
          <Link to="/registration" className="mobile-cta">
            Register
          </Link>
          <button className="nav-toggle" onClick={toggleMobileNav} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
            {isOpen ? <X size={36} /> : <List size={36} />}
          </button>

          <nav className={isOpen ? 'is-open' : ''}>
            <ul>
              {navbarItems.map((item) => (
                <li key={item.to} className={item.isCta ? 'cta' : undefined}>
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
  height: 64px;
  background-color: rgb(250 246 238 / 94%);
  backdrop-filter: saturate(140%) blur(8px);
  display: flex;
  justify-content: center;
  z-index: 9999;
  border-bottom: 1px solid var(--color-border-light);

  .right {
    display: flex;
    align-items: center;
  }

  .mobile-cta {
    display: none;
    padding: 8px 16px;
    margin-right: 8px;
    border-radius: 6px;
    background-color: var(--color-accent);
    color: var(--color-blank);
    font-weight: 700;
    font-size: 15px;
    text-decoration: none;
  }

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

          &:hover {
            text-decoration: underline;
            text-decoration-thickness: 2px;
          }

          &.active {
            color: var(--color-primary);
            text-decoration: underline;
            text-decoration-color: var(--color-accent);
            text-decoration-thickness: 2px;
          }
        }

        &.cta a {
          margin-left: 8px;
          padding: 9px 20px;
          border-radius: 6px;
          background-color: var(--color-accent);
          color: var(--color-blank);
          text-decoration: none;

          &:hover {
            background-color: var(--color-accent-dark);
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
      top: 64px;
      left: 0;
      right: 0;
      bottom: 0;
      padding-top: 16px;
      background: var(--color-cream);
      z-index: 9998;

      ul {
        display: block;

        li a {
          font-size: 20px;
          margin: 4px 0;
          padding: 12px 20px;
        }

        li.cta {
          display: none;
        }
      }
    }

    .nav-toggle {
      display: flex;
    }

    .mobile-cta {
      display: inline-block;
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
