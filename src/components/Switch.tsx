import styled from "@emotion/styled";

export const Switch = ({
  toggleTheme,
  isLight,
}: {
  toggleTheme: () => void;
  isLight: boolean;
}) => {
  return (
    <SwitchWrapper>
      <input onClick={toggleTheme} type="checkbox" checked={!isLight} />
      <span className="slider round"></span>
    </SwitchWrapper>
  );
};

export const SwitchWrapper = styled.label`
  position: relative;
  width: 60px;
  height: 34px;
  display: inline-block;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px ${({ theme }) => theme.colors.tertiary};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
