import Link from "next/link";
import { Main } from "@/components/Layout/Layout.styled";

export default function LandingPage() {
  return (
    <Main>
      <h1>Tripify</h1>
      <Link href="/triplist">View my trips →</Link>
    </Main>
  );
}
