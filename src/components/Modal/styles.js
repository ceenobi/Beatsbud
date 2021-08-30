import styled from 'styled-components'
export const ModalWrapper = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
  }

  .modal-content {
    max-width: 500px;
    background: var(--mainDark);
    transform: translateY (-200px);
    transition: all 0.3s ease-in-out;
    transform: translateY(0);
  }

  .modal-header,
  .modal-footer {
    padding: 10px;
    color: var(--mainWhite);
  }
  .modal-body {
    padding: 10px;
  }
  input {
    border: 1px solid var(--mainWhite);
  }
  input:placeholder {
    background: var(--mainDark);
    color: var(--mainWhite);
  }
  .form-outline {
    background: #0b7dda;
  }
  .bi-x {
    font-size: 30px;
    color: var(--mainWhite);
  }
  @media (min-width: 992px) {
    .modal-content {
      max-width: 800px;
    }
  }
  @media (max-width: 576px) {
    .modal-content {
      max-width: 300px;
    }
  }
`