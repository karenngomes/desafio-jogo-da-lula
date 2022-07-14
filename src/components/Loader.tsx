import styled from "@emotion/styled";

export const Loader = () => {
  return <LoaderWrapper />;
};

export const LoaderWrapper = styled.div`
  border: 2px solid #f3f3f3;
  border-top: 2px solid ${({ theme }) => theme.colors.primaryButtonColor};
  border-radius: 50%;
  width: 15px;
  height: 15px;
  animation: spin 1s linear infinite;
  margin-left: 5px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
