import styled from "styled-components";

export const StyledListItem = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid rgba(68, 140, 255, 0.15);
`;

export const StyledButton = styled.button`
  background-color: #448cff;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 8px;
  border-style: none;
  height: 32px;
  width: fit-content;
  padding: 6px 23px;
  border-radius: 13px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  text-wrap: nowrap;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
