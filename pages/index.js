import { Main, StyledLink } from "@/components/Layout/Layout.styled";

import Logo from "@/components/Layout/Logo.svg";

export default function LandingPage() {
  return (
    <Main>
      <Logo />
      <StyledLink href="/triplist">View my trips</StyledLink>
    </Main>
  );
}
