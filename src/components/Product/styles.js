import styled from 'styled-components'

export const ProductWrapper = styled.div`
  .overlay {
    position: absolute;
    top: 50%;
    left: 30%;
    z-index: 4;
  }
  .overcast {
    position: absolute;
    top: 10%;
    left: 45%;
    z-index: 2;
  }
  .back {
    position: relative;
    overflow: hidden;
  }
  p {
    font-family: fira Sans;
  }
  .bi-bag-check-fill {
    font-size: 20px;
  }

  @media (max-width: 300px) {
    p {
      font-size: 1rem;
    }
    .overlay {
      left:20%;
    }
  }
`
