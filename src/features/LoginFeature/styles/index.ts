import styled from 'styled-components';

export const StyledLogin = styled.div`
  width: 350px;
  border-radius: 10px;
  margin: 3rem auto 0 auto;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: #fff;
`;

export const StyledForm = styled.form``;

export const StyledControlInput = styled.div`
  & ~ & {
    margin-top: 0.35rem;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  font: inherit;
  border: none;
  background: #d3d3dd;

  &:focus {
    outline: none;
  }
`;
