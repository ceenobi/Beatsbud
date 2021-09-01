import styled from 'styled-components'
export const NavWrapper = styled.nav`
  .navbar__link {
    cursor: pointer;
    text-decoration: none;
    color: var(--mainDark) !important;
  }
  .navbar__link:hover {
    transform: translateY(-2px) !important;
    color: var(--mainYellow) !important;
    transition: all 0.5s ease-in-out;
  }

  .navbar__link--active {
    font-weight: bold !important;
    color: var(--mainRed) !important;
    transition: all 0.5s ease-in-out;
  }
  .bi-search {
    font-size: 1.3rem !important;
  }
 
  .navbar-brand {
    font-size: 30px !important;
  }
  .bi-list {
    font-size: 1.7rem !important;
  }
  .logo {
    width: 40px;
    height: auto;
  }
 .modal-backdrop.show{
   opacity:0!important;
 }
`
