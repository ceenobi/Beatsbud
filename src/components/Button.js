import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  cursor: pointer;
  text-decoration: none;
  color: ${(prop) => (prop.click ? 'var(--mainWhite)' : 'var(--mainDark)')};
  border: none;
  background: ${(prop) =>
    prop.click ? 'var(--mainDark)' : 'var(--mainYellow)'};
  transition: all 0.5s ease-in-out;
  padding: 0.475rem 0.85rem 0.475rem 0.85rem;
  margin: 0.2rem 0.3rem 0.2rem 0;
  border-radius: 0.3rem;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 /15%);
  &:hover {
    transform: translateY(-2px);
    color: ${(prop) => (prop.click ? 'var(--mainWhite)' : 'var(--mainRed)')};
    background: ${(prop) =>
      prop.click ? 'var(--mainBlue)' : 'var(--mainWhite)'};
    border: none;
  }
  &:focus {
    outline: none;
  }
`
