import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SubmitDiv = styled.div`
  margin: auto;
  text-align: center;
`

const StyledLink = styled(Link)`
  color: #000000;
  margin-right: 300px;
  display: inline-block;
  width: 40px;
  background: rgba(255, 255, 220, 0.5);
  &:hover {
    background: #fad850;
  }
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid rgba(255, 255, 220, 0.5);
  border-radius: 3px;
`;

const SubmitBtn = styled.button`
  background: #fff870;
  &:hover {
    background: #85015d;
  }
  font-size: 0.9em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #8f8d64;
  border-radius: 3px;
  text-align: center;
`;

const DivInput = styled.div`
  margin: auto;
  margin-bottom: 10px;
  background: rgba(255, 255, 220, 0.5);
  text-align: center;
  width: 200px;
  border: 2px solid #8f8d64;
  border-radius: 3px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  box-sizing: border-box;
  text-align: center;
`;

const H3 = styled.h3`
  background: rgba(255,255,220,0.8);
  width: 200px;
  margin: auto;
  margin-bottom: 10px;
  padding: 0.25em 1em;
  border: 1px solid rgba(55,55,20,0.5);
  border-radius: 3px;
  text-align: center;
`

const Signup = ({ username, password, handleSignupSubmit }) => {
  return (
    <div>
        <StyledLink data-cy="back-btn" to="/">Quay lại</StyledLink>
        <H3>ĐĂNG KÍ</H3>
      <div>
        <form onSubmit={handleSignupSubmit}>
          <DivInput>
            Tên đăng nhập <Input data-cy="signup-user-input" {...username} />
          </DivInput>
          <DivInput>
            Mật khẩu <Input data-cy="signup-pass-input" {...password} />
          </DivInput>
          <SubmitDiv>
            <SubmitBtn data-cy="signup-submit" type="submit">Đăng kí</SubmitBtn>
          </SubmitDiv>
        </form>
      </div>
    </div>
  );
};

export default Signup;
