import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryButton};
  border-color: ${({ theme }) => theme.colors.primaryButton};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primaryButtonColor};
  padding: 10px 18px;
  font-size: 18px;
  cursor: pointer;
`;
