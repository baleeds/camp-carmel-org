import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/camp-carmel-logo.svg';
import { StaticImage } from 'gatsby-plugin-image';
import { ContentBlock } from './ContentBlock';

export const Footer: React.FC = () => {
  return (
    <ContentBlock>
      <Container>
        <div className="footer__content">
          <div className="footer__section">
            <h4>Contact</h4>
            <p>
              <a href="mailto:campcarmel1952@gmail.com">campcarmel1952@gmail.com</a>
              <br />
              <a href="tel:8287332480">(828) 733-2480</a>
            </p>
          </div>
          <div className="footer__section">
            <h4>Mailing address</h4>
            <p>
              P.O. Box 884 <br />
              Linville, NC 28646
            </p>
          </div>
          <div className="footer__section">
            <h4>Physical address</h4>
            <p>
              <a href="https://goo.gl/maps/4NyW3EDLj1GmdPhNA" target="_blank">
                1676 Linville Falls Hwy <br />
                Newland, NC 28657
              </a>
            </p>
          </div>
          <div className="footer__section">
            <StaticImage
              src="../images/CCCA-logo-3.jpg"
              alt="Christian Camp and Conference Association (CCCA)"
              height={120}
              quality={80}
              loading="eager"
            />
          </div>
        </div>

        <div className="footer__bottom">
          <FooterLogo />
          <div className="footer__copyright">© {new Date().getFullYear()} Camp Carmel, Inc.</div>
        </div>
      </Container>
    </ContentBlock>
  );
};

const Container = styled.footer`
  .footer__content {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    align-items: center;
    text-align: center;

    @media screen and (min-width: 800px) {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 64px;
      align-items: flex-start;
      text-align: left;
    }
  }

  .footer__section {
    padding: 0 20px;
  }

  .footer__bottom {
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-text-medium);

    @media screen and (min-width: 800px) {
      justify-content: space-between;
      flex-direction: row;
    }
  }

  .footer__copyright {
    margin-top: 12px;
  }
`;

const FooterLogo = styled(Logo)`
  height: 32px;
  width: 185px;
  display: block;
`;
