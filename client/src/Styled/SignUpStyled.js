import styled from 'styled-components'

export const SignUpForm = styled.form`
  margin-top: 20px;
  height: 100vh;
  /* background-color: red; */
  border: 0;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SignUpFieldset = styled.fieldset`
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-left: 100px;
  /* background-color: blue; */
  width: 400px;
  /* margin: 50px; */
  /* background-color: transparent; */
`
export const SignUpInput = styled.input`
  width: 200px;
  height: 55px;
  padding: 0 20px ;
  background-color: transparent;
  margin-bottom: 10px;
  border: 0;
  border-bottom: 1px solid #aaa;
  border-width: 20%;
  margin-right: 30px;
`

export const PassWordCheck = styled.input`
  width: 200px;
  height: 55px;
  padding: 0 20px ;
  background-color: transparent;
  margin-bottom: 10px;
  border: 0;
  border-bottom: 1px solid #aaa;
  border-width: 20%;
  margin-right: 30px;
  margin-top: 20px;

`

export const FileAttachProfile = styled.label`
  /* background-color: blue; */
  background-color: rgb(224, 219, 219);
  border: 1px solid #ccc;
  /* position: absolute;
  bottom: 30px;
  left: 60px; */
  /* height: 100px; */
  /* padding: 15px; */
  border-radius: 10px;
  cursor: pointer;
  height: 30px;
  /* width: 150px; */
  width: 100px;
  text-align: center;
  
  /* margin: 20px 0; */
  padding-top: 7px;
  padding-left: 5px;
  padding-right: 5px;
  
  /* vertical-align: middle; */
  font-size: 15px;
`


export const ProfileImageBox = styled.div`
  width: 100px;
  height: 100px;
  /* background-color: green; */
  border: 1px solid #aaa;
  margin-right: 30px;
  margin-left: -30px;
  background-image: url(${props => props.src || ''});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const UserSave = styled.button`
  margin-top: 40px;
  width: 220px;
  height: 50px;
  margin-left: -90px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
`

export const DuplicateBtn = styled.button`
  width: 70px;
  height: 40px;
  border: 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`
