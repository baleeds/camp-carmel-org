import * as React from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import Logo from '../assets/camp-carmel-logo.svg';
import { ChevronRight, Envelope, List, Telephone, X } from 'react-bootstrap-icons';
import { useCallback, useEffect, useRef, useState } from 'react';

interface Props {}

interface NavbarItem {
  displayName: string;
  to: string;
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
];

const MOBILE_MENU_ID = 'mobile-menu';
const DESKTOP_QUERY = '(min-width: 1101px)';

export const Header: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = useCallback((returnFocus = false) => {
    setIsOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  // While the menu is open: lock page scroll, make everything outside the header inert
  // (so Tab and screen readers stay inside the menu), and close on Escape or on resize to desktop.
  useEffect(() => {
    if (!isOpen) return;

    const header = headerRef.current;
    const siblings = header?.parentElement
      ? Array.from(header.parentElement.children).filter((el) => el !== header)
      : [];
    siblings.forEach((el) => el.setAttribute('inert', ''));

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close(true);
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = () => desktop.matches && close();

    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onBreakpoint);

    return () => {
      siblings.forEach((el) => el.removeAttribute('inert'));
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [isOpen, close]);

  return (
    <Container ref={headerRef} className={isOpen ? 'is-open' : undefined}>
      <div className="inner-container">
        <Link to="/" className="brand" aria-label="Camp Carmel home" onClick={() => close()}>
          <HeaderLogo aria-hidden="true" focusable="false" />
        </Link>

        <nav className="desktop-nav" aria-label="Main">
          <ul>
            {navbarItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} activeClassName="active" partiallyActive>
                  {item.displayName}
                </Link>
              </li>
            ))}
            <li className="cta">
              <Link to="/registration" activeClassName="active">
                Register
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mobile-actions">
          <Link to="/registration" className="mobile-cta" onClick={() => close()}>
            Register
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={isOpen}
            aria-controls={MOBILE_MENU_ID}
            aria-label="Menu"
            onClick={() => setIsOpen((o) => !o)}
          >
            {isOpen ? <X size={32} aria-hidden="true" /> : <List size={32} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <MobileMenu id={MOBILE_MENU_ID} hidden={!isOpen}>
        <nav aria-label="Main">
          <ul className="mobile-menu__links">
            {navbarItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} activeClassName="active" partiallyActive onClick={() => close()}>
                  <span>{item.displayName}</span>
                  <ChevronRight size={18} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu__footer">
          <Link to="/registration" className="mobile-menu__register" onClick={() => close()}>
            Register for summer 2026
          </Link>

          <p className="mobile-menu__help">Questions? We're glad to help.</p>
          <ul className="mobile-menu__contact">
            <li>
              <a href="tel:8287332480">
                <Telephone size={18} aria-hidden="true" />
                (828) 733-2480
              </a>
            </li>
            <li>
              <a href="mailto:campcarmel1952@gmail.com">
                <Envelope size={18} aria-hidden="true" />
                campcarmel1952@gmail.com
              </a>
            </li>
          </ul>
          <p className="mobile-menu__tagline">Christ-centered camping since 1952 · Linville, NC</p>
        </div>
      </MobileMenu>
    </Container>
  );
};

const HEADER_HEIGHT = 64;

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${HEADER_HEIGHT}px;
  background-color: var(--color-cream);
  display: flex;
  justify-content: center;
  z-index: 9999;
  border-bottom: 1px solid var(--color-border-light);

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
    padding: 6px 12px;
    border-radius: 6px;
  }

  // Desktop navigation

  .desktop-nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;

    li {
      margin: 0 !important;
    }

    a {
      padding: 8px 16px;
      margin: 0;
      color: var(--color-primary-light);
      text-decoration: none;
      font-size: 16px;
      white-space: nowrap;
      font-weight: 700;
      display: inline-block;
      border-radius: 6px;

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

    .cta a {
      margin-left: 8px;
      padding: 9px 20px;
      background-color: var(--color-accent);
      color: var(--color-blank);
      text-decoration: none;

      &:hover {
        background-color: var(--color-accent-dark);
      }
    }
  }

  // Mobile actions (Register + menu button)

  .mobile-actions {
    display: none;
    align-items: center;
    gap: 4px;
    padding-right: 8px;
  }

  .mobile-cta {
    padding: 10px 16px;
    border-radius: 6px;
    background-color: var(--color-accent);
    color: var(--color-blank);
    font-weight: 700;
    font-size: 15px;
    line-height: 1;
    text-decoration: none;

    &:hover {
      background-color: var(--color-accent-dark);
    }
  }

  .nav-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 6px;
    color: var(--color-primary);
  }

  @media screen and (max-width: 1100px) {
    .desktop-nav {
      display: none;
    }

    .mobile-actions {
      display: flex;
    }

    &.is-open .mobile-cta {
      visibility: hidden; // the menu has its own, larger Register button
    }
  }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: none; }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: ${HEADER_HEIGHT}px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overscroll-behavior: contain;
  background-color: var(--color-cream);
  padding: 8px 20px calc(24px + env(safe-area-inset-bottom));
  animation: ${slideIn} 180ms ease-out;

  &[hidden] {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media screen and (min-width: 1101px) {
    display: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
  }

  .mobile-menu__links a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 64px;
    padding: 8px 4px;
    border-bottom: 1px solid var(--color-border-light);
    font-family: var(--font-stack-secondary);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: var(--color-primary);
    text-decoration: none;

    svg {
      flex-shrink: 0;
      color: var(--color-text-medium);
    }

    &.active span {
      text-decoration: underline;
      text-decoration-color: var(--color-accent);
      text-decoration-thickness: 2px;
      text-underline-offset: 6px;
    }

    &:hover svg,
    &.active svg {
      color: var(--color-accent);
    }
  }

  .mobile-menu__footer {
    margin-top: auto;
    padding-top: 32px;
  }

  .mobile-menu__register {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
    border-radius: 8px;
    background-color: var(--color-accent);
    color: var(--color-blank);
    font-size: 17px;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      background-color: var(--color-accent-dark);
    }
  }

  .mobile-menu__help {
    margin: 24px 0 4px;
    font-size: 15px;
    font-weight: 700;
    color: var(--color-text-medium);
  }

  .mobile-menu__contact a {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    min-height: 44px;
    font-size: 17px;
    color: var(--color-primary);

    svg {
      color: var(--color-text-medium);
    }
  }

  .mobile-menu__tagline {
    margin: 16px 0 0;
    font-size: 14px;
    color: var(--color-text-medium);
  }
`;

const HeaderLogo = styled(Logo)`
  height: 36px;
  display: block;

  @media screen and (max-width: 1000px) {
    height: 30px;
  }
`;
