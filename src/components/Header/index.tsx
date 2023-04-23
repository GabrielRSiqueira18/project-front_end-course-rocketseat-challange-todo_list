import { HeaderContainer, SpanHeader } from "./styles";
import rocktLogo from "../../assets/rocktLogo.svg"

export function Header() {
  return(
    <HeaderContainer>
      <div>
        <img src={rocktLogo} alt="" />
        <p>
          <SpanHeader spanColor="blue">to</SpanHeader>
          <SpanHeader spanColor="purple">do</SpanHeader>
        </p>
      </div>
    </HeaderContainer>
  )
}