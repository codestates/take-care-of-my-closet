import styled from 'styled-components'

export const LoginForm = styled.form`
  margin-top: 20px;
  height: 80vh;
  /* background-color: red; */
  border: 0;
  width: 800px;
`

export const LoginFieldset = styled.fieldset`
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  /* background-color: transparent; */
`

export const LoginInput = styled.input`
  /* border: 0; */
  width: 500px;
  height: 55px;
  /* font-size: 20px;
  padding-left: 20px; */
  padding: 0 0 0 20px ;
  background-color: transparent;
  
  margin-bottom: 30px;
  border: 0;
  border-bottom: 1px solid #ccc;
  border-width: 20%;
`

export const LoginBtns = styled.div`
display: flex;
justify-content: space-between;
/* background-color: bisque; */
width: 550px;

`

export const LoginBtn = styled.button`
  border: 0;
  /* background-color: transparent; */
  background-color:rgb(224, 219, 219);
  border: 1px solid #ccc;
  width: 200px;
  height: 90px;
  /* margin-right: 40px; */
  margin-top: 100px;
  font-size: 20px;
  border-radius: 20px;
  cursor: pointer;
`



