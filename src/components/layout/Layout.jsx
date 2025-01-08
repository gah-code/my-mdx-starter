// import React, { useState } from 'react';
// import { Link } from 'gatsby';
// import { css } from '@emotion/react';
// import styled from '@emotion/styled';
// import { FaBars, FaTimes } from 'react-icons/fa';

// // Styled Components
// const SiteWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// `;

// const Header = styled.header`
//   background-color: #007acc;
//   padding: 1rem;
//   color: white;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   position: relative;
// `;

// const Nav = styled.nav`
//   display: flex;
//   justify-content: center;
//   gap: 1.5rem;

//   a {
//     color: white;
//     text-decoration: none;
//     font-weight: bold;

//     &:hover {
//       text-decoration: underline;
//     }
//   }

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const MobileNav = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: fixed;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 250px;
//   background: #007acc;
//   box-shadow: 4px 0 6px rgba(0, 0, 0, 0.1);
//   padding: 1rem;
//   transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
//   transition: transform 0.3s ease-in-out;
//   z-index: 100;

//   a {
//     color: white;
//     text-decoration: none;
//     font-weight: bold;
//     padding: 1rem 0;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   z-index: 99;
//   display: ${(props) => (props.open ? 'block' : 'none')};
// `;

// const HamburgerButton = styled.button`
//   display: none;
//   background: none;
//   border: none;
//   color: white;
//   font-size: 1.5rem;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const Main = styled.main`
//   flex: 1;
//   /* padding: 2rem; */
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const Footer = styled.footer`
//   background-color: #f4f4f4;
//   padding: 1rem;
//   text-align: center;
//   border-top: 1px solid #ddd;
// `;

// export default function Layout({ children }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <SiteWrapper>
//       <Header>
//         <HamburgerButton onClick={toggleMenu}>
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </HamburgerButton>
//         <Nav>
//           <Link to='/'>Home</Link>
//           <Link to='/about'>About</Link>
//           <Link to='/blog'>Blog</Link>
//         </Nav>
//         <Overlay open={menuOpen} onClick={closeMenu} />
//         <MobileNav open={menuOpen}>
//           <Link to='/' onClick={closeMenu}>
//             Home
//           </Link>
//           <Link to='/about' onClick={closeMenu}>
//             About
//           </Link>
//           <Link to='/blog' onClick={closeMenu}>
//             Blog
//           </Link>
//         </MobileNav>
//       </Header>

//       <Main>{children}</Main>

//       <Footer>
//         <p>&copy; {new Date().getFullYear()} My Site</p>
//       </Footer>
//     </SiteWrapper>
//   );
// }
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';
import Overlay from './Overlay';
import { SiteWrapper, Main } from '../common/StyledComponents';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <SiteWrapper>
      <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <Overlay open={menuOpen} onClick={closeMenu} />
      <MobileNav open={menuOpen} closeMenu={closeMenu} />
      <Main>{children}</Main>
      <Footer />
    </SiteWrapper>
  );
}
