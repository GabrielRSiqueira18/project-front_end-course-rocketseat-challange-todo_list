import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  
  padding: 1rem;
  width: 100%;

  font-weight: 700;

  a {
    text-decoration: none;
    color: ${props => props.theme["gray-300"]};

    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    &:hover {
      transition: 0.2s;
      border-bottom-color: ${props => props.theme["gray-300"]};
      color: ${props => props.theme["gray-200"]};
    }
  }
`