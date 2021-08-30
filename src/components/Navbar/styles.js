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
  .modal-backdrop {
    display: none;
    z-index: 1040 !important;
    background-color: #000 !important;
    width: 100vw;
    height: 100vh;
  }

  .modal-content {
    margin: 2px auto;
    z-index: 1100 !important;
  }
`
