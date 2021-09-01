import styled from 'styled-components'

export const HomeWrapper = styled.div`
  .backdrop {
    background: url('https://res.cloudinary.com/ceenobi/image/upload/v1627861193/Gadgets/beats-studio-buds-red_qewv9n.jpg');
    background-size: cover;
    position: relative;
  }
  .overlay {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  color: var(--mainWhite);
  h1 {
    font-size: 4rem;
    text-align: left;
    line-height: 0.8;
    width: 35%;
  }
  h2 {
    text-decoration: none !important;
  }
  .push-up {
    transform: translateY(-70%) !important;
    background: var(--mainWhite);
  }
  .push-down {
    margin-top: 3rem;
  }
  span {
    color: var(--lightDark);
    text-decoration: none !important;
    margin-left: 5px;
    &:hover {
      color: var(--mainRed);
      transition: all 0.5s ease-in-out;
    }
  }
  .bg-image:hover {
    transform: scale(1.1);
    transition: all 1s linear;
  }
  .shift {
    position: fixed;
    bottom: 0;
    right:0;
    left:0
  }
  .stay{
    position:relative;
  }
  .bi-x {
    font-size:30px;
  }
  @media (min-width: 992px) {
    .backdrop {
      margin-top: 3rem;
    }
    .resize {
      width: 60%;
    }
    h1 {
      font-size: 5.5rem;
      text-align: left;
      line-height: 0.8;
      width: 35%;
    }
  }
`
