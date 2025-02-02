import React from 'react'
import styled from "styled-components";

const Test = styled.div<{ textColor: string, bg: string }>`
  color: ${(props) => props.textColor};
  border: 1px solid black;
  padding: 20px;
  background: ${(props) => props.bg};
`;

const Button = ({ textColor='', bg='' }) => {
  return (
    <Test textColor={textColor} bg={bg}>Button</Test>
  )
}

export default Button