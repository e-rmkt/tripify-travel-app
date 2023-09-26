import { StyledLink } from "./CreateTrip.styled";

export default function CreateTrip() {
  return (
    <StyledLink
      href="/forms/TripForm"
      aria-label="Add a new trip to your travel list"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
      >
        <path
          d="M21.8727 9.96899H13.7917V1.88803C13.7917 0.868586 12.9463 0.0231934 11.9268 0.0231934C10.9074 0.0231934 10.062 0.868586 10.062 1.88803V9.96899H1.98105C0.961604 9.96899 0.116211 10.8144 0.116211 11.8338C0.116211 12.8533 0.961604 13.6987 1.98105 13.6987H10.062V21.7796C10.062 22.7991 10.9074 23.6445 11.9268 23.6445C12.9463 23.6445 13.7917 22.7991 13.7917 21.7796V13.6987H21.8727C22.8921 13.6987 23.7375 12.8533 23.7375 11.8338C23.7375 10.8144 22.8921 9.96899 21.8727 9.96899Z"
          fill="white"
        />
      </svg>
    </StyledLink>
  );
}
