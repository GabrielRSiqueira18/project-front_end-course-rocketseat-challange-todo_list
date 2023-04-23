import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme["gray-700"]};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4.5rem 0;

  div {
    display: flex;
    gap: .75rem;
    justify-content: center;
    align-items: center;
  }
`

const SPAN_COLORS = {
  blue: 'blue', 
  purple: 'purple-dark',
} as const

interface SpanProps {
  spanColor: keyof typeof SPAN_COLORS
}

export const SpanHeader = styled.span<SpanProps>`
  font-size: 2.5rem;
  font-weight: 900;
  color: ${props => props.theme[SPAN_COLORS[props.spanColor]]};
`