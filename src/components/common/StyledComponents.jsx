import styled from '@emotion/styled';

export const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  max-width: 1200px;
  /* margin: 0 auto; */
  padding: 2rem;
`;

export const HeaderContainer = styled.header`
  background-color: #007acc;
  padding: 1rem;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background: #007acc;
  box-shadow: 4px 0 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 100;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 1rem 0;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterContainer = styled.footer`
  padding: 1rem;
  text-align: center;
  background-color: #f4f4f4;
  border-top: 1px solid #ddd;
`;

export const Hamburger = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: ${(props) => (props.open ? 'block' : 'none')};
`;
