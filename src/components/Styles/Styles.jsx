import styled from 'styled-components';

export const CustomLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const CustomSwitch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const CustomInput = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${CustomSwitch} {
    background: #213345;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;