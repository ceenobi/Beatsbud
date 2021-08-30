import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  .bi {
    font-size: 25px;
  }
  .bi:hover {
    color: var(--mainDark);
  }
  .logo {
    width: 40px;
    height: auto;
  }
  footer section p{
      text-decoration: none!important;
  }
   footer section p:hover {
       color: var(--mainRed);
   }
   h6{
     color: var(--mainDark);
   }
`