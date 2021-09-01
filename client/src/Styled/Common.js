import styled from "styled-components";

export const A11yHidden = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  -webkit-clip-path: polygon(0 0, 0 0, 0 0);
  clip-path: polygon(0 0, 0 0, 0 0);
`;

export const Btn = styled.button`
  font-size: 16px;
  border: 0;
  background-color: transparent;
  margin-left: 25px;
  width: 30px;
  height: 30px;
`;
