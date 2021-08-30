import styled from 'styled-components'

export const JumboWrapper = styled.div`
  .jumbotron {
    background-image: #333333;
    background-size: cover;
    color: var(--mainWhite);
    height: 50px;
    position: relative;
    z-index: -2;
    
  }
  .overlay {
    background: var(--mainDark);
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  .jumbo-icon {
      font-size: 1.2rem!important;
      color: var(--mainWhite)!important;
  }
`